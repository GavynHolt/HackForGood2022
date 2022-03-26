import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import realmDB from "../realmWebConfig";
import ServiceCard from '../Services/ServiceCard';
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
  const { services, slug, age, location: serviceLocation, isPaidService, searchQuery }: any = location.state;
  const [loading, setLoading] = useState<boolean>(true);
  const [results, setResults] = useState<ServiceResults[]>([]);

  useEffect(() => {
    const findQuery: any = {};
    if (slug) {
      findQuery.category_slug = slug
    }
    if (serviceLocation) {
      findQuery.area_topics = { $in: [serviceLocation.toLowerCase()] };
    }
    if (age !== "All ages") {
      findQuery.ages = { $in: [age] };
    }
    if (isPaidService !== "any") {
      findQuery.fees = isPaidService === "true"
    }
    if (searchQuery || services) {
      const search_query = searchQuery.toLowerCase().split(' ');
      let services_query = services.join(',').toLowerCase().trim();
      if (services_query.includes('/')) {
        services_query = services_query.split('/');
      }
      if (services_query.includes(',')) {
        services_query = services_query.split(',');
      }
      const combined_query = [...search_query, ...services_query];
      findQuery.topics = { $in: combined_query};
    }

    if (findQuery.category_slug) {
      setLoading(true);
      const mongo = realmDB.currentUser?.mongoClient("mongodb-atlas");
      const collection = mongo?.db("MentalBuster").collection("services"); 
      collection?.find(findQuery).then((res: ServiceResults[]) => {
        setResults(res || []);
        setLoading(false);
      })
      .catch((err: any) => {
        // error message here.
        setLoading(false);
      });
    }
  }, [age, isPaidService, searchQuery, serviceLocation, services, slug]);

  return (
    <div className="bg-welcome-background bg-cover min-h-screen">
      <main className="mx-auto w-11/12 max-w-5xl flex flex-col items-center pt-4 relative min-h-screen">
        <h1 className="text-3xl font-bold my-2">The Mental Map</h1>
        <p className="text-xl font-semibold">
          Connect to affordable mental health care
        </p>

        <div className="mt-4">
          <h2 className="text-2xl font-semibold">{slug}</h2>
        </div>

        <div className="p-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mb-40">
          { loading ? 
            [1,2,3,4,5,6].map((val) => <LoadingCard key={val} /> ) 
            : results.map((result: ServiceResults, index) => <ServiceCard key={index} item={result} /> )
          }
        </div>
      </main>
    </div>
  );
}

export default Results;