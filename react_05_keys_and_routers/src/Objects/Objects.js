const Objects=({Arrobjects})=>{

    return(
        <>{/* fragment */}
        <h2 className="text-center mt-3">Data</h2>
        <table className="container table list-group-flush">
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                    <th>email</th>
                    <th>address</th>
                    <th>phone</th>
                </tr>
            </thead>
            <tbody>
            {Arrobjects.map((obj)=>(
            <tr key={obj.id}>
                <td>{obj.id     }</td>
                <td>{obj.name   }</td>
                <td>{obj.age    }</td>
                <td>{obj.email  }</td>
                <td>{obj.address}</td>
                <td>{obj.phone  }</td>
            </tr>
            ))
            }
            </tbody>
        </table>
        </>
    )
}
export default Objects;