import styled, { createGlobalStyle } from "styled-components";

export const LocalStyle = createGlobalStyle`
    h2{
    margin-bottom: 29px;
    
    letter-spacing: 0.04em;
    }
    button{
        margin: 50px 0 30px;
        height: 52px;
        width: 225px;
    }
`
export const SeatsUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 7px;
    row-gap: 18px;

    margin-bottom: 16px;
`
export const Seat = styled.li`
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.04em;

    div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const SubtitlesUl = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    margin-bottom: 40px;
`
export const Subtitle = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    font-size: 13px;
    line-height: 15px;
    color: #4E5A65;
`
export const Circle = styled.div`
    width: 26px;
    height: 26px;

    border-radius: 17px;
    background: ${ ({type}) => type === "unavailable" ? "#FBE192" : type === "selected" ? "#8DD7CF" : "#C3CFD9"};
    border: ${ ({type}) => type === "unavailable" ? "1px solid #F7C52B" : type === "selected" ? "1px solid #1AAE9E" : "1px solid #808F9D;"};
`
export const BuyersUl = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Buyer = styled.li`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;

    font-size: 18px;
    line-height: 21px;
    color: #293845;
`
export const Input = styled.input`
    height: 51px;
    width: 327px;
    margin-bottom: 7px;
    padding-left: 18px;

    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 3px;

    ::placeholder{
        font-size: 18px;
        line-height: 21px;
        font-style: italic;
        

        color: #AFAFAF;
    }
`