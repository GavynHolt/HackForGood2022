import { useNavigate } from "react-router-dom";

export default function CategoryCard({ item }: any) {
    const navigate = useNavigate();

    return (
        <div className="rounded overflow-hidden shadow-lg bg-white">
            {/* <img className="w-full" src="https://images.unsplash.com/photo-1579600161224-cac5a2971069?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" alt="Mountain" /> */}
            <div className="px-6 py-4">
                <div className="font-semibold text-xl font-uber text-blue-600">{item?.title}</div>
                <p className="text-gray-700 text-base">{item?.desc}</p>
            </div>
            <div className="border-t-2 border-gray-200 px-6 pt-4 pb-4 font-uber">
                {item?.contact.map((ph: any, index: any) => {
                    return <div key={index} dangerouslySetInnerHTML={{ __html: ph }}></div>;
                })}
            </div>
        </div>
    );
}