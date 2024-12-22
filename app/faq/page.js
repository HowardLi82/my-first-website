import faqList from "@/data/faq-list";
import Link from "next/link";

export default function FAQ() {
  return (
    <>
      <header className="bg-orange-500 py-10 text-center">
        <div className="container mx-auto">
          <h1>HTML &amp; CSS</h1>
        </div>
      </header>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">常見問答</h1>
        <Link href="/" className="text-center block">
          回首頁
        </Link>
        <section className="bg-neutral-100 py-10">
          <div className="container mx-auto">
            {faqList.map((faq) => {
              const { id, question, answer } = faq;
              return (
                <div
                  key={id}
                  className="bg-gray-100 p-4 rounded-md shadow-md mb-4"
                >
                  <h2 className="p-4">{question}</h2>
                  <p className="p-4 border-t border-neutral-300">{answer}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
