import React from "react";
import './searchBar.css'

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
    renderSortOptions() {
        return Object.keys(sortByOptions).map(sbo => {
            let sortByOptionsValue = sortByOptions[sbo]
            return (
                <li key={sortByOptionsValue}>{sbo}</li>
            )
        })
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let`&apos;`s Go</a>
                </div>
            </div>
        )
    }
}

export default SearchBar
