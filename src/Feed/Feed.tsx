import { useEffect } from "react";
import ContributeBanner from "./ContributeBanner";
import { analytics } from '../firebaseConfig';
import { logEvent } from "firebase/analytics";

export default function Feed() {
    useEffect(() => {
        logEvent(analytics, 'feed_view');
    });

    return (
        <div className="p8 bg-gray-100 h-full">
            <ContributeBanner />
        </div>
    );
}