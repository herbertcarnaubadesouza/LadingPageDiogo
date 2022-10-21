import type { NextPage } from 'next'
import { Agreements } from '../components/Agreements'
import { Assessments } from '../components/Assessments'
import { Banner } from '../components/Banner'
import { Doubts } from '../components/Doubts'
import { Footer } from '../components/Footer'
import { Form } from '../components/Form'
import { Header } from '../components/Header'
import { Me } from '../components/Me'
import { Services } from '../components/Services'
import { WhatsApp } from '../components/WhatsApp'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Me />
      <Agreements />
      <Services />
      <Assessments />
      <Doubts />
      <Form />
      <Footer />
      <WhatsApp />
    </>
  )
}

export default Home
