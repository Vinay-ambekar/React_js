import { context } from "./Parent"
const ChildC=()=>{
    return(
        <>
        <h1>ChildC</h1>
        <context.Consumer>
            {(value)=>value}
        </context.Consumer>
        </>
    )
}
export default ChildC