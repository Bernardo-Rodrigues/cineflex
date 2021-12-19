import { useEffect, useState } from "react"
import axios from 'axios';
import MoviesMap from "./MoviesMap";
import { Loader, Loading } from "../../style";

export default function Homepage({setMovie}){
    const [movies, setMovies] = useState(null)

    useEffect(()=>{
        const promess = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies");

		promess.then(answer => {
			setMovies(answer.data);
		});
        //eslint-disable-next-line
    }, [])

    if(!movies) return <Loading><Loader/></Loading> 
    return(
        <>
            <h2>Selecione o filme</h2>
              
            <MoviesMap movies={movies} setMovie={setMovie}/>
        </>
    )
}