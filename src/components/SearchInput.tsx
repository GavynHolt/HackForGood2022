import { debounce } from "lodash";
import React from "react";
import { useState } from "react";
import CloseSVG from '../svg/close';

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
        <div className="flex flex-row font-uber text-lg rounded-3xl border-transparent flex-1 appearance-none border border-blue w-full py-2 px-4 my-2 bg-white text-blue placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
            <input
                type="text"
                id="search-query"
                placeholder="Keyword Search..."
                className="outline-none w-full"
                value={terms}
                onChange={(e) => {
                    const keywords = (e.target as HTMLInputElement).value;
                    setTerms(keywords.toLowerCase());
                    debouncedSearch(keywords.toLowerCase());
                }}
            />
            {!!terms && <button className="rounded-full" onClick={() => {
                setTerms("");
                debouncedSearch("");
            }}><CloseSVG /></button>}
        </div>
    );
}