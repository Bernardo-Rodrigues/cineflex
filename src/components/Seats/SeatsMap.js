import { Circle, SeatsUl, Seat } from "./style"

export default function SeatsMap( {seats, selectedSeats, setSelectedSeats}){
    function seatClick(id){
        if(selectedSeats.includes(id)) setSelectedSeats(selectedSeats.filter(element => element !== id))
        else setSelectedSeats([...selectedSeats, id])
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