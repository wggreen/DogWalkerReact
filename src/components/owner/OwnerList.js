import React, { useContext } from "react"
import { OwnerContext } from "./OwnerProvider"
import Owner from "./Owner"
import "./Owner.css"

export default (props) => {
    const { owners } = useContext(OwnerContext)

    return (
        <div className="owners">
            {
                owners.map(owner => {

                    return <Owner key={owner.id}
                        owner={owner} />
                })}
        </div>
    )
}