
function LoadingCard() {
  return (
    <div className="bg-white w-80 mx-auto rounded-2xl shadow-lg m-4">
      <div className="bg-gray-200 h-48 p-3 rounded-2xl overflow-hidden animate-pulse"></div>
      <div className="p-3">
        <div className="grid grid-cols-3 gap-4 mt-2">
          <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-8 col-span-2 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingCard;