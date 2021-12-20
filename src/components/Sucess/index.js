import { Link } from "react-router-dom"
import { Title, Subheading, Info, LocalStyle } from "./style"
import { Loading, Loader } from "../../style"
import Ticket from "./Ticket"
import Tickets from "./Tickets"

export default function Sucess({data : { movie, sessionDate, selectedSeats, buyers }, setSelectedSeats, setBuyers}){

    if(!selectedSeats) return <Loading><Loader/></Loading> 
    return(
        <>
        <LocalStyle/>

        <Title>Pedido feito<br/> com sucesso!</Title>

        <Subheading>Filme e sessão</Subheading>
        <Info>{movie}</Info>
        <Info>{sessionDate}</Info>

        {buyers.length > 1
            ?   <Tickets selectedSeats={selectedSeats} buyers={buyers}/>
            :   <Ticket selectedSeats={selectedSeats} buyers={buyers}/>
        }
        
        <Link to="/"><button onClick={()=>  { setSelectedSeats([]); setBuyers([]) }}>Voltar para a Home</button></Link>

        </>    
    )
}