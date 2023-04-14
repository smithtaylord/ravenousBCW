import { observer } from 'mobx-react-lite';
import React from 'react';
import '../assets/scss/pages/HomePage.scss';
import BusinessList from '../components/BusinessList.jsx';
import SearchBar from '../components/SearchBar.jsx';
import { AppState } from "../AppState.js";



function HomePage() {

  return (

    <div className="HomePage">
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList businesses={AppState.businesses} />
      </div>
    </div>
  )
}

export default observer(HomePage)

