import { Buyer, BuyersUl, Input } from "./style"

export default function Buyers( {setBuyerName, setBuyerCPF} ){
    return(
        <BuyersUl>
            <Buyer>
                <h3>Nome do comprador:</h3>
                <Input type="text" placeholder="Digite seu nome..." onChange={e => setBuyerName(e.target.value)}></Input>
                <h3>CPF do comprador:</h3>
                <Input type="text" placeholder="Digite seu CPF..." onChange={e => setBuyerCPF(e.target.value)}></Input>
            </Buyer>
        </BuyersUl>
    )
}