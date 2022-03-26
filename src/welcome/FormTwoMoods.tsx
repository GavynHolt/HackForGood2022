import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import SwiperNav from "./SwiperNav";
import moodAddiction from '../assets/mood-addiction.png';
import moodAnger from '../assets/mood-anger.png';
import moodSadnessAnxiety from '../assets/mood-sadness-anxiety.png';
import moodImproveRelationships from '../assets/mood-improve-relationships.png';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function FormTwoMoods() {
  return (
    <>
      <h2 className="text-2xl font-bold text-center">I want to work on...</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        preventInteractionOnTransition={true}
        className="w-full mt-16"
        noSwiping={false}
      >
        <SwiperSlide className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Sadness or Anxiety</h3>
          <img
            src={moodSadnessAnxiety}
            height="320"
            width="320"
            alt="Mood: Sadness or Anxiety"
          />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Feelings of Anger</h3>
          <img src={moodAnger} height="320" width="320" alt="Mood: Anger" />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">
            Improving Personal Relationships
          </h3>
          <img
            src={moodImproveRelationships}
            height="320"
            width="320"
            alt="Mood: Improve Personal Relationships"
          />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">
            Addiction or Substance Abuse
          </h3>
          <img
            src={moodAddiction}
            height="320"
            width="320"
            alt="Mood: Addiction or Substance Abuse"
          />
        </SwiperSlide>
      </Swiper>
      <SwiperNav />
    </>
  );
  
}

export default FormTwoMoods;
