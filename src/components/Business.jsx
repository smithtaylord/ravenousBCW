/* eslint-disable react/prop-types */
import React from "react"
import '../assets/scss/components/Business.scss'

class Business extends React.Component {
    render() {

        const business = this.props.business


        return (
            <div className="rounded elevation-3">
                <div className="">
                    <img
                        src={business.imageSrc}
                        alt={business.name}
                        className="img-fluid rounded-top" />
                </div>
                <h2 className="fs-3 p-3 clipped">{business.name}</h2>
                <div className="d-flex justify-content-between px-3">
                    <div className="">
                        <div>{business.address}</div>
                        <div>{business.city}</div>
                        <div>{business.state} {business.zipCode}</div>
                    </div>
                    <div className="pb-2">
                        <h3 className="font-yellow fs-4">{business.category}</h3>
                        <h3 className="font-yellow fs-5">{business.rating} stars</h3>
                        <div>{business.reviewCount} reviews</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Business