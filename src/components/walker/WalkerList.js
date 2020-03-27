import React, { useContext } from "react"
import { WalkerContext } from "./WalkerProvder"
import Walker from "./Walker"
import "./Walker.css"

export default (props) => {
    const { walkers } = useContext(WalkerContext)

    return (
        <div className="walkers">
            {
                walkers.map(walker => {

                    return <Walker key={walker.id}
                        walker={walker} />
                })}
        </div>
    )
}