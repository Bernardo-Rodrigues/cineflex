import { Subheading, Info } from "./style"

export default function Tickets( {selectedSeats, buyers} ){
    return(
        <>
        <Subheading>Ingressos</Subheading>
        {selectedSeats.map( (seat, index) => {
            return  <div key={index}>  
                        <Info key={index}>{seat}</Info>
                        <Info>Nome: {buyers[index].nome}</Info>
                        <Info>CPF: {buyers[index].cpf}</Info>
                        <br/>
                    </div>
        })}
        </>
    )
}