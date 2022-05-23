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
      </Head>
      <Container>
        <Form />
      </Container>
    </Theme>
    </>
  )
}
