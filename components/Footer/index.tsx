import styles from './styles.module.scss'

export function Footer() {
  return (
    <section className={styles.container}>
      <div className={styles.firstFooter}>
        <div className={styles.informationDetails}>
          <h3>Localização:</h3>
          <p>
            Rua Dona Elisa Flaquer, nº 233 – sobre loja – centro – Santo André –
            SP – 09020-160
          </p>
        </div>
        <div className={styles.informationDetails}>
          <h3>Telefones:</h3>
          <p>(11) 98823-9475</p>
          <p>(11) 2199-1000</p>
        </div>
        <div className={styles.informationDetails}>
          <h3>Email:</h3>
          <p>contato@corretordiogosantos.com.br</p>
        </div>
      </div>
      <div className={styles.footerEnd}>
        <p>
          copyright &copy;2022. {'designed by:'} <span>herbert souza</span>
        </p>
      </div>
    </section>
  )
}
