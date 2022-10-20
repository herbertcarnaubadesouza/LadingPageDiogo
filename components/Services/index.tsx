import {
  CaretRight,
  NumberFive,
  NumberFour,
  NumberOne,
  NumberThree,
  NumberTwo,
} from 'phosphor-react'
import styles from './styles.module.scss'

export function Services() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>Meu atendimento</h2>
        {/* <span className={styles.divisor}></span> */}
        <ul className={styles.serviceList}>
          <li>
            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <NumberOne size={40} weight="light" />
              </div>
              <h3>Entender sua necessidade</h3>
              <p className={styles.text}>
                No primeiro contato com o cliente irei procurar entender e
                mapear todas suas necessidade. Verificar se busca um novo plano,
                reduzir o custo ou melhorar a cobertura do plano atual.
              </p>
              <button className={styles.cardBtn} aria-label="Show More">
                <CaretRight size={16} weight="light" />
              </button>
            </div>
          </li>
          <li>
            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <NumberTwo size={40} weight="light" />
              </div>
              <h3 className={styles.title}>Melhores opções</h3>
              <p className={styles.text}>
                Irei te apresentar o que cada uma pode proporcionar e dar minha
                sugestão do que eu faria se estivesse no seu lugar, explicando
                tudo que for necessário para que juntos possamos decidir a opção
                que melhor se adequa.
              </p>
              <button className={styles.cardBtn} aria-label="Show More">
                <CaretRight size={16} weight="light" />
              </button>
            </div>
          </li>
          <li>
            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <NumberThree size={40} weight="light" />
              </div>
              <h3 className={styles.title}>Contratação do plano</h3>
              <p className={styles.text}>
                Irei iniciar todo o processo, cadastro e finalização da
                contratação do plano. Facilitando ao cliente em todas as etapas.
              </p>
              <button className={styles.cardBtn} aria-label="Show More">
                <CaretRight size={16} weight="light" />
              </button>
            </div>
          </li>
          <li>
            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <NumberFour size={40} weight="light" />
              </div>
              <h3 className={styles.title}>Instruções de utilização</h3>
              <p className={styles.text}>
                Vou te dar todas as instruções referente a aplicativos, busca de
                rede credenciada, boletos etc, para que você possa utilizar e
                usufruir da melhor forma seu plano contratado.
              </p>
              <button className={styles.cardBtn} aria-label="Show More">
                <CaretRight size={16} weight="light" />
              </button>
            </div>
          </li>
          <li>
            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <NumberFive size={40} weight="light" />
              </div>
              <h3 className={styles.title}>Acompanhamento e suporte</h3>
              <p className={styles.text}>
                Após o plano ativo, seguirei à sua disposição, auxiliando nos
                reembolsos, boletos, inclusões, exclusões, cancelamento,
                relatório e monitorando os melhores valores e oportunidades de
                redução de custos.
              </p>
              <button className={styles.cardBtn} aria-label="Show More">
                <CaretRight size={16} weight="light" />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
