import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import '../assets/scss/pages/HomePage.scss';
import BusinessList from '../components/BusinessList.jsx';
import SearchBar from '../components/SearchBar.jsx';
import { AppState } from "../AppState.js";
import Pop from '../utils/Pop.js';
import { businessService } from '../services/BusinessService.js'



function HomePage() {
  const term = 'pizza'
  const location = 'Boise'
  const sortBy = 'best_match'

  async function getTestBusinesses() {
    try {
      await businessService.getTestBusinesses(term, location, sortBy)
    } catch (error) {
      Pop.error(error, '[get test businesses]')
    }
  }

  useEffect(() => {
    getTestBusinesses()
  }, [])

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

