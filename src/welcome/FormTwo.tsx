import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import realmDB from "../realmWebConfig";

function FormOne() {
  const [age, setAge] = useState<string>("0");
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
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <div className="relative">
        <input
          type="text"
          id="search-query"
          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 my-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          placeholder="Keyword Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery((e.target as HTMLInputElement).value)}
        />

        <select
          id="age"
          className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 my-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          placeholder="Age Range"
          value={age}
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

        <button
          type="submit"
          className="py-2 px-4 my-4 w-full bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full self-end"
          disabled={!searchQuery.length}
        >
          {loading ? "Loading..." : "Find A Resource"}
        </button>
      </div>
    </form>
  );
}

export default FormOne;