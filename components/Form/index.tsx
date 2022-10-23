import { FacebookLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'

import { useState } from 'react'
import Select from 'react-select'
import { colourOptions, contactOptions } from './data'
import styles from './styles.module.scss'

export function Form() {
  const customStyles = {
    valueContainer: (provided: any, state: any) => ({
      ...provided,
      border: '2px solid rgba(0, 0, 0, 0)',
      backgroundColor: 'rgba(230, 230, 230, 0.6)',
      borderRadius: '10px',
      paddingBlock: '0.2rem',
      paddingInline: '1rem',
      boxShadow: 'none',
      outline: state.isFocused ? 'purple solid 2px' : 'none',
      outlineOffset: '1px',
      color: state.isSelected ? 'white' : '#101926',
      overflow: 'hidden',
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      border: 'none',
      boxShadow: 'none',
      borderRadius: '10px',
      backgroundColor: 'rgba(230, 230, 230, 0.6)',
      outline: state.isFocused ? ' solid 2px' : 'none',
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      color: state.isFocused ? 'white' : '#101926',
      backgroundColor: state.isSelected
        ? '#101926'
        : state.isFocused
        ? '#101926'
        : 'transparent',
      ':active': {
        filter: 'brightness(0.8)',
      },
    }),
  }

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
            Entre em contato
            {/* <Typical loop={Infinity} steps={['Entre em contato 📧', 1000]} /> */}
          </h2>
          <div className={styles.icons}>
            <a href="https://www.instagram.com/corretordiogosantos/">
              <InstagramLogo size={25} color="#fff" weight="bold" />
            </a>
            <a href="https://www.facebook.com/corretordiogosantos">
              <FacebookLogo size={25} color="#fff" weight="bold" />
            </a>
            <a href="https://www.instagram.com/herbert_souza/">
              <LinkedinLogo size={25} color="#fff" weight="bold" />
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
            <label htmlFor="name">Seu nome</label>
            <input
              type="text"
              /*onChange={handleName}*/ placeholder="Seu Nome"
            />
            <label htmlFor="name">Número de telefone</label>
            <input
              type="text"
              /*onChange={handleName}*/ placeholder="Seu número de telefone"
            />
            <div className={styles.selectContainer}>
              <label htmlFor="CNPJ">Tem acesso a CNPJ?</label>
              <Select
                placeholder="---Escolha uma opção---"
                options={colourOptions}
                styles={customStyles}
              />
            </div>
            <div className={styles.selectContainer}>
              <label htmlFor="CNPJ">Melhor forma de contato</label>
              <Select
                placeholder="---Escolha uma opção---"
                options={contactOptions}
                styles={customStyles}
              />
            </div>
            <label htmlFor="name">E-mail</label>
            <input
              type="text"
              /*onChange={handleName}*/ placeholder="Seu melhor e-mail"
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
