import { Link } from "react-router-dom";
import {Ul, Li, Img} from "./style"

export default function MoviesMap( {movies, setMovie} ){
    return(
        <Ul>
            {movies.map(movie => 
                <Link to={`sessoes/${movie.id}`} key={movie.title}>
                    <Li onClick={()=>setMovie(movie.title)}><Img src={movie.posterURL} alt={movie.title}/></Li>
                </Link>
            )}
        </Ul>
    )
}