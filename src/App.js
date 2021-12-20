import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { GlobalStyle } from "./style";
import Homepage from "./components/Homepage";
import Sessions from "./components/Sessions";
import Seats from "./components/Seats";
import Sucess from "./components/Sucess";
import Header from "./components/Header";

export default function App(){
    const [movie, setMovie]  = useState(null)
    const [sessionDate, setSessionDate] = useState(null)
    const [selectedSeats, setSelectedSeats] = useState([])
    const [buyers, setBuyers] = useState([])
    let obj={
        movie,
        sessionDate,
        selectedSeats,
        buyers
    }

    return(
            <BrowserRouter>
                <GlobalStyle/>
                <Header/>
                <Routes>
                    <Route path="/" element={<Homepage setMovie={setMovie}/>}></Route>
                    <Route path="/sessoes/:movieId" element={<Sessions setSessionDate={setSessionDate}/>}></Route>
                    <Route path="/assentos/:sessionId" element={<Seats selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} buyers={buyers} setBuyers={setBuyers}/>}></Route>
                    <Route path="/sucesso" element={<Sucess data={obj} setSelectedSeats={setSelectedSeats} setBuyers={setBuyers}/>}></Route>
                </Routes>
            </BrowserRouter>
        
    )
}