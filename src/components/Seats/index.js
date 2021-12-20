import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { LocalStyle } from "./style";
import { Loading, Loader } from "../../style"
import Subtitles from "./Subtitles";
import SeatsMap from "./SeatsMap";

import Footer from "../Footer";
import BuyersArea from "./BuyersArea";

export default function Seats({selectedSeats, setSelectedSeats, buyers, setBuyers}){
    const { sessionId } = useParams();
    const sessionIdNumber = parseInt(sessionId.slice(1))
    const [movie, SetMovie] = useState(null)
    const [seats, setSeats] = useState(null)
    
    useEffect(()=>{
        const promess = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${sessionIdNumber}/seats`);

		promess.then(answer => {
			setSeats(answer.data.seats);
            SetMovie({ img:answer.data.movie.posterURL, title:answer.data.movie.title, weekday:answer.data.day.weekday, hour: answer.data.name})
		});
    }, [sessionIdNumber])

    if(!seats) return <Loading><Loader/></Loading> 

    return(
        <>
            <LocalStyle/>

            <h2>Selecione o(s) assento(s)</h2>
            
            <SeatsMap seats={seats} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} buyers={buyers} setBuyers={setBuyers}/> 

            <Subtitles/>
            
            <BuyersArea buyers={buyers} setBuyers={setBuyers} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}/>
            
            {movie && <Footer movie={movie}/>}
        </>
    )
}