import "./style.css"
import { Link } from "react-router-dom"

export default function Sucess({data : { buyer, movie, purchasedSeats, sessionDate}}){
    return(
        <>
        {purchasedSeats
            ?
                <div className="sucess">
                    <h1>Pedido feito<br/> com sucesso!</h1>
                    <h3>Filme e sessão</h3>
                    <p>{movie}</p>
                    <p>{sessionDate}</p>
                    <h3>Ingressos</h3>
                    {purchasedSeats.map( (seat, index) => <p key={index}>{seat}</p>)}
                    <h3>Comprador</h3>
                    <p>Nome: {buyer[0].name}</p>
                    <p>CPF: {buyer[0].cpf}</p>
                    <Link to="/"><button>Voltar para a Home</button></Link>
                </div>
            :   <p>carregando</p>
        }
        
        </>
        
    )
}