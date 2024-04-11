export function Component3({laptop,vegi,ArrObjes}){//using destrcturing we are passing data (props)
    
   // console.log('coponent3', laptop)
    return(
        <div>
            <center>
            <h2>child component 3</h2>
            <p>vegitable: {vegi}</p>
            <p>Vegitables : <b>{laptop.join(' ')}</b></p>
            <b>using map method we are printng laptops from</b>
            {laptop.map((lap,index)=><p key={index}>{lap}</p>)}
            <b>array of objects we are using map method </b>
            {ArrObjes.map((obje,index)=>{
                return(
                    <div style={{border:'1px solid black',margin:'5px',width:'20rem',textAlign:'center'}} key={index}>
                        <p>name:{obje.name}</p>
                        <p>age:{obje.age}</p>
                        <p>work:{obje.work}</p>
                    </div>
                )
            })}
            </center>
           
        </div>
    )
}