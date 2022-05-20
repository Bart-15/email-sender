import {
    FormContainer, 
    Card,
    Title,
    SmallText 
  } from '../styles/uiStyled';
  
  import {
    FormGroup,
    FormLabel,
    Input,
    SubmitButton
  } from '../styles/forms';
  
  

const Form = () => {

    // handleSubmit function
    const handleSubmit = (e) => {
        e.prevventDefault();
    }

    return ( 
        <FormContainer>
        <Card>
          <Title>Please get in touch and our expert support team will answer all your questions.</Title>
          <SmallText>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</SmallText>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" type="text" name="name" placeholder="Your name"/>
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="text" name="name" placeholder="Email"/>
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Input id="message" type="textarea" name="message" placeholder="Message"/>
            </FormGroup>
            <FormGroup>
              <SubmitButton>Submit</SubmitButton>
            </FormGroup>
          </form>
        </Card>
      </FormContainer>
     );
}
 
export default Form;