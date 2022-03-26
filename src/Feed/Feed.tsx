import { useEffect, useState } from "react";
import ContributeBanner from "./ContributeBanner";
import { analytics } from '../firebaseConfig';
import { logEvent } from "firebase/analytics";
import axios from "axios";
import FeedCard from "../components/FeedCard";
import LogoBanner from "../components/LogoBanner";

import xml from './data';

export default function Feed() {
    const [feed, setFeed] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        logEvent(analytics, 'feed_view');

        // const parseFeed = async () => {
        //     let url = '';
        //     if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        //         url = 'https://thingproxy.freeboard.io/fetch/https://www.talkspace.com/blog/feed/';
        //     } else {
        //         url = 'https://www.talkspace.com/blog/feed/';
        //     }
        //     let feedResults: any = [];
        //     let feed = await axios.get(url);
        //     const data = feed?.data;
        //     const parser = new DOMParser();
        //     const xmlDoc = parser.parseFromString(data, "text/xml");
        //     const items = xmlDoc.getElementsByTagName("item");
        //     for (let item of items as any) {
        //         // ?.replace(/<\/?[^>]+(>|$)/g, "")
        //         feedResults.push({
        //             title: item.getElementsByTagName("title")[0].innerHTML,
        //             link: item.getElementsByTagName("link")[0].innerHTML,
        //             publishedAt: item.getElementsByTagName("pubDate")[0].innerHTML,
        //             desc_short: item.getElementsByTagName("description")[0].innerHTML?.replace(/^<\!\[CDATA\[|\]\]>$/g, ''),
        //             content: item.getElementsByTagName("content:encoded")[0].innerHTML?.replace(/^<\!\[CDATA\[|\]\]>$/g, ''),
        //         });
        //     }

        //     return feedResults;
        // }

        const parseFeed = async () => {
            let feedResults: any = [];
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xml, "text/xml");
            const items = xmlDoc.getElementsByTagName("item");
            for (let item of items as any) {
                // ?.replace(/<\/?[^>]+(>|$)/g, "")
                feedResults.push({
                    title: item.getElementsByTagName("title")[0].innerHTML,
                    link: item.getElementsByTagName("link")[0].innerHTML,
                    publishedAt: item.getElementsByTagName("pubDate")[0].innerHTML,
                    desc_short: item.getElementsByTagName("description")[0].innerHTML?.replace(/^<\!\[CDATA\[|\]\]>$/g, ''),
                    content: item.getElementsByTagName("content:encoded")[0].innerHTML?.replace(/^<\!\[CDATA\[|\]\]>$/g, ''),
                });
            }

            return feedResults;
        }

        setLoading(true);
        parseFeed()
            .then((res: any) => {
                if (!!res && Array.isArray(res)) {
                    setFeed(res as any);
                }

                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
    }, [feed.length]);

    return (
        <div className="p8 bg-gray-300 h-full relative">
            <div className="relative mb-52 z-10">
                <div className="flex content-center my-6">
                    <LogoBanner orientation="row" />
                </div>

                <ContributeBanner />

                <div>
                    <h2 className="font-uber font-bold mx-8 text-3xl text-white tracking-wide">News Feed</h2>
                    {feed.map((item: any) => <FeedCard key={item.link} item={item} />)}
                </div>
            </div>

            <div id="stripes">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}