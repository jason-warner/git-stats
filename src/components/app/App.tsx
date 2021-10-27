import React, { useEffect, useState } from 'react';
import './App.css';
// import { gql } from "@apollo/client";
import Header from '../header/header';
import { BrowserRouter as Router } from 'react-router-dom';
import { getViewer } from '../../hooks/getViewer';
import { GET_VIEWER } from '../../hooks/getViewer';
import { resultKeyNameFromField } from '@apollo/client/utilities';
const App: React.FC = () => {
  const [viewer, updateViewer] = useState('null');


  useEffect(() => {
    const viewer:string = `${getViewer()}`
    updateViewer(viewer)
  }, [])


  return (
    <div className="App">
      <Router>
        <Header />
      </Router>
      <main>
        <h1> {viewer} </h1>
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