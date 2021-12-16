import { useEffect, useState } from "react"
import axios from 'axios';
import { Link } from "react-router-dom";
import "./style.css"

export default function Homepage({setMovie}){
    const [movies, setMovies] = useState(null)
    useEffect(()=>{
        const promess = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies");

		promess.then(answer => {
			setMovies(answer.data);
		});
    }, [])

    return(
        <main className="homepage">
            <h2>Selecione o filme</h2>
            {!movies
                ?   <p>Carregando</p>
                :
                    <ul>
                        {movies.map(movie => <Link to={`sessoes/${movie.id}`} key={movie.title}><li onClick={()=>setMovie(movie.title)}><img src={movie.posterURL} alt={movie.title}/></li></Link>)}
                    </ul>
            }
            
        </main>
    )
}