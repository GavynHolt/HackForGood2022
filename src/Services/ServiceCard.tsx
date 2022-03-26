import { useNavigate } from "react-router-dom";

export default function ServiceCard({ item }: any) {
    const navigate = useNavigate();

    return (
        <div className="rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full" src="https://images.unsplash.com/photo-1579600161224-cac5a2971069?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" alt="Mountain" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2" onClick={() => navigate(`${item.slug}`, { state: { slug: item.slug } })}>{item?.title}</div>
                <p className="text-gray-700 text-base">{item?.summary?.slice(0, 200).concat('…')}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {/* {item?.topics?.map((topic: any) => topic !== 'and' && (<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={`${topic}-${(Math.random() + 1).toString(36).substring(7)}`}>#{topic}</span>))} */}
            </div>
        </div>
    );
}