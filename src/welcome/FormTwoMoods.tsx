import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import SwiperNav from "./SwiperNav";

function FormTwoMoods() {

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        preventInteractionOnTransition={true}
        className="w-full mt-16"
      >
        <SwiperSlide>Test Mood #1</SwiperSlide>
        <SwiperSlide>Test Mood #2</SwiperSlide>
        <SwiperSlide>Test Mood #3</SwiperSlide>
      </Swiper>
      <SwiperNav />
    </>
  );
  
}

export default FormTwoMoods;
