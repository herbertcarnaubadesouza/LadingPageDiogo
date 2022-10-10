import type { NextPage } from 'next'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { MobileHeader } from '../components/Me'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <MobileHeader />
    </>
  )
}

export default Home
