import styles from './styles.module.scss'

export function Banner() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>
          Economize tempo e encontre o plano de saúde ideal para você, sua
          família ou empresa.
        </h1>
        <h2>
          Com a minha assessoria gratuita você descobre o plano de saúde com o
          melhor custo-benefício de acordo com a sua necessidade, conhece todas
          as vantagens que ele te oferece, conta com um suporte especializado
          para a contratação e fica longe da burocracia dos atendimentos via SAC
          e 0800 das operadoras. Assim, você pode cuidar da sua saúde com
          tranquilidade e segurança.
        </h2>
      </div>
    </section>
  )
}
