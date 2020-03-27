import React from "react"
import "./Dog.css"
import { Link } from "react-router-dom"

export default ({ dog, props }) => (
    <section className="dog">
        <h3 className="dog__name">{dog.dogName}</h3>
        <div className="dog__breed">{dog.breed}</div>
        <div className="dog__notes">{dog.notes}</div>
        <h4 className="dog__owner">{dog.dogOwner.dogOwnerName}</h4>
        <div className="dog__ownerAddress">{dog.dogOwner.dogOwnerName}</div>
        <div className="dog__ownerNeighborhood">{dog.dogOwner.neighborhood.neighborhoodName}</div>
        <button onClick={() => {
            props.history.push(`/dogs/edit/${dog.id}`)
        }}>Edit
            </button>
    </section>
)