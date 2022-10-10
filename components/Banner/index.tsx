import styles from './styles.module.scss'

export function Banner() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>Encontre seu plano de saúde ideal.</h2>
        <span>
          Assim, você pode cuidar da sua saúde com tranquilidade e segurança.
        </span>
      </div>
      <img className={styles.bannerImg} src="/images/banner.png"></img>
    </section>
  )
}
