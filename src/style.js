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
export const Loading = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;

  margin-top:200px;
`
export const Loader = styled.div`
  height: 50px;
  width: 50px;

  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #E8833A;

  
  animation: is-rotating 1s infinite;
  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`