import React from 'react';
import './App.css';
import { gql } from "@apollo/client";
import Header from '../header/header';
import { BrowserRouter as Router } from 'react-router-dom';
import { client } from '../../common/apollo-client';
const App: React.FC = () => {

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
      <Router>
        <Header />
      </Router>
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