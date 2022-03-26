import { useNavigate } from "react-router-dom";
import ImageGen from "../image-gen";

export default function CategoryCard({ item }: any) {
    const navigate = useNavigate();

    return (
        <div className="rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full" src={ImageGen()} alt="Mountain" />
            <div className="px-6 py-4">
                <div className="font-semibold text-xl font-uber text-blue-600" onClick={() => navigate(`${item.slug}`, { state: { slug: item.slug, name: item.name } })}>{item?.name}</div>
                {/* <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p> */}
            </div>
            <div className="border-t-2 border-gray-200 px-6 pt-4 pb-4 font-uber">
                {item?.topics?.map((topic: any) => topic !== 'and' && (<span className="font-uber font-normal inline-block bg-blue-100 rounded-full px-3 py-1 text-xs text-gray-700 mx-1 mb-1" key={`${topic}-${(Math.random() + 1).toString(36).substring(7)}`}>{topic}</span>))}
            </div>
        </div>
    );
}