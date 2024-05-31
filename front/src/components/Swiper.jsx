// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

export default function SwiperComponent({ predictionResult, country }) {
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
          {predictionResult != null
            ? `Ce pays : ${country} à obtenu ${Math.floor(
                predictionResult,
              )} médailles.`
            : ''}
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
