import { debounce } from "lodash";
import React from "react";
import { useState } from "react";

export default function SearchInput({ onChange }: any) {
    const [terms, setTerms] = useState<string>("");

    const debouncedSearch = React.useRef(
        debounce(async (criteria) => {
            onChange(criteria);
        }, 700)
    ).current;

    React.useEffect(() => {
        return () => {
            debouncedSearch.cancel();
        };
    }, [debouncedSearch]);

    return (
        <input
            type="text"
            id="search-query"
            className=" rounded-3xl border-transparent flex-1 appearance-none border border-gray-300 w-2/4 py-2 px-4 my-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="Keyword Search..."
            value={terms}
            onChange={(e) => {
                const keywords = (e.target as HTMLInputElement).value;
                setTerms(keywords);
                debouncedSearch(keywords);
            }}
        />
    );
}