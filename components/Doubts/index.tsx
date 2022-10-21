import { CaretDown, Minus } from 'phosphor-react'
import { useState } from 'react'
import styles from './styles.module.scss'

export function Doubts() {
  const [selected, setSelected] = useState(null)

  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <section className={styles.container}>
      <div className={styles.containerTitle}>
        <h2>Perguntas frequentes</h2>
        <p>Confira as dúvidas mais frequentes</p>
      </div>
      <div className={styles.accordion}>
        {data.map((item, index) => (
          <div key={item.id} className={styles.item}>
            <div className={styles.title} onClick={() => toggle(index)}>
              <h2>{item.question}</h2>
              {selected !== index ? (
                <CaretDown
                  size={14}
                  weight="bold"
                  style={{ minWidth: '14px' }}
                />
              ) : (
                <Minus size={10} weight="bold" style={{ minWidth: '10px' }} />
              )}
            </div>
            <div
              className={
                selected === index
                  ? `${styles.content} show`
                  : `${styles.content}`
              }
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const data = [
  {
    id: 1,
    question:
      'Como garantir que é seguro contratar meu plano de saúde com você?',
    answer:
      '    Além de trabalhar como corretor há 12 anos, possuo cadastro na SUSEP (Superintendência de Seguros Privados), órgão responsável pelo controle e fiscalização dos mercados de seguro, previdência privada aberta, capitalização e resseguro. Meu número de cadastro é 201101121.',
  },
  {
    id: 2,
    question: 'Você cobra pela sua assessoria?',
    answer:
      '    Não, nada é cobrado pelo atendimento. É totalmente Grátis, tanto para meus clientes quanto para aqueles que ainda não são.',
  },
  {
    id: 3,
    question: 'Você trabalha com todas operadoras?',
    answer:
      '    Sim, trabalho com todas as operadoras e seguradoras do mercado de planos de saúde.',
  },
  {
    id: 4,
    question: 'Você atende em algum lugar ou online?',
    answer:
      '    Principalmente após a pandemia o atendimento tem se tornado mais frequente online. As operadoras se atualizaram e aprimoraram seu sistema para fazer tudo de forma remota. Porém, se for necessário, podemos receber nosso cliente no nosso escritório ou irmos  até sua empresa ou residência.',
  },
]
