import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;

    width: 375px;
    padding-top: 67px;

    margin: auto;
  }
  a{
    display: flex;
    justify-content: center;
  }
  button{
    background: #E8833A;
    border: 0;
    border-radius: 3px; 

    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
  }
  h2{
    margin:41px 0;

    font-size: 24px;
    line-height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;

    color: #293845;
  }
`
export const Header = styled.header`
    position:fixed;
    top:0;
    width:100%;
    height: 67px;
    background-color: #C3CFD9;

    color: #E8833A;
    font-size: 34px;
    line-height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
`