import { logEvent } from "firebase/analytics";
import { useEffect } from "react";
import { analytics } from "../firebaseConfig";
import SearchForm from "./SearchForm";

function Welcome() { 
  useEffect(() => {
    logEvent(analytics, 'welcome_view');
  });

  return (
    <div className="bg-welcome-background bg-cover min-h-screen">
      <main className="mx-auto w-11/12 max-w-5xl flex flex-col items-center pt-4 relative min-h-screen">
        <h1 className="text-3xl font-bold my-2">The Mental Map</h1>
        <p className="text-xl font-semibold">
          Connect to affordable mental health care
        </p>
        <SearchForm />
        <button
          type="button"
          className="py-2 px-4 my-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full self-end absolute bottom-4 right-2"
        >
          Help
        </button>
      </main>
    </div>
  );
}

export default Welcome;
