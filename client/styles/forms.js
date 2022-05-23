import styled from 'styled-components';

export const FormWrapper = styled.form`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:0 auto;
`

export const FormGroup = styled.div`
    display:block;
    width:100%;
   @media ${(props) => props.theme.breakpoints.md} {
       width:400px;
   }
  
`
export const FormLabel = styled.label`
    padding:10px 0px 5px 0px;
    display:block;
`
export const Input = styled.input`
    padding:10px;
    background-color:#fff;
    width:350px;
    border-radius:4px;
    border:1px solid #d1d5db;
    &:focus {
         outline: none;
         border-color:#f0f56c;
         background-color:#daf5ed;
    }
    @media ${(props) => props.theme.breakpoints.md} {
       width:400px;
   }

 
`

export const TextArea = styled.textarea`
    padding:10px;
    background-color:#fff;
    width:350px;
    height:200px;
    resize:none;
    border-radius:4px;
    border:1px solid #d1d5db;
    &:focus {
         outline: none;
         border-color:#f0f56c;
         background-color:#daf5ed;
    }
    @media ${(props) => props.theme.breakpoints.md} {
       width:400px;
   }
`
export const SubmitButton = styled.button`
    cursor: pointer;
    width:350px;
    border:1px #2ea44f solid;
    font-size:20px;
    box-shadow: 0 1px 1px rgb(18 21 26 / 8%);
    background-color: ${props => props.theme.colors.success};
    color:#fff;
    padding:10px;
    border-radius:4px;
    &:hover {
        background-color:#24803e;
    }
    @media ${(props) => props.theme.breakpoints.md} {
       width:400px;
   }
`

export const Error = styled.span`
    color:${props => props.theme.colors.error};
    font-size:${props => props.theme.fontSize.sm};
`
