import React from "react";
import '../assets/scss/components/SearchBar.scss'
import { useState } from "react";
import Pop from "../utils/Pop.js";
import { businessService } from "../services/BusinessService.js";

export default function SearchBar() {
// NOTE --V--- This is the variable name
// ---------------V-------- This is the function that can change the variable's name
const [sortBy, setSortBy] = useState('best_match');
const [term, setTerm] = useState('');
const [location, setLocation] = useState('');

function handleSort(category){
    setSortBy(category)
}
const search = async(e) => {
    e.preventDefault();
    try {
      await businessService.search(term, location, sortBy)
    }
    catch (error){
      Pop.error(error);
    }
}


    return (
        <div className="componentName">
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul className="d-flex justify-content-center">
                        <li onClick={() => handleSort('best_match')} 
                        className={sortBy == 'best_match' ? 'px-5 active' : 'px-5'}>
                            Best Match</li>
                        <li onClick={() => handleSort('rating')} 
                        className={sortBy == 'rating' ? 'px-5 active' : 'px-5'}>
                            Highest Rated</li>
                        <li onClick={() => handleSort('review_count')} 
                        className={sortBy == 'review_count' ? 'px-5 active' : 'px-5'}>
                            Most Reviewed</li>
                    </ul>
                </div>
                <form onSubmit={search}>
          <div className="SearchBar-fields">
            <input
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Search Businesses"
            />
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Where?"
            />
          </div>
          <div className="SearchBar-submit">
            <button className="btn" type="submit">
              Let&apos;s Go
            </button>
          </div>
        </form>
            </div>
        </div>
    )

}

// class SearchBar extends React.Component {
//     render() {
//         return (
            
//         )
//     }
// }

// export default SearchBar
