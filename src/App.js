import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Sessions from "./components/Sessions";
import Seats from "./components/Seats";
import Sucess from "./components/Sucesso";
import { useState } from "react";


export default function App(){
    const [movie, setMovie]  = useState("Enola Holmes")
    const [sessionDate, setSessionDate] = useState("24/06/2021 15:00")
    const [sessionDay, setSessionDay] = useState("c")
    const [seats, setSeats] = useState(["Assento 15", "Assento 16"])
    const [buyer, setBuyer] = useState([{name:"João da Silva Sauro", cpf:"123.456.789-10"}])
    let obj={
        movie,
        sessionDate,
        seats,
        buyer
    }

    return(
        <BrowserRouter>
            <header>CINEFLEX</header>
			<Routes>
				<Route path="/" element={<Homepage className="homepage"/>}></Route>
                <Route path="/sessoes/:movieId" element={<Sessions className="sessions"/>}></Route>
                <Route path="/assentos/:sessionId" element={<Seats className="seats"/>}></Route>
                <Route path="/sucesso" element={<Sucess className="sucess" data={obj}/>}></Route>
			</Routes>
		</BrowserRouter>
    )
}