import { useNavigate, useLocation } from "react-router-dom";
import { HeaderElement } from "./style"

export default function Header(){
    const { pathname } = useLocation();
    const navigate = useNavigate();
    return(
        <HeaderElement>
            {pathname !== "/" && <img src="https://www.gundemcanta.com/assets/site/img/icons/geri-don.png" alt="goback" onClick={() => navigate(-1)}/>}
            CINEFLEX
        </HeaderElement>  
    )
}