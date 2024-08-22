import {configureStore } from "@reduxjs/toolkit"
import counterSlice from "./counterSlice"

//we have to use a method configurestore to initialise this file as store
export const store= configureStore({
    reducer:{
    //to add reducer
    counter:counterSlice
    }
})
