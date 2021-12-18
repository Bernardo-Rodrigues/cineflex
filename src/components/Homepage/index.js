import { useEffect, useState } from "react"
import axios from 'axios';
import MoviesMap from "./MoviesMap";

export default function Homepage({setMovie}){
    const [movies, setMovies] = useState(null)

    useEffect(()=>{
        const promess = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies");

		promess.then(answer => {
			setMovies(answer.data);
		});
        //eslint-disable-next-line
    }, [])

    return(
        <>
            <h2>Selecione o filme</h2>
            {!movies
                ?   <p>Carregando</p>
                :   <MoviesMap movies={movies} setMovie={setMovie}/>
            }
        </>
    )
}