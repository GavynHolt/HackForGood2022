import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import realmDB from "../realmWebConfig";
import LoadingCard from './LoadingCard';

interface ServiceResults {
  _id: string;
  title: string;
  summary: string;
  address: string;
  phone: string[];
  website: string;
  ages: string;
  lang: string;
  fees: boolean;
  area: string;
  category: string;
  topics: string[];
  category_slug: string;
}
 
function Results() {
  const location = useLocation();
  const { category }: any = location.state;
  const [loading, setLoading] = useState<boolean>(true);
  const [results, setResults] = useState<ServiceResults[]>([]);

  console.log(category.id);

  useEffect(() => {
    if (category?.id) {
      setLoading(true);
      const mongo = realmDB.currentUser?.mongoClient("mongodb-atlas");
      const collection = mongo?.db("MentalBuster").collection("services"); 
      collection?.find({ category: category.id }).then((res: ServiceResults[]) => {
        console.log(res);
        setResults(res || []);
        setLoading(false);
      }).catch((err) => {
        // error message here.
        setLoading(false);
      });
    }
  }, [category.id]);

  return (
    <div className="bg-welcome-background bg-cover min-h-screen">
      <main className="mx-auto w-11/12 max-w-5xl flex flex-col items-center pt-4 relative min-h-screen">
        <h1 className="text-3xl font-bold my-2">The Mental Map</h1>
        <p className="text-xl font-semibold">
          Connect to affordable mental health care
        </p>

        <div className="mt-4">
          <h2 className="text-2xl font-semibold">{category.name}</h2>
        </div>

        <div className="flex flex-wrap">
          {loading ? (
            <>
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
            </>
          ) : (
            results.map((result: ServiceResults) => (
              <div
                className="bg-white max-w-80 flex-auto rounded-2xl shadow-lg m-4"
                key={result._id}
              >
                <div className="p-3">
                  <div className="mt-2">
                    <h2 className="h-8 rounded text-xl font-semibold">
                      {result.title}
                    </h2>
                    <p>{result.lang}</p>
                    <p>{result.phone}</p>
                    <p><a href={result.website}>{result.website}</a></p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default Results;