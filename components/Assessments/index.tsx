import { EffectCoverflow, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './styles.module.scss'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export function Assessments() {
  return (
    <section className={styles.container}>
      <h2>O que estão dizendo?</h2>
      <p className={styles.secondTitle}>
        Confira o depoimento de clientes atendidos por mim.
      </p>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.avaliacaoContent}>
            <div className={styles.imgContainer}>
              <img src="/images/estrelas.png" alt="Corretor de seguros" />
            </div>
            <div className={styles.slideText}>
              <p>
                Reiciendis beatae, accusantium, repudiandae veritatis maiores
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.wewqeewqeqwe
              </p>
            </div>
            <div className={styles.swiperFooter}>
              <img src="/images/cliente1.png" alt="Corretor de seguros" />
              <div className={styles.clientDescription}>
                <h3>Robson Simões</h3>
                <p>Supervisor de logística</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.avaliacaoContent}>
            <div className={styles.imgContainer}>
              <img src="/images/estrelas.png" alt="Corretor de seguros" />
            </div>
            <div className={styles.slideText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis beatae, accusantium, repudiandae veritatis maiores
              </p>
            </div>
            <div className={styles.swiperFooter}>
              <img src="/images/cliente1.png" alt="Corretor de seguros" />
              <div className={styles.clientDescription}>
                <h3>Robson Simões</h3>
                <p>Supervisor de logística</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.avaliacaoContent}>
            <div className={styles.imgContainer}>
              <img src="/images/estrelas.png" alt="Corretor de seguros" />
            </div>
            <div className={styles.slideText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis beatae, accusantium, repudiandae veritatis maiores
              </p>
            </div>
            <div className={styles.swiperFooter}>
              <img src="/images/cliente1.png" alt="Corretor de seguros" />
              <div className={styles.clientDescription}>
                <h3>Robson Simões</h3>
                <p>Supervisor de logística</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.avaliacaoContent}>
            <div className={styles.imgContainer}>
              <img src="/images/estrelas.png" alt="Corretor de seguros" />
            </div>
            <div className={styles.slideText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis beatae, accusantium, repudiandae veritatis maiores
              </p>
            </div>
            <div className={styles.swiperFooter}>
              <img src="/images/cliente1.png" alt="Corretor de seguros" />
              <div className={styles.clientDescription}>
                <h3>Robson Simões</h3>
                <p>Supervisor de logística</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.avaliacaoContent}>
            <div className={styles.imgContainer}>
              <img src="/images/estrelas.png" alt="Corretor de seguros" />
            </div>
            <div className={styles.slideText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis beatae, accusantium, repudiandae veritatis maiores
              </p>
            </div>
            <div className={styles.swiperFooter}>
              <img src="/images/cliente1.png" alt="Corretor de seguros" />
              <div className={styles.clientDescription}>
                <h3>Robson Simões</h3>
                <p>Supervisor de logística</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.avaliacaoContent}>
            <div className={styles.imgContainer}>
              <img src="/images/estrelas.png" alt="Corretor de seguros" />
            </div>
            <div className={styles.slideText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis beatae, accusantium, repudiandae veritatis maiores
              </p>
            </div>
            <div className={styles.swiperFooter}>
              <img src="/images/cliente1.png" alt="Corretor de seguros" />
              <div className={styles.clientDescription}>
                <h3>Robson Simões</h3>
                <p>Supervisor de logística</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
