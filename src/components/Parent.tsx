import { useLocation } from "react-router-dom";
import Categories from "../Categories/Categories";
import Services from "../Services/Services";
import Welcome from "../welcome/Welcome";
import Feed from "../Feed/Feed";
import Tabs from "./Tabs";
import Results from "../results/Results";
import Helplines from "../Helpline/Helplines";

export default function Parent() {
    const location = useLocation();
    const path = location.pathname;
    const { slug }: any = location?.state || { slug: '' };

    return (
        <>
            <div className="flex flex-col justify-between min-h-screen">
                {path === "/home" && <Feed />}
                {path === "/discover" && <Welcome />}
                {path === "/service/:slug" && <Welcome />}
                {path === "/results" && <Results />}
                {path === "/helpline" && <Helplines />}
                {!slug && path === "/categories" && <Categories />}
                {!!slug && path.includes('/categories') && <Services />}
            </div>
            <Tabs />
        </>
    );
}