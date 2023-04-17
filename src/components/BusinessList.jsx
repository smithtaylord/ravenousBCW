import React from "react";
import '../assets/scss/components/BusinessList.scss'
import Business from './Business.jsx'
import { AppState } from "../AppState.js";

// NOTE this class is kind of unnecessary, but it makes the home page a little cleaner to look at

class BusinessList extends React.Component {
    render() {
        return (
            <div className="row">
                {AppState.businesses.map(b => {
                    return (
                        <div key={b.id} className="col-6 col-lg-4 mt-3">
                            <Business business={b} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default BusinessList 