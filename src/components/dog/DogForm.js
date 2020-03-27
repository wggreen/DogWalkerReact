import React, { useContext, useState, useEffect } from "react"
import { DogContext } from "./DogProvider"
import { OwnerContext } from "../owner/OwnerProvider"


export default props => {
    const { dogs, addDog, updateDog } = useContext(DogContext)
    const { owners } = useContext(OwnerContext)
    const [dog, setDog] = useState({})

    const editMode = props.match.params.hasOwnProperty("dogId")

    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newDog = Object.assign({}, dog)
        newDog[event.target.name] = event.target.value
        setDog(newDog)
    }

    const setDefaults = () => {
        if (editMode) {
            const dogId = parseInt(props.match.params.dogId)
            const selectedDog = dogs.find(d => d.id === dogId) || {}
            setDog(selectedDog)
        }
    }

    useEffect(() => {
        setDefaults()
    }, [dogs])

    const constructNewDog = () => {
        const ownerId = parseInt(dog.dogOwnerId)

        if (ownerId === 0) {
            window.alert("Please select an owner")
        } else {
            if (editMode) {
                updateDog({
                    id: dog.id,
                    dogName: dog.dogName,
                    dogOwnerId: ownerId,
                    breed: dog.breed,
                    notes: dog.notes
                })
                    .then(() => props.history.push("/dogs"))
            } else {
                addDog({
                    DogName: dog.dogName,
                    DogOwnerId: ownerId,
                    Breed: dog.breed,
                    Notes: dog.notes
                })
                    .then(() => props.history.push("/dogs"))
            }
        }
    }

    return (
        <form className="dogForm">
            <h2 className="dogForm__title">{editMode ? "Update Dog" : "Add Dog"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="dogName">Dog name: </label>
                    <input type="text" name="dogName" required autoFocus className="form-control"
                        proptype="varchar"
                        placeholder="Dog name"
                        defaultValue={dog.dogName}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="dogOwnerId">Owner: </label>
                    <select name="dogOwnerId" className="form-control"
                        proptype="int"
                        value={dog.dogOwnerId}
                        onChange={handleControlledInputChange}>

                        <option value="0">Select an owner</option>
                        {owners.map(o => (
                            <option key={o.id} value={o.id}>
                                {o.dogOwnerName}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="breed">Dog breed: </label>
                    <input type="text" name="breed" required autoFocus className="form-control"
                        proptype="varchar"
                        placeholder="Dog breed"
                        defaultValue={dog.breed}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="notes">Notes: </label>
                    <textarea type="text" name="notes" className="form-control"
                        proptype="varchar"
                        value={dog.notes}
                        onChange={handleControlledInputChange}>
                    </textarea>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewDog()
                }}
                className="btn btn-primary">
                {editMode ? "Save Updates" : "Add Dog"}
            </button>
        </form>
    )
}