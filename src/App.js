import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Sessions from "./components/Sessions";
import Seats from "./components/Seats";


export default function App(){
    return(
        <BrowserRouter>
            <header>CINEFLEX</header>
			<Routes>
				<Route path="/" element={<Homepage className="homepage"/>}></Route>
                <Route path="/sessoes/1" element={<Sessions className="sessions"/>}></Route>
                <Route path="/assentos/1" element={<Seats className="seats"/>}></Route>
			</Routes>
		</BrowserRouter>
    )
}