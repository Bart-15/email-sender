import {useState, useRef} from 'react';
import axios from 'axios'

import {
    FormContainer, 
    Card,
    Title,
    SmallText 
  } from '../styles/uiStyled';
  
  import {
    FormGroup,
    FormLabel,
    FormWrapper,
    Input,
    SubmitButton,
    TextArea,
    Error
  } from '../styles/forms';
  
  

const Form = () => {
    // handleSubmit function
    const formRef = useRef();
    const [isMessage, isSetMessage] = useState("");
    const [errors, setErrors] = useState({})
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const BASE_URL = 'http://localhost:5000/api/v1'
    const onSubmit = async (e) => {
      e.preventDefault();
      try{
        await axios.post(`${BASE_URL}/sendmail`, {name, email, message});
        reset();
        isSetMessage("Message sent successfully!")
        setTimeout(() => {
          isSetMessage("")
        }, 2000)
      }catch(error) {
        setErrors(error.response ?  error.response.data : {})
      }
    }



    const reset = () => {
      setName("");
      setEmail("");
      setMessage("");
      setErrors({}); 
    }

    return (
    <>  
      <FormContainer>
        <Card>
          <Title>Please get in touch and our expert support team will answer all your questions.</Title>
          <SmallText>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</SmallText>
          <FormWrapper onSubmit={onSubmit} >
            <FormGroup>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" type="text" name="name" placeholder="Your name" onChange={(e) => setName(e.target.value)} value={name}/>
              <Error>{errors.name ? errors.name : ""}</Error>
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="text" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
              <Error>{errors.email ? errors.email : ""}</Error>
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="message">Message</FormLabel>
              <TextArea id="message" type="textarea" name="message" placeholder="Message" onChange={(e) => setMessage(e.target.value)} value={message}/>
              <Error>{errors.message ? errors.message : ""}</Error>
              <SmallText>{isMessage ? isMessage : ""}</SmallText>
            </FormGroup>
            <FormGroup>
              <SubmitButton type="submit" >Submit</SubmitButton>
            </FormGroup>
          </FormWrapper>
        </Card>
      </FormContainer>
    </>
  );
}
 
export default Form;