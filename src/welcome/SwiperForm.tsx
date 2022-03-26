import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import FormOneIntro from "./FormOneIntro";
import FormTwoMoods from "./FormTwoMoods";
import FormThreeServices from "./FormThreeServices";
import FormFourExtraInfo from "./FormFourExtraInfo";
import { useState } from "react";

function SwiperForm() {
  const [mood, setMood] = useState<string>("");
  const [services, setServices] = useState<string[]>([]);

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
        <FormTwoMoods mood={mood} setMood={setMood} />
      </SwiperSlide>
      <SwiperSlide className="swiper-no-swiping">
        <FormThreeServices services={services} setServices={setServices} />
      </SwiperSlide>
      <SwiperSlide className="swiper-no-swiping">
        <FormFourExtraInfo />
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperForm;