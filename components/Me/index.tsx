import Link from 'next/link'
import styles from './styles.module.scss'

export function Me() {
  return (
    <section className={styles.container}>
      <div className={styles.container}>
        <img src="/images/Diogo.jpg" alt="Corretor de seguros" />
        <div className={styles.aboutContent}>
          <h2>Conheça o seu novo corretor</h2>
          <span className={styles.divisor}></span>
          <p style={{ marginTop: '3rem' }}>
            Diogo Santos, tenho 38 anos, sou Corretor de Seguros especializado
            em Planos de Saúde.
          </p>
          <p>
            Trabalho na área há 12 anos e já atendi mais de 1.2.500 vidas,
            gerando aproximadamente 350 mil em redução de custos e economia aos
            meus clientes
          </p>
          <Link
            href="https://api.whatsapp.com/send?phone=5511988239475"
            target="_blank"
            rel="noreferrer"
          >
            <button>Fale Comigo</button>
          </Link>
        </div>
      </div>
    </section>
  )
}
