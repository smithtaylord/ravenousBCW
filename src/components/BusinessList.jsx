import React from "react";
import '../assets/scss/components/BusinessList.scss'
import Business from './Business.jsx'
import { AppState } from "../AppState.js";

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {AppState.businesses.map(b => {
                    return <Business
                        key={b.id}
                        business={b} />
                })}
            </div>
        )
    }
}

export default BusinessList 