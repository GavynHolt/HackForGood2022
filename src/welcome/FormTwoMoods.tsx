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

interface FormTwoMoodsProps {
  mood: string;
  setMood: React.Dispatch<React.SetStateAction<string>>;
}

function FormTwoMoods({ mood, setMood }: FormTwoMoodsProps) {
  return (
    <>
      <h2 className="text-uber text-2xl font-semibold text-center">I want to work on...</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        spaceBetween={50}
        slidesPerView={1}
        preventInteractionOnTransition={true}
        className="w-full mt-16"
        noSwiping={false}
      >
        <SwiperSlide className="flex flex-col items-center">
          <h3 className="text-uber text-xl font-semibold mb-4">Sadness or Anxiety</h3>
          <img
            src={moodSadnessAnxiety}
            height="250"
            width="250"
            alt="Mood: Sadness or Anxiety"
            onClick={() => setMood("Sadness/Anxiety")}
          />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center">
          <h3 className="text-uber text-xl font-semibold mb-4">Feelings of Anger</h3>
          <img
            src={moodAnger}
            height="250"
            width="250"
            alt="Mood: Anger"
            onClick={() => setMood("Anger")}
          />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center">
          <h3 className="text-uber text-xl font-semibold mb-4">
            Improving Personal Relationships
          </h3>
          <img
            src={moodImproveRelationships}
            height="250"
            width="250"
            alt="Mood: Improve Personal Relationships"
            onClick={() => setMood("Improve Personal Relationship")}
          />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center">
          <h3 className="text-uber text-xl font-semibold mb-4">
            Addiction or Substance Abuse
          </h3>
          <img
            src={moodAddiction}
            height="250"
            width="250"
            alt="Mood: Addiction or Substance Abuse"
            onClick={() => setMood("Addiction/Substance Abuse")}
          />
        </SwiperSlide>
      </Swiper>
      {!!mood && (
        <p className="text-center text-uber text-white mt-8">
          <b className="font-bold">Your selection:</b> <span className="font-light">{mood}</span>
        </p>
      )}
      <SwiperNav />
    </>
  );
}

export default FormTwoMoods;
