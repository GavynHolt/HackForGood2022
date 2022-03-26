import { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import realmDB from '../realmWebConfig';
import ServiceCard from "./ServiceCard";
import _ from 'lodash';
import { useLocation } from "react-router-dom";
import { logEvent } from "firebase/analytics";
import { analytics } from "../firebaseConfig";
import Loader from "../components/Loading";
import LogoBanner from "../components/LogoBanner";

function Services() {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);
  const location = useLocation();
  const { slug, name }: any = location?.state || { slug: '' };
  const [words, setWords] = useState('');

  const flowFilter = (array: any, substr: any) => {
    return _.filter(array, _.flow(
      _.identity,
      _.values,
      _.join,
      _.toLower,
      _.partialRight(_.includes, substr)
    ));
  }

  useEffect(() => {
    logEvent(analytics, 'categories_view');

    const fetchServices = async () => {
      const mongo = realmDB.currentUser?.mongoClient("mongodb-atlas");
      const collection = mongo?.db("MentalBuster").collection("services");
      const results = await collection?.find({ category_slug: slug });
      const count: number = results?.length || 0;

      if (count > 0) {
        setServices(results as any);
      }

      // if (!localResults) {
      //   console.info('fetching categories');
      //   localStorage.setItem("categories", JSON.stringify(results));

      //   setCategories(results as any);
      // }

      setLoading(false);
    }

    fetchServices();
  }, [loading, slug]);

  if (loading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="w-full h-full calm-bg">
      <div className="flex content-center my-6">
        <LogoBanner orientation="row" />
      </div>

      <h2 className="font-uber font-bold mx-8 text-2xl text-white tracking-wide">Services for</h2>
      <h2 className="font-uber font-bold mx-8 text-lg text-white tracking-wide italic">{name}</h2>
      
      <div className="ml-8 mr-8 pt-8">
        <SearchInput onChange={(keywords: string) => {
          setServices(flowFilter(services, keywords) as any);
          setWords(keywords);
        }} />
        {!!words ? (
          <h3 className="mx-2 text-xs mt-2 font-uber italic">Showing {services?.length} results for {words}</h3>
        ) : (
          <h3 className="mx-2 text-xs mt-2 font-uber italic">Showing {services?.length} results</h3>
        )}
      </div>
      <div className="p-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mb-40">
        {services.length > 0 && services.map((service: any) => <ServiceCard item={service} key={service._id} />)}
        {services.length === 0 && (
          <h2>No Results found</h2>
        )}
      </div>
    </div>
  );
}

export default Services;
