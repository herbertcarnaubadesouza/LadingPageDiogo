import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './styles.module.scss'

export function DesktopHeader() {
  const router = useRouter()
  return (
    <section className={styles.container}>
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
                Conheça o serviço
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
    </section>
  )
}
