import { Circle, SeatsUl, Seat } from "./style"

export default function SeatsMap( {seats, selectedSeats, setSelectedSeats, buyers, setBuyers}){
    function seatClick(id){
        if(selectedSeats.includes(id)){
            let buyer = buyers.find(element => element.idAssento === id)
            let answer = true

            if(buyer.nome || buyer.cpf) answer = window.confirm("Excluir campo preenchido?")

            if(answer){
                setSelectedSeats(selectedSeats.filter(element => element !== id))
                setBuyers(buyers.filter( element => element.idAssento !== id))
            }
        }
        else {
            setSelectedSeats([...selectedSeats, id])
            setBuyers([...buyers, {idAssento:id, nome:"", cpf:""}])
        }
    }

    return(
        <SeatsUl>
            {seats.map( ({name, id, isAvailable}) => 
                <Seat key={id} onClick={() => seatClick(id)}>
                    <Circle type={!isAvailable? "unavailable" : selectedSeats.find(element => element === id) ? "selected" : "available"}>
                        {name.length < 2 ? `0${name}` : name}
                    </Circle>
                </Seat>
            )}
        </SeatsUl>
    )
}