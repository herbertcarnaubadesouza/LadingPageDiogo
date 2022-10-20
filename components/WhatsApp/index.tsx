import styles from './styles.module.scss'

export function WhatsApp() {
  return (
    <div className={styles.popup}>
      <a
        href="https://api.whatsapp.com/send?phone=5511988239475"
        className={styles.whatsappLink}
        target="_blank"
        rel="noreferrer"
      >
        <img src="/images/whatsapp.svg" className={styles.icon}></img>
      </a>
    </div>
  )
}
