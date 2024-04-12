const Arrays=({phone})=>{

    return(
        <>{/* this are fragement use to render files faster */}
         <h2 className="text-center mt-3">i am an arry componets</h2>   
            <div className="container">
                {phone.map((phone,index)=>(
                    <ul className="list-group" key={index}>
                        <li className="list-group-item">{phone}</li>
                    </ul>
                ))
                }
            </div>
        </>
    )
}
export default Arrays;