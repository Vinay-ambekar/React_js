import { useEffect, useState } from "react";

const AdviceGenerator=()=>{
    const [advices, setAdvices] = useState({}); // Initialize advices as an empty object

    useEffect(() => {
      fetchAdvice(); 
    }, []);
    
    const handleClick = () => {
        fetchAdvice(); 
        };

    const fetchAdvice = async () => {
        try {
          const response = await fetch('https://api.adviceslip.com/advice');
          const adviceData = await response.json();
          setAdvices(adviceData); 
         } catch (error) {
          console.log('error fetching advice:', error);
        }
      };

   // console.log('advices:',advices.slip.advice)

    return(
        <>
        <div className="d-flex justify-content-center my-5">
        <div className="card w-50">
            <div className="card-header">
            AdviceGenerator
            </div>
            <div className="card-body">
              <p className="card-text">{advices.slip.advice}</p>
              <button className="btn btn-primary" onClick={handleClick}>click</button>
            </div>
        </div>
        </div>
        </>
    )
}
export default AdviceGenerator;