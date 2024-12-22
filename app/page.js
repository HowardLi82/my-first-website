// 寫註解可使用快捷鍵: ctrl + / (cmd + /)
import TripCard from "@/components/TripCard";
import tripList from "@/data/trip-list";
import Link from "next/link";

export default function Home() {
  // 這裡可以寫javascript邏輯(邏輯區)

  // 陣列.map() 透過map迴圈函式能夠將陣列內的資料逐一取出做加工

  // 傳統寫法
  // tripList.map(function(trip){
  //   console.log(trip)
  // })

  // cards 代表迴圈回傳的n張 TripCard
  const cards = tripList.map((trip) => {
    // 回圈內會重複執行的邏輯
    // console.log("這是一個行程", trip);
    return <TripCard trip={trip} key={trip.id} />;
  });

  return (
    <>
      <header className="bg-orange-500 py-10 text-center">
        <div className="container mx-auto">
          <h1>HTML &amp; CSS</h1>
          <p>
            關於HTML標籤的更多資訊可參考{" "}
            <Link href="/about" className="my-4 inline-block">
              關於本站
            </Link>
            <Link href="/faq" className="my-4 ml-4 inline-block">
              常見問答
            </Link>
          </p>
        </div>
      </header>
      <section id="tripListSection" className="my-4">
        <div className="container mx-auto px-8 sm:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* TODO: 請在此處放入一系列的產品卡片 */}

          {cards}

          {/* 
          <div className="card">
            <img src="/images/image3.jpg" alt="tree_picture1" />
            <div className="card-content shadow-lg border-black">
              <h2 className="text-orange-500">Trip to Bali</h2>
              <p>price: $1000 NT</p>
            </div>
          </div> */}
        </div>
      </section>
      <section id="htmlTagsSection" className="my-4">
        <div className="container mx-auto">
          <h1 className="imp-title">HTML標籤</h1>
          <p>用以表達你想在網頁上放入的各種內容</p>
          {/* TODO: 請嘗試在此處放入HTML標籤 */}
          <h2>我今天來台大上課</h2>
          <h3>今天的課程內容</h3>
          <h4>學習HTML與CSS</h4>
          <h5>基礎網頁開發</h5>
          <h6>前端工程入門</h6>
          <img src="https://picsum.photos/200/300" alt="random image" />
          <img src="/images/image1.jpg" alt="sea_picture1" />
          <img src="/images/image2.jpg" alt="forest_picture2" />
          <a href="https://www.google.com" target="_blank">
            Google
          </a>
        </div>
      </section>
      <footer className="">
        <div className="container mx-auto">
          <p>CopyRight &copy; 2024</p>
        </div>
      </footer>
    </>
  );
}
