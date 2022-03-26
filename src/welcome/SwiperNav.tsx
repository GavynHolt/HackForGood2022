import { useSwiper } from "swiper/react";

interface SwiperNavProps {
  disableNext?: boolean;
}

function SwiperNav({ disableNext = false } : SwiperNavProps) {
  const swiper = useSwiper();
  
  return (
    <div className="flex justify-between">
      <button
        type="button"
        className="py-2 px-4 my-4 blue hover:bg-blue focus:ring-blue focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
        onClick={() => swiper.slidePrev()}
      >
        Go Back
      </button>
      { !disableNext && ( 
      <button
        type="button"
        className="py-2 px-4 my-4 blue hover:bg-blue focus:ring-blue focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
        onClick={() => swiper.slideNext()}
      >
        Next
      </button> )
      }     
    </div>
  );
}

export default SwiperNav;