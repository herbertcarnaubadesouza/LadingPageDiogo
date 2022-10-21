import { FacebookLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'
import { useState } from 'react'
import Typical from 'react-typical'
import styles from './styles.module.scss'

export function Form() {
  const [bool, setBool] = useState(false)
  return (
    <section className={styles.container}>
      <div className={styles.containerTitle}>
        <h2>Fale comigo</h2>
        <p>Vamos manter contato</p>
      </div>
      <div className={styles.centralForm}>
        <div className={styles.col}>
          <h2 className={styles.title}>
            <Typical loop={Infinity} steps={['Entre em contato 📧', 1000]} />
          </h2>
          <div className={styles.icons}>
            <a href="https://web.facebook.com/?_rdc=1&_rdr">
              <InstagramLogo size={20} color="#fff" weight="bold" />
            </a>
            <a href="https://github.com/herbertcarnaubadesouza">
              <FacebookLogo size={20} color="#fff" weight="bold" />
            </a>
            <a href="https://www.instagram.com/herbert_souza/">
              <LinkedinLogo size={20} color="#fff" weight="bold" />
            </a>
          </div>
        </div>
        <div className={styles.backForm}>
          <div className={styles.imgBack}>
            <h4>Deixe seus dados aqui!</h4>
            <img src="/images/mailz.png" alt="image not found" />
          </div>
          <form /*onSubmit={}*/>
            <p></p>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              /*onChange={handleName}*/ placeholder="Digite seu nome..."
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              /*onChange={handleEmail}*/ placeholder="Digite seu email..."
            />

            <label htmlFor="message">Deixe uma mensagem</label>
            <textarea
              /*onChange={handleMessage}*/ placeholder="Digite uma mensagem..."
            />

            <div className={styles.sendBtn}>
              <button>
                Enviar
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className={styles.load}>
                    <img src="{load1}" alt="image not responding" />
                  </b>
                ) : (
                  ''
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
