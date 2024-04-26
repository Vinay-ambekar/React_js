import { Route, Routes } from "react-router-dom"
import Usereduce from "../usereduce/Usereduce"
import Useref from "../usereference/Useref"
import Timer from "../timer_useRef/Timer"

const Routing=()=>{
    return(
        <>
        <Routes>
            <Route path='/useref' element={<Useref/>}/>
            <Route path='/usereduce' element={<Usereduce/>}/>
            <Route path='/timer' element={<Timer/>}/>
        </Routes>
        
        </>
    )
}
export default Routing