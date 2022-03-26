import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import FormOneIntro from "./FormOneIntro";
import FormTwoMoods from "./FormTwoMoods";
import FormThreeServices from "./FormThreeServices";
import FormFourExtraInfo from "./FormFourExtraInfo";

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
      className="w-full my-4 swiper-no-swiping"
      noSwiping={true}
    >
      <SwiperSlide className="swiper-no-swiping">
        <FormOneIntro />
      </SwiperSlide>
      <SwiperSlide className="swiper-no-swiping">
        <FormTwoMoods />
      </SwiperSlide>
      <SwiperSlide className="swiper-no-swiping">
        <FormThreeServices />
      </SwiperSlide>
      <SwiperSlide className="swiper-no-swiping">
        <FormFourExtraInfo />
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperForm;