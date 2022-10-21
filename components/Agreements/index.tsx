import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './styles.module.scss'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Autoplay, Pagination } from 'swiper'

export function Agreements() {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h2>Parceiro das melhores operadoras e seguradoras do mercado</h2>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={5}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.swiperSlide}>
          {' '}
          <img src="/images/amil.png" alt="Corretor de seguros" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          {' '}
          <img src="/images/bradesco.png" alt="Corretor de seguros" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          {' '}
          <img src="/images/cruzazul.png" alt="Corretor de seguros" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          {' '}
          <img src="/images/notredame.png" alt="Corretor de seguros" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          {' '}
          <img src="/images/omint.png" alt="Corretor de seguros" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          {' '}
          <img src="/images/onehealth.png" alt="Corretor de seguros" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          {' '}
          <img src="/images/prevent.png" alt="Corretor de seguros" />
        </SwiperSlide>
      </Swiper>
      <div className={styles.secondTitled}>
        <h2>
          Vamos encontrar o melhor plano de saúde de acordo com sua necessidade
        </h2>
        <p>
          Seja para você, sua família ou sua empresa, irei te apresentar a opção
          com melhor custo-benefício para garantir a maior tranquilidade,
          segurança e satisfação desde a contratação até a utilização do seu
          plano de saúde.
        </p>
      </div>
    </section>
  )
}
