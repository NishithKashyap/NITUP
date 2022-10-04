import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";

export function HorizontalScroll() {
    return (
        <>
        <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
        >
            <SwiperSlide><img alt="Slide 1" src={require("../../images/1.jpg")} /> </SwiperSlide>
            <SwiperSlide><img alt="Slide 1" src={require("../../images/2.jpg")} /></SwiperSlide>
            <SwiperSlide><img alt="Slide 1" src={require("../../images/3.jpg")} /></SwiperSlide>
            <SwiperSlide><img alt="Slide 1" src={require("../../images/Rusty_Brown.jpg")} /></SwiperSlide>
            <SwiperSlide><img alt="Slide 1" src={require("../../images/Tenacious_Blue.jpg")} /></SwiperSlide>
            <SwiperSlide><img alt="Slide 1" src={require("../../images/Seasoned_Style.jpg")} /></SwiperSlide>
            <SwiperSlide><img alt="Slide 1" src={require("../../images/Sleek__Sturdy.jpg")} /></SwiperSlide>
            <SwiperSlide><img alt="Slide 1" src={require("../../images/Spot_on_Spartan.jpg")} /></SwiperSlide>
            <SwiperSlide><img alt="Slide 1" src={require("../../images/Stalwart_Swag.jpg")} /></SwiperSlide>
        </Swiper>
        </>
    );
}
