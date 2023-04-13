import React from "react";
import '../assets/scss/components/BusinessList.scss'
import Business from './Business.jsx'

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
            </div>
        )
    }
}

export default BusinessList 