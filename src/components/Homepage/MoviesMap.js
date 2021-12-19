import { Link } from "react-router-dom";
import {Ul, Li, Overlay} from "./style"

export default function MoviesMap( {movies, setMovie} ){
    return(
        <Ul>
            {movies.map(movie => 
                <Link to={`sessoes/${movie.id}`} key={movie.title}>
                    <Li onClick={()=>setMovie(movie.title)} img={movie.posterURL}><Overlay>{movie.overview}</Overlay></Li>
                </Link>
            )}
        </Ul>
    )
}