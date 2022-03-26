import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import FormOneIntro from "./FormOneIntro";
import FormTwo from "./FormTwo";
import FormTwoMoods from "./FormTwoMoods";

function SwiperForm() {
  // ask age,
  // ask about disorders, diagnoses etc
  // get a feel of what they're looking for: multiple choice being the easiest? -> stretch: paragraph style input
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      preventInteractionOnTransition={true}
      className="w-full mt-16"
      noSwiping={true}
    >
      <SwiperSlide className="swiper-no-swiping">
        <FormOneIntro />
      </SwiperSlide>
      <SwiperSlide className="swiper-no-swiping">
        <FormTwoMoods />
        </SwiperSlide>
      <SwiperSlide className="swiper-no-swiping">
        <FormTwo />
      </SwiperSlide>
      <SwiperSlide className="swiper-no-swiping">Slide 4</SwiperSlide>
    </Swiper>
  );
}

export default SwiperForm;