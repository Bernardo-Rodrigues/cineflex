import { useEffect, useState } from "react"
import axios from 'axios';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import "./style.css"

export default function Sessions({setSessionDate}){
    const [sessions, setSessions] = useState(null)
    const { movieId } = useParams();

    useEffect(()=>{
        const promess = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${movieId}/showtimes`);

		promess.then(answer => {
			setSessions(answer.data.days);
		});
    }, [movieId])

    return(
        <main className="sessions">
            <h2>Selecione o horário</h2>
            {!sessions
                ?   <p>Carregando</p>
                :
                    <ul>
                        {sessions.map(session => 
                            <li key={session.id}>
                                <p>{session.weekday} - {session.date}</p>
                                <div>
                                    {session.showtimes.map(showtime =>
                                        <Link to={`/assentos/:${showtime.id}`} key={showtime.id}><button onClick={()=>setSessionDate(`${session.date} ${showtime.name}`)}>{showtime.name}</button></Link>  
                                    )}
                                </div>
                            </li>
                        )}
                    </ul>
            }
            
        </main>
    )
    
}