import React from "react";
import '../assets/scss/components/SearchBar.scss'


class SearchBar extends React.Component {
    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        <li className="px-5">Best Match</li>
                        <li className="px-5">Highest Rated</li>
                        <li className="px-5">Most Reviewed</li>
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
        )
    }
}

export default SearchBar
