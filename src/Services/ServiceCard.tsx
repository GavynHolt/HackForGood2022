import ImageGen from "../image-gen";

export default function ServiceCard({ item }: any) {
    return (
        <div className="rounded overflow-hidden shadow-lg bg-white relative inline-block">
            <img className="w-full" src={ImageGen()} alt="Mountain" />
            <div className="px-6 py-4">
                <a className="font-bold text-xl mb-2 font-uber" href={`https://${item?.website}`} rel="noreferrer" target="_blank">{item?.title}</a>
                <p className="text-gray-700 text-base font-uber mt-2">{item?.summary?.slice(0, 200).concat('…')}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <div className="flex justify-start items-center m-1 px-4 py-1.5 rounded-full bg-orange-700 text-base text-white font-medium">
                    <i className="fa fa-globe mr-1"></i>
                    <a href={`https://${item?.website}`} rel="noreferrer" target="_blank" className="flex-initial leading-none text-xs font-normal">{item?.website}</a>
                </div>
                {item?.area && (
                    <div className="flex justify-start items-center m-1 px-4 py-1.5 rounded-full bg-orange-700 text-base text-white font-medium">
                        <i className="fa fa-location-arrow mr-1"></i>
                        <div className="flex-initial leading-none text-xs font-normal">{item?.area}</div>
                    </div>
                )}
                {item?.lang && (
                    <div className="flex justify-start items-center m-1 px-4 py-1.5 rounded-full bg-orange-700 text-base text-white font-medium">
                        <i className="fa fa-location-arrow mr-1"></i>
                        <div className="flex-initial leading-none text-xs font-normal">{item?.lang}</div>
                    </div>
                )}
                {item?.phone && (
                    <div className="flex justify-start items-center m-1 px-4 py-1.5 rounded-full bg-orange-700 text-base text-white font-medium">
                        <i className="fa fa-phone mr-1"></i>
                        {item?.phone?.length === 1 && <div className="flex-initial leading-none text-xs font-normal"><a href={`tel:` + item?.phone[0]}>{item?.phone[0]}</a></div>}
                        {item?.phone?.length === 2 && <div className="flex-initial leading-none text-xs font-normal"><a href={`tel:` + item?.phone[0]}>{item?.phone[0]}</a>, <a href={item?.phone[1]}>{item?.phone[1]}</a></div>}
                    </div>
                )}
            </div>
            {item?.fees ? (
                <span className="drop-shadow-md absolute top-2 right-2 inline-flex items-center justify-center px-4 py-1.5 text-xs font-bold leading-none text-red-100 transform bg-orange-600 rounded-full">
                    <i className="fa fa-credit-card"></i>
                    <span className="ml-2">Paid</span>
                </span>
            ) : (
                <span className="drop-shadow-md absolute top-2 right-2 inline-flex items-center justify-center px-4 py-1.5 text-xs font-bold leading-none text-red-100 transform bg-green-600 rounded-full">
                    <i className="fa fa-credit-card"></i>
                    <span className="ml-2">Free Service</span>
                </span>
            )}
        </div>
    );
}