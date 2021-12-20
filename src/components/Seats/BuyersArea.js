import { Link } from 'react-router-dom';
import axios from 'axios';
import Buyers from "./Buyers";

export default function BuyersArea( {buyers, setBuyers, selectedSeats, setSelectedSeats} ){

    function send(){
        const promess = axios.post("https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many", {ids:selectedSeats,compradores:buyers})
        promess.then(()=>{
            setSelectedSeats(selectedSeats.map( seat => `Assento ${seat % 50}`))
        })
    }

    return(
        <>
            <Buyers buyers={buyers} setBuyers={setBuyers}/>
            <Link to="/sucesso"><button onClick={send}>Reservar assento(s)</button></Link>
        </>
    )
}