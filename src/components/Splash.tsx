import LogoBanner from "./LogoBanner";

export default function Splash({ visible }: any) {
    return (
        <div className={`${!visible ? 'invisible' : 'visible'} ${!visible ? 'opacity-0' : 'opacity-100'} fixed top-0 left-0 bottom-0 right-0 z-50 bg-white flex items-center justify-center transition-all bg-navyblue`}>
            <LogoBanner orientation="col" />
        </div>
    );
}