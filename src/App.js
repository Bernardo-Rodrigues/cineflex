import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Sessions from "./components/Sessions";


export default function App(){
    return(
        <BrowserRouter>
            <header>CINEFLEX</header>
			<Routes>
				<Route path="/" element={<Homepage />}></Route>
                <Route path="/sessoes/1" element={<Sessions />}></Route>
			</Routes>
		</BrowserRouter>
    )
}