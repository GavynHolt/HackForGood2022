import { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import realmDB from '../realmWebConfig';
import HelplineCard from "./HelplineCard";
import _ from 'lodash';
import { logEvent } from "firebase/analytics";
import { analytics } from "../firebaseConfig";
import LogoBanner from "../components/LogoBanner";

function Categories() {
  const [loading, setLoading] = useState(true);
  const [words, setWords] = useState('');
  const [helplines, setHelplines] = useState([]);

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
      const mongo = realmDB.currentUser?.mongoClient("mongodb-atlas");
      const collection = mongo?.db("MentalBuster").collection("helplines");
      const results = await collection?.find();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const count: number = results?.length || 0;

      if (count > 0) {
        setHelplines(results as any);
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
    <div className="w-full h-full bg-bg-1 bg-center bg-repeat-y bg-cover">
      <div className="flex content-center my-6">
        <LogoBanner orientation="row" />
      </div>

      <h2 className="font-uber font-bold mx-8 text-3xl text-white tracking-wide">Helplines</h2>
      <div className="ml-8 mr-8 pt-8">
        <SearchInput onChange={(keywords: string) => {
          setWords(keywords);
          setHelplines(flowFilter(helplines, keywords) as any);
        }} />
        {!!words ? (
          <h3 className="mx-2 text-xs mt-2 font-uber italic">Showing {helplines?.length} results for {words}</h3>
        ) : (
          <h3 className="mx-2 text-xs mt-2 font-uber italic">Showing {helplines?.length} results</h3>
        )}
      </div>
      <div className="p-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mb-40">
        {helplines.map((category: any) => <HelplineCard item={category} key={category._id} />)}
      </div>
    </div>
  );
}

export default Categories;
