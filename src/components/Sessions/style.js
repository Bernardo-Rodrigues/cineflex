import styled, { createGlobalStyle } from "styled-components";

export const LocalStyle = createGlobalStyle`
    body{
        padding-bottom: 117px;
    }
    a{
        display: inline-flex;
    }
    button{
        background: #E8833A;
        border: 0;
        border-radius: 3px; 

        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
    }
`
export const Ul = styled.ul`
    margin-left: 25px;
`
export const P = styled.p`
    font-size: 20px;
    line-height: 23px;
    color: #293845;
`
export const Button = styled.button`
    height: 43px;
    width: 82px;
    margin: 22px 8px 22px 0;
`