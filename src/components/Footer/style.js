import styled, { createGlobalStyle } from "styled-components"

export const LocalStyle = createGlobalStyle`
    span{
        font-size: 26px;
        line-height: 30px;
        color: #293845;
    }
`
export const Movie = styled.footer`
    position:fixed;
    bottom:0;
    width:375px;
    height:117px;
    
    background: #DFE6ED;
    border: 1px solid #9EADBA;

    display:flex;
    align-items:center;
`
export const MovieImg = styled.div`
    width:64px;
    height:89px;
    padding:8px;
    margin: 14px 14px 14px 10px;

    box-sizing:border-box;
    background: #fff url( ${  ({movie}) => `${movie}`  } );
    background-size:cover;
    background-repeat: no-repeat;
    background-origin: content-box;
`
export const MovieDesc = styled.div`
`