import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import SwiperNav from "./SwiperNav";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function FormThreeServices() {
  return (
    <>
      <h2 className="text-2xl font-bold text-center">I'm open to trying...</h2>
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
          <h3 className="text-xl font-semibold mb-4">Test Service...</h3>
          <img src="" height="320" width="320" alt="Service: test" />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Test Service...</h3>
          <img src="" height="320" width="320" alt="Service: test" />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Test Service...</h3>
          <img src="" height="320" width="320" alt="Service: test" />
        </SwiperSlide>
      </Swiper>

      <SwiperNav />
    </>
  );
}

export default FormThreeServices;
