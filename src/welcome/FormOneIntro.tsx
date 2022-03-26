import { useSwiper } from "swiper/react";
import Wave from "../components/Wave";

function FormOneIntro() {
  const swiper = useSwiper();

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-uber text-normal my-4">Answer a few questions to get connected to the right care.</h2>
      <Wave />
      <button
        type="button"
        className="py-4 px-6 my-4 blue hover:bg-blue focus:ring-blue focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
        onClick={() => swiper.slideNext()}
      >
        <span className="mr-4">Get Started</span>
        <i className="fa fa-chevron-circle-right"></i>
      </button>
    </div>
  );
}

export default FormOneIntro;
