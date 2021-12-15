import { useEffect, useState } from "react"
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Sessions(){
    const [sessions, setSessions] = useState(null)

    useEffect(()=>{
        const promess = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies/1/showtimes");

		promess.then(answer => {
			setSessions(answer.data);
            console.log(answer.data)
		});
    }, [])

    console.log(sessions)

    return(
        <main className="sessions">
            <h2>Selecione o horário</h2>
            {!sessions
                ?   <p>Carregando</p>
                :
                    <ul>
                        {sessions.days.map(session => 
                            <li key={session.id}>
                                <p>{session.weekday} - {session.date}</p>
                                <div>
                                    {session.showtimes.map(showtime =>
                                        <Link to="/assentos/1"><button key={showtime.id}>{showtime.name}</button></Link>  
                                    )}
                                </div>
                            </li>
                        )}
                    </ul>
            }
            
        </main>
    )
    
}