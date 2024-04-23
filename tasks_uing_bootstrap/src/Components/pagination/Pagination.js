import React, { Component } from 'react'

class Pagination extends Component {
    state = {
          usersData: [],
          pageNumbers:0, 
          pageNumber:[0,1,2,3,4,5,6,7,8,9,10],
          selectedvalue:6
    }
    

     buttons=(e)=>{
      console.log('helow',e.target.value)
      let values=parseInt(e.target.value)
      this.setState({ pageNumbers: values }, function(){
      this.getUsersData();
    });
    }

    handleSelect=(e)=>{
      console.log('value',e.target.value)
      let selectes=e.target.value
      this.setState({selectedvalue:selectes},()=>{
        this.getUsersData();
      })
    }
  
    componentDidMount(){
        this.getUsersData()
    }
    getUsersData = async () => {
      try {
          const response = await fetch(`https://dummyapi.io/data/v1/user?page=${this.state.pageNumbers}&limit=${this.state.selectedvalue}`, {
              method: 'GET',
              headers: {
                  "app-id": '661f9033ab92140f115a3adf'
              }
          });
  
          if (!response.ok) {
              throw new Error('Failed to fetch data');
          }
  
          const { data } = await response.json();
          this.setState({ usersData: data });
      } catch (error) {
          console.error('Error fetching data:', error);
          alert('404 page not found')
         
          // Handle the error here, you can set state to indicate an error occurred, or log it, etc.
      }
  }
  
  
  render() {
    return (
      <>
        
        <div className='container d-flex justify-content-center pb-5 my-5 '>
                <div className='w-100'>
                    <div className='row'>
                    {/* <h2 className='my-3'>Pagination</h2> */}
                    {
    this.state.usersData && this.state.usersData.length > 0 ?(
                    this.state.usersData.map((user)=>{
                       return  (
                    <div className='  col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-3' key={user.id}>
                        <div className=" w-100 card px-3 bg-dark shadow-lg">
                        <div className="row d-flex align-items-center ">
                        <div className="col-xs-6 col-sm-6  col-md-4 col-lg-3 col-xl-3 p-2">
                          <img src={user.picture} className="rounded-circle border border-light shadow-lg w-50 " alt="..."/>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-8 col-lg-9 col-xl-9" >
                          <div className="card-body ">
                            <p className="fs-5 text-light ">{user.id}</p>
                             <p className="text-light fs-5"> <span className='fs-4 fw-bold'>{user.title}</span>   {user.firstName} {user.lastName}</p>
                            
                        </div>
                        </div>
                        </div>              
                        </div>
                    </div>)

                    })
                  ):<center>
                  <div class="spinner-border  text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div></center>
                    }    
            </div>
            <div className='d-flex justify-content-end'  onChange={this.handleSelect}>  
            <select class="form-select w-25 me-3 mb-2" >
              <option selected value='6'>Choose items to display per page</option>
              <option value='6'>six</option>
              <option value="10">Ten</option>
              <option value="16">sixteen</option>
            </select> 
             <div>      
                {
          this.state.pageNumber.map((indx)=>{
            return (
              <>
              <button className='btn btn-primary text-center mb-2 me-2' onClick={this.buttons} value={indx} key={indx}>{indx +1}</button>  
              {/* console.log('index',indx) */}   
              </>
            )
          })
        }
        </div>
        
        </div>
 
            
         
          
        </div>
        </div>
       
    
      </>
      
    )
  }
}

export default Pagination