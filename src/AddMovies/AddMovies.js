import React, { useState } from 'react'

const AddMovies = (props) => {


        console.log(props.existing)

        


        

    return (
        <div>
                <div className="col-md-6 m-auto border border-bottom p-5 text-left">
                    <form action="" >
                        <div className="form-group ">
                            <label htmlFor="">Enter the Name</label>
                            <input type="text" className="form-control" placeholder="Enter the name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Enter the Email</label>
                            <input type="text" className="form-control" placeholder="Enter the Email" />
                        </div>
                        <button className="btn btn-primary">Add Contact</button>
                    </form>
                </div>
        </div>
    )
}

export default AddMovies
