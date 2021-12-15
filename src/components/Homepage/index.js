import { useEffect, useState } from "react"
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Homepage(){
    const [movies, setMovies] = useState(null)

    useEffect(()=>{
        const promess = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies");

		promess.then(answer => {
			setMovies(answer.data);
            console.log(answer.data)
		});
    }, [])

    console.log(movies)

    return(
        <>
            <h2>Selecione o filme</h2>
            {!movies
                ?   <p>Carregando</p>
                :
                    <ul>
                        {movies.map(movie => <Link to="sessoes/1" key={movie.title}><li><img src={movie.posterURL} alt={movie.title}/></li></Link>)}
                    </ul>
            }
            
        </>
    )
}