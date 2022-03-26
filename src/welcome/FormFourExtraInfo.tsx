import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import realmDB from "../realmWebConfig";
import SwiperNav from "./SwiperNav";

function FormFourExtraInfo() {
  const [age, setAge] = useState<string>("0");
  const [location, setLocation] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = (e: SyntheticEvent) => {
      e.preventDefault();
      setLoading(true);
      const mongo = realmDB.currentUser?.mongoClient("mongodb-atlas");
      const collection = mongo?.db("MentalBuster").collection("categories");
      collection
        ?.findOne({ topics: searchQuery })
        .then((res) => {
          setLoading(false);
          console.log(res);
          navigate("/results", { state: { category: res } });
        })
        .catch((err) => {
          setLoading(false);
          console.log(err.message);
        });
    };

  return (
    <>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-center">Anything else?</h2>
        <h3 className="text-xl text-center">
          Please enter any other option information to narrow your search.
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
            value={location}
            onChange={(e: SyntheticEvent) =>
              setAge((e.target as HTMLSelectElement).value)
            }
          >
            <option value="0">Any</option>
            <option value="1">18-25</option>
            <option value="2">26-35</option>
            <option value="3">36-50</option>
            <option value="6">51-65</option>
            <option value="5">65+</option>
          </select>

          <label htmlFor="location">Location</label>
          <select
            id="location"
            name="location"
            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 my-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="Location"
            value={age}
            onChange={(e: SyntheticEvent) =>
              setLocation((e.target as HTMLSelectElement).value)
            }
          >
            <option value="0">Any</option>
            <option value="1">Toronto (GTA)</option>
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
            disabled={!searchQuery.length}
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