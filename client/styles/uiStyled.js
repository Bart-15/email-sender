import styled from 'styled-components';
import background from '../assets/images/background.jpg'

export const Container = styled.div`
    height:100vh;
    /* background-color:rgb(80, 227, 194); */
    position:relative;
`

export const FormContainer = styled.div`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const Card = styled.div`
    backdrop-filter: blur(17px) saturate(0%);
    -webkit-backdrop-filter: blur(17px) saturate(0%);
    background-color: rgba(255, 255, 255, 0.99);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
    color:#333;
    width:383px;
    padding: 15px 15px 15px 15px;

    @media ${(props) => props.theme.breakpoints.md}{
        width:450px;
    }

    @media ${(props) => props.theme.breakpoints.xl}{
        width:700px;
    }
    `

export const TextHeader = styled.h3`
    text-align: center;
    font-size:30px;
    color:${props => props.theme.colors.accent1};
    padding:10px 10px 0 10px;
    @media ${(props) => props.theme.breakpoints.md}{
        font-size:40px;
    }

`

export const SmallText = styled.p`
    text-align: center;
    padding:0px 10px 0px 10px;
    color:${props => props.theme.colors.accent1};

`

