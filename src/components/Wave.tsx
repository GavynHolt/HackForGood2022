import { useLottie } from "lottie-react";
import loader from "../anims/hello.json";

function Anim() {
    const options = {
        animationData: loader,
        loop: true,
        autoplay: true,
    };

    const { View } = useLottie(options);

    return View;
};

export default function Wave() {
    return (
        <div className="w-40 h-40 flex flex-col items-center justify-center">
            <Anim />
        </div>
    );
}