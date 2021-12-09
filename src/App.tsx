import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
     <h1>netflix clone</h1>
     <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOrginals}/>
    </div>
  );
}

export default App;
