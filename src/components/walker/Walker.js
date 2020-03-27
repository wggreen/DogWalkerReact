import React from "react"
import "./Walker.css"
import { Link } from "react-router-dom"

export default ({ walker }) => (
    <section className="walker">
        <h3 className="walker__name">{walker.walkerName}</h3>
        <div className="walker__neighborhoodName">{walker.neighborhood.neighborhoodName}</div>
    </section>
)