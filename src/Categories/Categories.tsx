import { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import realmDB from '../realmWebConfig';
import CategoryCard from "./CategoryCard";
import _ from 'lodash';
import { logEvent } from "firebase/analytics";
import { analytics } from "../firebaseConfig";

function Categories() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

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

    const fetchCategories = async () => {
      const localResults: any = await localStorage.getItem("categories");
      if (!!localResults) {
        console.info('categories found in localstorage');

        setCategories(JSON.parse(localResults));
        setLoading(false);
        return;
      }

      const mongo = realmDB.currentUser?.mongoClient("mongodb-atlas");
      const collection = mongo?.db("MentalBuster").collection("categories");
      const results = await collection?.find();
      const count: number = results?.length || 0;

      if (!localResults) {
        console.info('fetching categories');
        localStorage.setItem("categories", JSON.stringify(results));

        setCategories(results as any);
      }

      setLoading(false);
    }

    fetchCategories();
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
          setCategories(flowFilter(categories, keywords) as any);
        }} />
      </div>
      <div className="p-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {categories.map((category: any) => <CategoryCard item={category} key={category._id} />)}
      </div>
    </div>
  );
}

export default Categories;
