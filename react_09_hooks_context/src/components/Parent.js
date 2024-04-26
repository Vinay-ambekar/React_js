import React from "react"
import ChildC from "./ChildA"
import { createContext } from "react"

export const context=createContext()
const Parent=()=>{
    return(
        <>
        <h1>parent</h1>
        <context.Provider value='i am moving to ChaildC component'>
          <ChildC/>
        </context.Provider>
        </>
    )
}
export default Parent