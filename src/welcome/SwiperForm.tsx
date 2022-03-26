import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import FormIntro from "./FormIntro";
import FormOne from "./FormOne";

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
      className="w-full"
    >
      <SwiperSlide>
        <FormIntro />
      </SwiperSlide>
      <SwiperSlide>
        <FormOne />
      </SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
}

export default SwiperForm;