import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { List } from 'phosphor-react'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <>
      <header className={styles.header}>
        <img className={styles.logo} src="/images/DiogoLogo.png"></img>
        <nav aria-label="Principal" className={styles.navigationLinks}>
          <ul>
            <li>
              <Link href="/monitor">
                <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
              </Link>
            </li>
            <li>
              <a className={router.pathname === '/videos' ? 'active' : ''}>
                Conheça o servicço
              </a>
            </li>
            <li>
              <a href="#">Avaliações</a>
            </li>
            <li>
              <Link href="/#">
                <a
                  className={router.pathname === '/admin/users' ? 'active' : ''}
                >
                  Quem somos
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <header className={styles.headerMobile}>
        <img className={styles.logo} src="/images/DiogoLogo.png"></img>
        <List
          size={32}
          weight="bold"
          color="#fff"
          className={styles.hamburger}
        />
      </header>
    </>
  )
}

export default Home
