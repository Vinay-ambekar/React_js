import { Routes,Route } from 'react-router-dom';
import Materialui from '../component/MaterialUi/Materialui.jsx';
import Formvalidation from '../component/Classcomponent/Formvalidation.jsx';

function Routing(){
    return(
        <>
            <Routes>
                <Route path='/miui' element={<Materialui/>}/>
                <Route path='/forv' element={<Formvalidation/>}/>
            </Routes>
        </>
    )
}
export default Routing;