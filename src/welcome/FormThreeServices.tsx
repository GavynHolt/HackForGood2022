import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import SwiperNav from "./SwiperNav";
import serviceCounselling from '../assets/service-counselling.png';
import serviceGroupSupport from '../assets/service-group-support.png';
import serviceInPatient from '../assets/service-in-patient.png';
import serviceSelfHelp from '../assets/service-self-help.png';
import serviceMedicine from '../assets/service-medicine.png';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface FormThreeMoodsProps {
  services: string[];
  setServices: React.Dispatch<React.SetStateAction<string[]>>;
}

function FormThreeServices({services, setServices}: FormThreeMoodsProps) {

  const handleServiceSelection = (serviceItem: string) => {
    if (services.includes(serviceItem)) {
      setServices(services.filter(service => service !== serviceItem));
    } else {
      setServices([...services, serviceItem]);
    }
  };

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
          <h3 className="text-xl font-semibold mb-4">Therapy Or Counselling</h3>
          <img
            src={serviceCounselling}
            height="320"
            width="320"
            alt="Service: Therapy Or Counselling"
            onClick={() => handleServiceSelection("Therapy/Counselling")}
          />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Group Support</h3>
          <img
            src={serviceGroupSupport}
            height="320"
            width="320"
            alt="Service: Group Support"
            onClick={() => handleServiceSelection("Group Support")}
          />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Self-Help</h3>
          <img
            src={serviceSelfHelp}
            height="320"
            width="320"
            alt="Service: Self-Help"
            onClick={() => handleServiceSelection("Self-Help")}
          />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">In-Patient Programs</h3>
          <img
            src={serviceInPatient}
            height="320"
            width="320"
            alt="Service: In-Patient Programs"
            onClick={() => handleServiceSelection("In-Patient Programs")}
          />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Medication</h3>
          <img
            src={serviceMedicine}
            height="320"
            width="320"
            alt="Service: Medication"
            onClick={() => handleServiceSelection("Medication")}
          />
        </SwiperSlide>
      </Swiper>
      <p className="font-semibold text-center">Your selection:</p>
      <ul>
        {services.map((service) => (
          <li className="font-bold">{service}</li>
        ))}
      </ul>
      <SwiperNav />
    </>
  );
}

export default FormThreeServices;
