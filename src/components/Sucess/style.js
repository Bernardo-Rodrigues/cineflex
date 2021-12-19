import styled, { createGlobalStyle } from "styled-components";

export const LocalStyle = createGlobalStyle`
    button{
        margin: 70px 0 30px;
        height: 52px;
        width: 225px;
    }
`
export const Title = styled.h1`
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    text-align: center;
    color: #247A6B;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 30px;
`
export const Subheading = styled.h3`
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #293845;

    padding-left: 30px;
    margin: 40px 0 10px;
`
export const Info = styled.p`
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.04em;
    color: #293845;

    padding-left: 30px;
    margin-top: 5px;
`