import { List } from 'phosphor-react'
import { useState } from 'react'
import { NavigationDrawer } from '../NavigationDrawer'
import styles from './styles.module.scss'

export function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleOpenMenu = () => {
    setIsMenuOpen(true)
  }

  const handleCloseMenu = () => {
    setIsMenuOpen(false)
  }
  return (
    <>
      <header className={styles.headerMobile}>
        <img className={styles.logo} src="/images/DiogoLogo.png"></img>
        <a onClick={handleOpenMenu}>
          <List
            size={32}
            weight="bold"
            color="#fff"
            className={styles.hamburger}
          />
        </a>
      </header>
      <NavigationDrawer isOpen={isMenuOpen} handleClose={handleCloseMenu} />
    </>
  )
}
