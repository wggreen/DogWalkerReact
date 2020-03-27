import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/

export const DogContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const DogProvider = (properties) => {
    const [dogs, setDogs] = useState([])

    const getDogs = () => {
        return fetch("/api/dog")
            .then(res => res.json())
            .then(setDogs)
    }

    const addDog = dog => {
        return fetch("/api/dog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dog)
        })
            .then(getDogs)
    }

    const deleteDog = dogId => {
        return fetch(`/api/dog/${dogId}`, {
            method: "DELETE"
        })
            .then(getDogs)
    }

    const updateDog = dog => {
        return fetch(`/api/dog/${dog.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dog)
        })
            .then(getDogs)
    }

    /*
        Load all Dogs when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getDogs()
    }, [])

    useEffect(() => {
        console.log("****  DOG APPLICATION STATE CHANGED  ****")
        console.log(dogs)
    }, [dogs])

    return (
        <DogContext.Provider value={{
            dogs, addDog, deleteDog, updateDog
        }}>
            {properties.children}
        </DogContext.Provider>
    )
}