
import MovieLists from '../MovieLists/MovieLists'
import { useEffect , useState } from 'react'
import api from '../Book/Book'
import AddMovies from '../AddMovies/AddMovies'
import { useDispatch, useSelector } from 'react-redux'
import { addMovies } from '../features/MoviesSlice'
import { Link } from 'react-router-dom'


 
const Home = () => {

    const dispatch = useDispatch();
    const getting = useSelector((state)=> state.movies.movie)


        console.log(getting)

        const [contacts , setContacts ] = useState([])
        
        
    useEffect(()=>{
        const getData = async ()=>{
            const retrieve = await api.get("/contacts")

            const mydata = await retrieve.data
            if(mydata) {
                console.log(mydata)
                
                dispatch(addMovies(mydata))
            }
        }
        getData();
    },[])

  

    const display = contacts.map((info)=>{
        return <MovieLists data={info}></MovieLists>
    })


    

    return (
        <div>
            <div className="container text-right my-5">
                
                <Link to="/addMovies">
                <button className="btn btn-primary text-right">Add Movies</button> 
                </Link>
                
                <div className="cotainer my-5 text-center">
                    <h3 className="my-5">Add New Contact Here</h3>
                    <AddMovies existing= {contacts}></AddMovies>

                </div>
                <h3 className="display-4 font-weight-bold text-center">All Contact</h3> 
                <div className="row">  
                   
                    {display}
                </div>
            </div>
            

        </div>
    )
}

export default Home
