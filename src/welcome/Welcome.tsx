import { logEvent } from "firebase/analytics";
import { useEffect } from "react";
import LogoBanner from "../components/LogoBanner";
import { analytics } from "../firebaseConfig";
import SwiperForm from "./SwiperForm";

function Welcome() { 
  useEffect(() => {
    logEvent(analytics, 'welcome_view');
  });

  return (
    <div className="bg-welcome-background bg-cover flex-auto">
      <div className="flex content-center my-6">
        <LogoBanner orientation="row" color="text-blue-500" />
      </div>
      
      <header className="mx-auto w-11/12 max-w-5xl flex flex-col items-center pt-4">
        <p className="text-2xl font-bold text-uber">
          Connect to affordable mental health care
        </p>
      </header>
      <main className="mx-auto w-11/12 max-w-5xl flex flex-col justify-center items-center pt-4 relative h-full mb-20">
        <SwiperForm />
        {/* <button
          type="button"
          className="py-2 px-4 my-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full self-end absolute bottom-4 right-2"
        >
          Help
        </button> */}
      </main>
    </div>
  );
}

export default Welcome;
