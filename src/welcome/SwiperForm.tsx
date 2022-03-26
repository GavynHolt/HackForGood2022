import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import FormOneIntro from "./FormOneIntro";
import FormTwoMoods from "./FormTwoMoods";
import FormThreeServices from "./FormThreeServices";
import FormFourExtraInfo from "./FormFourExtraInfo";
import { useNavigate } from "react-router-dom";
import realmDB from "../realmWebConfig";
import { SyntheticEvent, useState } from "react";

function SwiperForm() {
  const [mood, setMood] = useState<string>("");
  const [services, setServices] = useState<string[]>([]);
  const [age, setAge] = useState<string>("All ages");
  const [location, setLocation] = useState<string>("");
  const [isPaidService, setIsPaidService] = useState<string>("any");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    const mongo = realmDB.currentUser?.mongoClient("mongodb-atlas");
    const collection = mongo?.db("MentalBuster").collection("categories");
    const topics = mood.toLowerCase().split(',').join(',').split('/');
    const results = await collection?.find({ topics: { $in: topics } });
    if (!!results && results.length > 0) {
      const slug = results[0]?.slug;
      setLoading(false);
      navigate('/results', { state: {
        services,
        slug,
        age,
        location,
        isPaidService,
        searchQuery,
      }})
    }
  };

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
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
        <FormFourExtraInfo
          loading={loading}
          handleSubmit={handleSubmit}
          age={age}
          setAge={setAge}
          location={location}
          setLocation={setLocation}
          isPaidService={isPaidService}
          setIsPaidService={setIsPaidService}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperForm;