// 一個React元件會有的特徵

// 必須要是一個function
// 必須要回傳一個長得像HTML的東西 (JSX)

// 輸出元件讓其他檔案可以引用

// export default function TripCard() {
//   return <h1>這是一個TripCard元件</h1>;
// }

export default function TripCard({ trip }) {
  const { image, name, price, discountPrice, isDiscounted } = trip;
  return (
    <div className="card m-2 rounded-xl overflow-hidden shadow-md">
      <img src={image} alt={name} />
      <div className="card-content border-black">
        <h2 className="text-orange-500">{name}</h2>
        <p>
          ${/* 當ture的時候,只能回傳一個東西,所以要用<>包起來 */}
          {isDiscounted ? (
            <>
              <span className="text-red-500 font-bold mx-1">
                {discountPrice}
              </span>
              <span className="line-through mr-1 opacity-30">{price}</span>
            </>
          ) : (
            <span className="mx-1">{price}</span>
          )}
          NT
        </p>
      </div>
    </div>
  );
}
