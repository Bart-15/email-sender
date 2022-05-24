import Head from 'next/head'
import Form from '../components/Form'
import {Container} from '../styles/uiStyled'
import Theme from '../styles/theme';

export default function Home() {
  return (
    <>
    <Theme>
      <Head>
        <title>Email Sender</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300&display=swap" rel="stylesheet"></link>
      </Head>
      <Container>
        <Form />
      </Container>
    </Theme>
    </>
  )
}
