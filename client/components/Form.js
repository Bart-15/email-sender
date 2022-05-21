import {useState} from 'react';
import axios from 'axios'
import NextNProgress from "nextjs-progressbar";

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
    TextArea
  } from '../styles/forms';
  
  

const Form = ({formData, setFormData}) => {
    // handleSubmit function
    const [isMessage, isSetMessage] = useState("");
    const BASE_URL = 'http://localhost:5000/api/v1'
    const onSubmit = async () => {
      // reset error message
      isSetMessage("")
      if(!formData.name || !formData.email || !formData.message){
       return isSetMessage("Check all fields")
        
      }


      try{
        await axios.post(`${BASE_URL}/sendmail`, formData);
        isMessage("Sent successfully!")
        resetForm();
      }catch(error) {
        console.log(error)
      }
    }

    const handleChange = (e) => {
      setFormData({...formData, [e.target.name] : e.target.value});
    }

    // todo----

    // const validateEmail = (email) => {
    //   const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //   return pattern.test(email);
    // }

    const resetForm = () => {
     return setFormData({
       name:"",
       email:"",
       message:"",
     })
    }

    return (
    <>  
      <FormContainer>
        <Card>
          <Title>Please get in touch and our expert support team will answer all your questions.</Title>
          <SmallText>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</SmallText>
          <FormWrapper>
            <FormGroup>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" type="text" name="name" placeholder="Your name" onChange={handleChange} value={formData.name}/>
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="text" name="email" placeholder="Email" onChange={handleChange} value={formData.email}/>
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="message">Message</FormLabel>
              <TextArea id="message" type="textarea" name="message" placeholder="Message" onChange={handleChange} value={formData.message}/>
              <SmallText>
                { isMessage ? isMessage : "" }
              </SmallText>
            </FormGroup>
            <FormGroup>
              <SubmitButton type="button" onClick={onSubmit}>Submit</SubmitButton>
            </FormGroup>
          </FormWrapper>
        </Card>
      </FormContainer>
    </>
  );
}
 
export default Form;