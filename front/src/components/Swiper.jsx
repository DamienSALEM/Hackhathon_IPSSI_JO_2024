// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

export default function SwiperComponent({ datas }) {
  return (
    <div className="pr-10 pl-10 pt-5 pb-10">
      <Swiper
        className="h-[500px]"
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
      >
        <SwiperSlide className="bg-green-200 container mx-auto rounded-lg shadow-lg">
          {datas.gameEvent}
        </SwiperSlide>
        <SwiperSlide className="bg-green-500 container mx-auto rounded-lg shadow-lg">
          {datas.country}
        </SwiperSlide>
        <SwiperSlide className="bg-red-400 container mx-auto rounded-lg shadow-lg">
          {datas.problematic}
        </SwiperSlide>
        <SwiperSlide className="bg-pink-500 container mx-auto rounded-lg shadow-lg">
          {datas.country}
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
