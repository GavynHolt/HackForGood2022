export default function ContributeBanner() {
    return (
        <div className="banner px-8 py-8 m-8 rounded-lg flex flex-col items-center justify-center">
            <h4 className="text-white font-semibold text-2xl font-uber">Help contribute to the Mental Health Cause</h4>
            <button className="font-uber bg-transparent hover:bg-blue-500 text-blue-700 font-semibold text-white py-2 px-4 border border-white border-blue-500 hover:border-transparent rounded mt-8">
                Learn More
            </button>
        </div>
    );
}