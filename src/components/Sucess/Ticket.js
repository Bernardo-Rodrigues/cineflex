import { Subheading, Info } from "./style"

export default function Ticket( {selectedSeats, buyers} ){
    return(
        <>
        <Subheading>Ingresso</Subheading>
        {selectedSeats.map( (seat, index) => <Info key={index}>{seat}</Info>)}

        <Subheading>Comprador</Subheading>
        <Info>Nome: {buyers[0].nome}</Info>
        <Info>CPF: {buyers[0].cpf}</Info>
        </>
    )
}