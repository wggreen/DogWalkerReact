import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/

export const OwnerContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const OwnerProvider = (properties) => {
    const [owners, setOwners] = useState([])

    const getOwners = () => {
        return fetch("/api/owner")
            .then(res => res.json())
            .then(setOwners)
    }

    const addOwner = owner => {
        return fetch("/api/dogOwner", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(owner)
        })
            .then(getOwners)
    }

    const deleteOwner = ownerId => {
        return fetch(`/api/dogOwner/${ownerId}`, {
            method: "DELETE"
        })
            .then(getOwners)
    }

    const updateOwner = owner => {
        return fetch(`/api/dogOwner/${owner.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(owner)
        })
            .then(getOwners)
    }

    /*
        Load all Owners when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getOwners()
    }, [])

    useEffect(() => {
        console.log("****  OWNER APPLICATION STATE CHANGED  ****")
        console.log(owners)
    }, [owners])

    return (
        <OwnerContext.Provider value={{
            owners, addOwner, deleteOwner, updateOwner
        }}>
            {properties.children}
        </OwnerContext.Provider>
    )
}