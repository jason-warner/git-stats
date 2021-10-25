import React from 'react';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  createHttpLink,
  HttpLink,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

function App() {
  const link = createHttpLink({
    uri: 'https://api.github.com/graphql'
  })

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        //only has public repo access... will use local storage soon
        authorization: `Bearer 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`,
      }
    }
  });

  const client = new ApolloClient({
    link: authLink.concat(link),
    cache: new InMemoryCache()
  });

  client
    .query({
      query: gql`
        query { 
          viewer { 
            login
          }
        }
      `
    })
    .then((result) => console.log("GQL: ", result.data.viewer.login))
    .catch((err) => console.log("Fetch Error: ", err));

  return (
    <div className="App">
      <header className="App-header">
        <h1>Git Stats</h1>
      </header>
      <main>

      </main>
    </div>
  );
}

export default App;


//References
//https://medium.com/swlh/introduction-to-graphql-with-github-api-64ee8bb11630
//https://github.community/t/graphql-api-how-to-fetch-all-repositories-that-the-current-user-has-access-to/13792
//https://gist.github.com/jonathansick/8bbe88a85addaeeea4e7fe9ef15b016b
//https://www.youtube.com/watch?v=B4rY2rgn1RY