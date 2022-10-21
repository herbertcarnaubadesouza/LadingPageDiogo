import styles from './styles.module.scss'

export function Footer() {
  return (
    <section className={styles.container}>
      <p>
        copyright &copy;2022. {'designed by:'} <span>herbert souza</span>
      </p>
    </section>
  )
}
