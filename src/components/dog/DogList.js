import React, { useContext } from "react"
import { DogContext } from "./DogProvider"
import Dog from "./Dog"
import "./Dog.css"

export default (props) => {
    const { dogs } = useContext(DogContext)

    return (
        <div className="dogs">
            <button onClick={() => {
                props.history.push("/dogs/create")
            }}>
                Add Dog
        </button>
            {
                dogs.map(dog => {

                    return <Dog
                        key={dog.id}
                        dog={dog}
                        props={props} />
                })}
        </div>
    )
}