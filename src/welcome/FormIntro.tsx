import { useSwiper } from "swiper/react";

function FormIntro() {
  const swiper = useSwiper();

  return (
    <div className="flex flex-col items-center">
      <h2>Answer a few questions to get connected to the right care.</h2>
      <button
        type="button"
        className="py-2 px-4 my-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
        onClick={() => swiper.slideNext()}
      >
        Get Started -&gt;
      </button>
    </div>
  );
}

export default FormIntro;
