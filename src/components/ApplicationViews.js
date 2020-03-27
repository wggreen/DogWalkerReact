import React from "react"
import { Route } from "react-router-dom"
import { WalkerProvider } from "./walker/WalkerProvder"
import WalkerList from "./walker/WalkerList"
import { DogProvider } from "./dog/DogProvider"
import DogList from "./dog/DogList"
import DogForm from "./dog/DogForm"
import { OwnerProvider } from "./owner/OwnerProvider"
import OwnerList from "./owner/OwnerList"

export default (props) => {
    return (
        <>
            <WalkerProvider>
                <Route path="/walkers/" render={
                    props => <WalkerList {...props} />
                } />
            </WalkerProvider>

            <OwnerProvider>
                <Route path="/owners/" render={
                    props => <OwnerList {...props} />
                } />
                <DogProvider>
                    <Route exact path="/dogs/" render={
                        props => <DogList {...props} />
                    } />
                    <Route exact path="/dogs/create" render={
                        props => <DogForm {...props} />
                    } />
                    <Route exact path="/dogs/edit/:dogId(\d+)" render={
                        props => <DogForm {...props} />
                    } />
                </DogProvider>
            </OwnerProvider>
        </>
    )
}