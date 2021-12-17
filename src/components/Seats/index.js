import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Subtitles from "./Subtitles";
import SeatsMap from "./SeatsMap";
import Buyers from "./Buyers";
import { LocalStyle } from "./style";

export default function Seats({setPurchasedSeats, setBuyer}){
    const [seats, setSeats] = useState(null)
    const [selectedSeats, setSelectedSeats] = useState([])
    const [buyerName, setBuyerName] = useState("")
    const [buyerCPF, setBuyerCPF] = useState("")
    const { sessionId } = useParams();
    const sessionIdNumber = parseInt(sessionId.slice(1))

    useEffect(()=>{
        const promess = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${sessionIdNumber}/seats`);

		promess.then(answer => {
			setSeats(answer.data.seats);
		});
    }, [sessionId])
    
    function send(){
        const promess = axios.post("https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many", {ids:selectedSeats,name:buyerName,cpf:buyerCPF})
        promess.then(()=>{
            setBuyer([{name:buyerName,cpf:buyerCPF}])
            setPurchasedSeats(selectedSeats.map( seat => `Assento ${seat - 50 * (sessionIdNumber - 1)}`))
        })
    }

    return(
        <>
            <LocalStyle/>

            <h2>Selecione o(s) assento(s)</h2>
            {!seats
                ?   <p>Carregando</p>
                :   <SeatsMap seats={seats} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}/> 
            }

            <Subtitles/>
            
            <Buyers setBuyerName={setBuyerName} setBuyerCPF={setBuyerCPF}/>

            <Link to="/sucesso"><button onClick={send}>Reservar assento(s)</button></Link>
            
        </>
    )
}