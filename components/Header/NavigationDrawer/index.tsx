import Link from 'next/link'
import { X } from 'phosphor-react'

import styles from './styles.module.scss'

interface NavigationDrawerProps {
  isOpen: boolean
  handleClose: () => void
}

export function NavigationDrawer({
  isOpen,
  handleClose,
}: NavigationDrawerProps) {
  return (
    <>
      <div
        className={`${styles.navigationOverlay} ${isOpen ? 'active' : ''}`}
        onClick={handleClose}
      ></div>
      <div className={`${styles.drawerMenu} ${isOpen ? 'active' : ''}`}>
        <div className={styles.closeMenu}>
          <X size={22} color="#fff" weight="fill" onClick={handleClose} />
        </div>
        <div className={styles.content}>
          <div className={styles.navigationSection}>
            <Link href={'/'}>
              <a>Home</a>
            </Link>
            <Link href={'/'}>
              <a>Conheça o serviço</a>
            </Link>
            <Link href={'/'}>
              <a>Avaliações</a>
            </Link>
            <Link href={'/'}>
              <a>Quem somos</a>
            </Link>

            <button>CONTATO</button>
          </div>
        </div>
      </div>
    </>
  )
}
