const Component1=(props)=>{// using props we are getting data
    
    return(
        <div>
            <center>
                <h2>i am child component1</h2>
                <p>vegitabel from parent componet: <b>{props.vegi}</b></p>
                <p>laptops: <b>{props.laptops.join(' ')}</b></p>
                {props.laptops.map((lap,index)=> <p key={index}>{lap}</p>
                    /* console.log('componet1',lap) */
                )}
                {
                    props.ArrObjes.map((objs,index)=>{
                        return(
                            <div key={index}>
                                <ul style={{width:'100px'}}>
                                    <li>Name:{objs.name}</li>
                                    <li>Age:{objs.age}</li>
                                    <li>Work:{objs.work}</li>
                                </ul>
                            </div>
                        )
                    })
                }
            </center>
        </div>
    )
}
export default Component1;