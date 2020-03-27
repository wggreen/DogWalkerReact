import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/

export const WalkerContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const WalkerProvider = (properties) => {
    const [walkers, setWalkers] = useState([])

    const getWalkers = () => {
        return fetch("/api/walker")
            .then(res => res.json())
            .then(setWalkers)
    }

    const addWalker = walker => {
        return fetch("/api/walkers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(walker)
        })
            .then(getWalkers)
    }

    const deleteWalker = walkerId => {
        return fetch(`/api/walker/${walkerId}`, {
            method: "DELETE"
        })
            .then(getWalkers)
    }

    const updateWalker = walker => {
        return fetch(`/api/walker/${walker.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(walker)
        })
            .then(getWalkers)
    }

    /*
        Load all Walkers when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getWalkers()
    }, [])

    useEffect(() => {
        console.log("****  WALKER APPLICATION STATE CHANGED  ****")
        console.log(walkers)
    }, [walkers])

    return (
        <WalkerContext.Provider value={{
            walkers, addWalker, deleteWalker, updateWalker
        }}>
            {properties.children}
        </WalkerContext.Provider>
    )
}