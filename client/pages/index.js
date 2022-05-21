import Head from 'next/head'
import Form from '../components/Form'
import {useState} from 'react'
import {Container} from '../styles/uiStyled'

export default function Home() {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    message:''
  })
  return (
    <>
      <Head>
        <title>Email Sender</title>
      </Head>
      <Container>
        <Form 
          formData={formData} 
          setFormData={setFormData} 
        />
      </Container>
    </>
  )
}
