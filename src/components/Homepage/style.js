import styled from "styled-components";

export const Ul = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;

    margin-bottom: 30px;
}
`
export const Li = styled.li`
    position:relative;
    width: 145px;
    height:209px;
    padding: 8px;
    box-sizing: border-box;

    background: #FFFFFF url( ${ ({img}) => img} );
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;

    background-size:cover;
    background-repeat: no-repeat;
    background-origin: content-box;

`
export const Overlay = styled.div`
        position:absolute;
        top:8px;
        right:8px;
        bottom:8px;
        left:8px;
        padding:3px;
        
        background: transparent;
        opacity: 0.8; 

        text-align:center;
        word-wrap: break-word;
        color: transparent;
        font-size:9px;

        display:flex;
        justify-content:center;
        align-items:center;

        :hover{
            background:#000;
            color:#fff;
        }
`