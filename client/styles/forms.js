import styled from 'styled-components';

export const FormWrapper = styled.form`
    width:100%;
`

export const FormGroup = styled.div`
    display:block;
    width:400px;
    margin:12px auto;
`
export const FormLabel = styled.label`
    margin:0px 0px 5px 0px;
    padding:1px;
    display:block;
`
export const Input = styled.input`
    padding:10px;
    background-color:#fff;
    width:100%;
    border-radius:4px;
    border:1px solid #d1d5db;
    &:focus {
         outline: none;
         border-color:#f0f56c;
         background-color:#daf5ed;
    }
`

export const TextArea = styled.textarea`
    padding:10px;
    background-color:#fff;
    width:100%;
    height:300px;
    resize:none;
    border-radius:4px;
    border:1px solid #d1d5db;
    &:focus {
         outline: none;
         border-color:#f0f56c;
         background-color:#daf5ed;
    }
`
export const SubmitButton = styled.button`
    cursor: pointer;
    width:100%;
    border:1px #2ea44f solid;
    font-size:20px;
    box-shadow: 0 1px 1px rgb(18 21 26 / 8%);
    background-color: #2ea44f;
    color:#fff;
    padding:10px;
    border-radius:4px;
    &:hover {
        background-color:#24803e;
    }

`
