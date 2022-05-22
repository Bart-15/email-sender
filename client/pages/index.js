import Head from 'next/head'
import Form from '../components/Form'
import {Container} from '../styles/uiStyled'

export default function Home() {
  return (
    <>
      <Head>
        <title>Email Sender</title>
      </Head>
      <Container>
        <Form />
      </Container>
    </>
  )
}
