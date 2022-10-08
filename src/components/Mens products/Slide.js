import { Swiper, SwiperSlide } from 'swiper/react'; 

export default function Slide(){
    return(
        <Swiper autoplay
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><img src={require('../../images/MensProducts/icons.jpg')} /></SwiperSlide>
                <SwiperSlide><img src={require('../../images/MensProducts/icons.jpg')} /></SwiperSlide>
                <SwiperSlide><img src={require('../../images/MensProducts/icons.jpg')} /></SwiperSlide>
                <SwiperSlide><img src={require('../../images/MensProducts/icons.jpg')} /></SwiperSlide>
        </Swiper>
    )
}