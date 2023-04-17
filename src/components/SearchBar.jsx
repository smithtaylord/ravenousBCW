import React from "react";
import '../assets/scss/components/SearchBar.scss'
import { useState } from "react";

export default function SearchBar() {
const [sortBy, setSortBy] = useState('best_match');

function handleSort(category){
    setSortBy(category)
}


    return (
        <div className="componentName">
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
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
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
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
