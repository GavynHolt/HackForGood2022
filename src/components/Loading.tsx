import { useLottie } from "lottie-react";
import loader from "../anims/loader.json";

function Anim() {
    const options = {
        animationData: loader,
        loop: true,
        autoplay: true,
    };

    const { View } = useLottie(options);

    return View;
};

export default function Loader() {
    return (
        <div className="w-40 h-40 flex flex-col items-center justify-center">
            <Anim />
            <h4>Loading</h4>
        </div>
    );
}