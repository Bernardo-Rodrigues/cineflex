import { useEffect, useState } from "react"
import axios from 'axios';
import { Link } from "react-router-dom";
import Subtitles from "./Subtitles";
import { useParams } from 'react-router-dom';
import "./style.css"


export default function Seats(){
    const [seats, setSeats] = useState(null)
    const [selectedSeats, setSelectedSeats] = useState([])
    const [buyerName, setBuyerName] = useState("")
    const [buyerCPF, setBuyerCPF] = useState("")
    const { sessionId } = useParams();
    console.log(selectedSeats)
    
    function send(){
        const promess = axios.post("https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many", {ids:selectedSeats,name:buyerName,cpf:buyerCPF})
        promess.then(answer=>console.log(answer), answer=>console.log(answer.response))
    }

    function seatClick(id){
        if(selectedSeats.includes(id)) setSelectedSeats(selectedSeats.filter(element => element !== id))
        else setSelectedSeats([...selectedSeats, id])
    }

    useEffect(()=>{
        const promess = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${sessionId.slice(1)}/seats`);

		promess.then(answer => {
			setSeats(answer.data.seats);
		});
    }, [sessionId])

    return(
        <main className="seats">
            <h2>Selecione o(s) assento(s)</h2>
            {!seats
                ?   <p>Carregando</p>
                :
                    <ul className="seats-map">
                        {seats.map( ({name, id, isAvailable}) => 
                            <li 
                                key={id} 
                                className={!isAvailable? "unavailable" : selectedSeats.find(element => element === id) ? "selected" : "available"}
                                onClick={() => seatClick(id)}
                            >
                                {name.length < 2 ? `0${name}` : name}
                            </li>
                        )}
                    </ul>
            }
            <Subtitles/>
            
            <ul className="buyers">
                <li>
                    <h3>Nome do comprador:</h3>
                    <input type="text" placeholder="Digite seu nome..." onChange={e => setBuyerName(e.target.value)}></input>
                    <h3>CPF do comprador:</h3>
                    <input type="text" placeholder="Digite seu CPF..." onChange={e => setBuyerCPF(e.target.value)}></input>
                </li>
            </ul>

            <Link to="/sucesso"><button onClick={send}>Reservar assento(s)</button></Link>
            
        </main>
    )
}