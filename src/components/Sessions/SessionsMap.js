import { Link } from "react-router-dom";
import {Ul, P, Button, LocalStyle} from "./style"

export default function SessionsMap( {sessions, setSessionDate} ){
    return(
        <>
            <LocalStyle/>
            <Ul>
                {sessions.map(session => 
                    <li key={session.id}>
                        <P>{session.weekday} - {session.date}</P>
                        <div>
                            {session.showtimes.map(showtime =>
                                <Link to={`/assentos/:${showtime.id}`} key={showtime.id}><Button onClick={()=>setSessionDate(`${session.date} ${showtime.name}`)}>{showtime.name}</Button></Link>  
                            )}
                        </div>
                    </li>
                )}
            </Ul>
        </>
    )
}