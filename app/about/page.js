import Link from "next/link";

export default function About() {
  return (
    <>
      <header className="py-10 bg-neutral-200 text-center">
        <div className="container mx-auto">
          <h1>這是About頁面</h1>
          <p>關於頁面</p>
          <Link href="/" className="my-4 inline-block">
            回首頁
          </Link>
        </div>
      </header>
    </>
  );
}
