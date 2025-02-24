import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

export default function MySlider() {
  return <div>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <Image src="/offer.jpg" alt="Offer" width={500} height={500} />
      </SwiperSlide>
    </Swiper>
  </div>;
}