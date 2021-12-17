import { Link } from "react-router-dom"
import { Title, Subheading, Info, LocalStyle } from "./style"

export default function Sucess({data : { buyer, movie, purchasedSeats, sessionDate}}){
    return(
        <>
        {purchasedSeats
            ?
                <>
                    <LocalStyle/>
                    <Title>Pedido feito<br/> com sucesso!</Title>
                    <Subheading>Filme e sessão</Subheading>
                    <Info>{movie}</Info>
                    <Info>{sessionDate}</Info>
                    <Subheading>Ingressos</Subheading>
                    {purchasedSeats.map( (seat, index) => <Info key={index}>{seat}</Info>)}
                    <Subheading>Comprador</Subheading>
                    <Info>Nome: {buyer[0].name}</Info>
                    <Info>CPF: {buyer[0].cpf}</Info>
                    <Link to="/"><button>Voltar para a Home</button></Link>
                </>
            :   <p>carregando</p>
        }
        
        </>
        
    )
}