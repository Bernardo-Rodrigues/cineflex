import { LocalStyle, Movie, MovieDesc, MovieImg } from "./style"

export default function Footer( {movie} ){
    return(
        <>
            <LocalStyle/>
            {movie 
                &&  <Movie>
                        <MovieImg movie={movie.img}></MovieImg>
                        <MovieDesc>
                            <span>{movie.title}</span><br/>
                            {movie.weekday 
                                &&  <span>{movie.weekday} - {movie.hour}</span>
                            }
                        </MovieDesc>
                        
                    </Movie>
            }
        </>
    )
}