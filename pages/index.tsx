import type { NextPage } from 'next'
import { Agreements } from '../components/Agreements'
import { Banner } from '../components/Banner'
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

      <WhatsApp />
    </>
  )
}

export default Home
