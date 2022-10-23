import styles from './styles.module.scss'

export function WhatsApp() {
  return (
    <div className={styles.popup}>
      <a
        href="https://api.whatsapp.com/send?phone=5511988239475&text=Ol%C3%A1%20Diogo%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20a%20respeito%20dos%20planos%2C%20poderia%20me%20ajudar%3F"
        className={styles.whatsappLink}
        target="_blank"
        rel="noreferrer"
      >
        <img src="/images/whatsapp.svg" className={styles.icon}></img>
      </a>
    </div>
  )
}
