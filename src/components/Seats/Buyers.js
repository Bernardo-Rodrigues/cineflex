import { P, Buyer, BuyersUl, Input } from "./style"

export default function Buyers( { buyers, setBuyers } ){

    function handleBuyersName(e, index){
        setBuyers(()=>
            buyers.map( (buyer, i) => {
            if(i === index) return {idAssento:buyer.idAssento, nome:e.target.value, cpf:buyer.cpf}
            else return buyer
            })
        )
    }
    function handleBuyersCpf(e, index){
        setBuyers(()=>
            buyers.map( (buyer, i) => {
            if(i === index) return {idAssento:buyer.idAssento, nome:buyer.nome, cpf:e.target.value}
            else return buyer
            })
        )
    }
    
    if(!buyers.length) return <P>Adicione o(s) assento(s)</P>

    return(
        <BuyersUl>
            {buyers.map( (buyer, index) => {
                return(
                    <Buyer key={index}>
                        <h3>Nome do comprador (Assento {`${buyer.idAssento % 50}`}):</h3>
                        <Input type="text" placeholder="Digite seu nome..." value={ buyer.nome } onChange={(e) => handleBuyersName(e, index)}></Input>

                        <h3>CPF do comprador:</h3>
                        <Input type="text" placeholder="Digite seu CPF..." value={ buyer.cpf } onChange={(e) => handleBuyersCpf(e, index)}></Input>
                    </Buyer>
                )
            })}
        </BuyersUl>
    )
}