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
      <div className="flex flex-col items-center">
        <h2 className="text-uber text-2xl font-semibold text-center">I'm open to trying...</h2>
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
            <h3 className="text-uber text-xl font-semibold mb-4">Therapy Or Counselling</h3>
            <img
              src={serviceCounselling}
              height="250"
              width="250"
              alt="Service: Therapy Or Counselling"
              onClick={() => handleServiceSelection("Therapy/Counselling")}
            />
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center">
            <h3 className="text-uber text-xl font-semibold mb-4">Group Support</h3>
            <img
              src={serviceGroupSupport}
              height="250"
              width="250"
              alt="Service: Group Support"
              onClick={() => handleServiceSelection("Group Support")}
            />
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center">
            <h3 className="text-uber text-xl font-semibold mb-4">Self-Help</h3>
            <img
              src={serviceSelfHelp}
              height="250"
              width="250"
              alt="Service: Self-Help"
              onClick={() => handleServiceSelection("Self-Help")}
            />
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center">
            <h3 className="text-uber text-xl font-semibold mb-4">In-Patient Programs</h3>
            <img
              src={serviceInPatient}
              height="250"
              width="250"
              alt="Service: In-Patient Programs"
              onClick={() => handleServiceSelection("In-Patient Programs")}
            />
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center">
            <h3 className="text-uber text-xl font-semibold mb-4">Medication</h3>
            <img
              src={serviceMedicine}
              height="250"
              width="250"
              alt="Service: Medication"
              onClick={() => handleServiceSelection("Medication")}
            />
          </SwiperSlide>
        </Swiper>
        {services.length > 0 && (
            <p className="text-uber font-bold mt-6 text-white text-center">
              <span>Your selection:</span>
              <br />
              <span className="font-light">{services.join(', ')}</span>
            </p>
          )}
        <ul className="text-white font-light">
          {/* {services.length ? services.map((service, index) => (
            <li key={index} className="font-bold">{service}</li>
          )) : (
            <li>None</li>
          )} */}
        </ul>
      </div>
      <SwiperNav />
    </>
  );
}

export default FormThreeServices;
