import { SyntheticEvent } from "react";
import SwiperNav from "./SwiperNav";

interface FormFourExtraInfoProps {
  loading: boolean;
  handleSubmit: (e: SyntheticEvent) => void;
  age: string;
  setAge: React.Dispatch<React.SetStateAction<string>>;
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  isPaidService: string;
  setIsPaidService: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const ageRanges = [
  "All ages",
  "2 years and up",
  "Up to 7 years",
  "3 - 24 years",
  "5 - 18 years",
  "8 - 18 years",
  "12 years and up",
  "12 - 24 years",
  "13 - 18 years",
  "13 - 21 years",
  "13 - 25 years",
  "13 - 29 years",
  "14 years and up",
  "Up to 12 years",
  "13 years and up",
  "Up to 16 years",
  "Up to 18 years",
  "16 years and up",
  "18 years and up",
  "21 years and up",
  "Up to 21 years",
  "Up to 29 years",
  "Up to 30 years",
  "18 - 70 years",
];

function FormFourExtraInfo({ age, setAge, location, setLocation, isPaidService, setIsPaidService, searchQuery, setSearchQuery, loading, handleSubmit }: FormFourExtraInfoProps) {

  return (
    <>
      <div className="mb-4">
        <h2 className="text-uber text-2xl font-semibold text-center">Anything else?</h2>
        <h3 className="text-lg text-center text-uber">
          Please enter any other optional information to narrow your search.
        </h3>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="relative">
          <label htmlFor="age">Age range</label>
          <select
            id="age"
            name="age"
            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 my-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="Age Range"
            value={age}
            onChange={(e: SyntheticEvent) =>
              setAge((e.target as HTMLSelectElement).value)
            }
          >
            {ageRanges.map((ageRange) => (
              <option value={ageRange}>{ageRange}</option>
            ))}
          </select>

          <label htmlFor="location">Location</label>
          <select
            id="location"
            name="location"
            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 my-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="Location"
            value={location}
            onChange={(e: SyntheticEvent) =>
              setLocation((e.target as HTMLSelectElement).value)
            }
          >
            <option value="0">Any</option>
            <option value="toronto">Toronto (GTA)</option>
            <option value="ottawa">Ottawa</option>
          </select>

          <label htmlFor="isPaidService">Free or Paid Services?</label>
          <select
            id="isPaidService"
            name="isPaidService"
            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 my-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="Location"
            value={isPaidService}
            onChange={(e: SyntheticEvent) =>
              setIsPaidService((e.target as HTMLSelectElement).value)
            }
          >
            <option value="any">Any</option>
            <option value="false">Free</option>
            <option value="true">Paid</option>
          </select>

          <label htmlFor="search-query">Keywords</label>
          <input
            type="text"
            id="search-query"
            name="search-query"
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 my-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="Keyword Search..."
            value={searchQuery}
            onChange={(e) =>
              setSearchQuery((e.target as HTMLInputElement).value)
            }
          />

          <button
            type="submit"
            className="py-2 px-4 my-4 w-full bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full self-end"
          >
            {loading ? "Loading..." : "Find A Resource"}
          </button>
        </div>
      </form>
      <SwiperNav disableNext={true} />
    </>
  );
}

export default FormFourExtraInfo;