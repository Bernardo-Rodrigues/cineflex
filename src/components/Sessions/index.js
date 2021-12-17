import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SessionsMap from "./SessionsMap";

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
        <>
            <h2>Selecione o horário</h2>
            {!sessions
                ?   <p>Carregando</p>
                :   <SessionsMap sessions={sessions} setSessionDate={setSessionDate}/>    
            }
        </>
    )
    
}