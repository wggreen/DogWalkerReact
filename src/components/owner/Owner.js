import React from "react"
import "./Owner.css"
import { Link } from "react-router-dom"

export default ({ owner }) => (
    <section className="owner">
        <h3 className="owner__name">{owner.dogOwnerName}</h3>
        <div className="owner__address">{owner.dogOwnerAddress}</div>
        <div className="owner__neighborhood">{owner.neighborhood.neighborhoodName}</div>
        <div className="owner__phone">{owner.phone}</div>
        <li className="owner__dogs">
            {
                owner.dogs.map(dog => {
                    return (
                        <>
                            <li className="owner__dog">{dog.dogName}
                                <ul className="owner__dogInfo">
                                    <li className="owner__dogBreed">{dog.breed}</li>
                                    <li className="owner__dogNotes">{dog.notes}</li>
                                </ul>
                            </li>
                        </>
                    )
                })
            }
        </li>
    </section>
)