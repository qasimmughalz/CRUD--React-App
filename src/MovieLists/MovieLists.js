import React from 'react'
import man from '../images/man.png'
import css from './MovieLists.css'



export const MovieLists = (props) => {
 

    return (
        
           <div className="col-md-3 my-4">
              <div className="card">
                      <div className="card-body p-0 ">
                            <img src={man} alt="man in pnk" className="img-fluid p-0 m-0" />
                            <div className="card-footer text-left">
                            <p className="font-weight-bold">Name :  <span className="font-weight-normal">{props.data.name}</span></p>
                            <p className=" font-weight-bold">Email : <span className="font-weight-normal">{props.data.desc}</span></p>
                            </div>
                           
                       </div>
                  </div>
           </div>
        
    )
}


export default MovieLists;
