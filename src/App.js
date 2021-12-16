import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Sessions from "./components/Sessions";
import Seats from "./components/Seats";
import Sucess from "./components/Sucesso";
import { useState } from "react";


export default function App(){
    const [movie, setMovie]  = useState(null)
    const [sessionDate, setSessionDate] = useState(null)
    const [sessionDay, setSessionDay] = useState("c")
    const [purchasedSeats, setPurchasedSeats] = useState(null)
    const [buyer, setBuyer] = useState(null)
    let obj={
        movie,
        sessionDate,
        purchasedSeats,
        buyer
    }

    return(
        <BrowserRouter>
            <header>CINEFLEX</header>
			<Routes>
				<Route path="/" element={<Homepage className="homepage" setMovie={setMovie}/>}></Route>
                <Route path="/sessoes/:movieId" element={<Sessions className="sessions" setSessionDate={setSessionDate}/>}></Route>
                <Route path="/assentos/:sessionId" element={<Seats className="seats" setPurchasedSeats={setPurchasedSeats} setBuyer={setBuyer}/>}></Route>
                <Route path="/sucesso" element={<Sucess className="sucess" data={obj}/>}></Route>
			</Routes>
		</BrowserRouter>
    )
}