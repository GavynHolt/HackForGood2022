import { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import realmDB from '../realmWebConfig';
import ServiceCard from "./ServiceCard";
import _ from 'lodash';
import { useLocation } from "react-router-dom";
import { logEvent } from "firebase/analytics";
import { analytics } from "../firebaseConfig";

function Services() {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);
  const location = useLocation();
  const { slug }: any = location?.state || { slug: '' };

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
  }, [loading]);

  if (loading) {
    return (
      <div>loading</div>
    );
  }

  return (
    <div className="w-full h-full faded-bg">
      <div className="ml-8 mr-8 pt-8">
        <SearchInput onChange={(keywords: string) => {
          setServices(flowFilter(services, keywords) as any);
        }} />
      </div>
      <div className="p-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {services.map((service: any) => <ServiceCard item={service} key={service._id} />)}
      </div>
    </div>
  );
}

export default Services;
