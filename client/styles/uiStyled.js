import styled from 'styled-components';
import background from '../assets/images/background.jpg'

export const Container = styled.div`
    height:100vh;
    /* background-color:rgb(80, 227, 194); */
    background:url(${background});
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
    max-width:700px;
    `

export const Title = styled.h4`
    text-align: center;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
    color:#04060a;
    font-size:30px;
    padding:10px 10px 0 10px;
`

export const SmallText = styled.p`
    text-align: center;
    padding:0px 5px 0px 5px;
    color:#4b5663;
`

