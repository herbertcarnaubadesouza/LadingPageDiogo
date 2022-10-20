import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './styles.module.scss'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper'

export function Agreements() {
  return (
    <section className={styles.container}>
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
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
        <SwiperSlide className={styles.swiperSlide}>
          {' '}
          <img src="/images/prevent.png" alt="Corretor de seguros" />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
