import React from 'react'

export const Kart = ({kart,setKart}) => {
  return <>
  <div className='container'>
    <h3 className='h3 text-center mt-3'>MyKart</h3>
    <div className='row'>
    {
        kart.map((e)=>{
       return <div className="card col-md-4 m-2" style={{width: "18rem"}} key={e.id}>
       <img src={e.image} className="card-img-top" alt="..."/>
       <div className="card-body">
         <h5 className="card-title">{e.category}</h5>
         <p className="card-text">{e.description}</p>
         <p className='card-text'>Rs.{e.price}</p>
         {/* <a href="#" className="btn btn-primary" onClick={()=>{AddToKart(e)}}>Add to Kart</a> */}
       </div>
     </div>
        },[])
    }

    </div>
   
  </div>
  </>
}
