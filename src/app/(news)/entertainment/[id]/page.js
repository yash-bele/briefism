import Link from "next/link";
import Image from "next/image";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import { entertainment } from "@/data/entertainment";
import { entertainmentHistory } from "@/history/entertainment";
const formatData = [...entertainment, ...entertainmentHistory];

export async function generateStaticParams() {
  return formatData.map((i) => i.id);
}

export async function generateMetadata({ params }) {
  const datum = formatData.find((i) => i.id === params.id);
  return {
    title: `${datum.title} | Briefism`,
    description: datum.preArticle,
  };
}

const Id = ({ params }) => {
  const datum = formatData.find((i) => i.id === params.id);
  return (
    <main className="grid grid-cols-1 lg:grid-cols-4 mb-10 mx-auto">
      <LeftSide id={datum.id} />
      {/* || Main || */}
      <section className="col-span-1 lg:col-span-2 space-y-5 -order-1 lg:order-none">
        {/* Head */}
        <div className="text-sm">
          <Link href="/" className="text-red-600 cursor-pointer">
            Home
          </Link>{" "}
          /{" "}
          <Link
            href="/entertainment"
            className="text-red-600 cursor-pointer capitalize"
          >
            entertainment
          </Link>{" "}
          / <span className="text-slate-600">{datum.title}</span>
        </div>
        {/* Main */}
        <article>
          <h1 className="text-xl sm:text-2xl text-slate-600">
            {datum.title}{" "}
            <time className="text-sm">{`(${datum.timestamp})`}</time>
          </h1>
          <div className="relative w-full h-72 sm:h-96 bg-slate-200 rounded-xl overflow-hidden mt-2.5 mb-5">
            <Image
              src={datum.image}
              alt={datum.id}
              fill
              sizes="auto"
              className="object-cover object-center"
            />
          </div>
          <article className="text-sm">{datum.article}</article>
          <div className="list-outside list-disc marker:text-slate-400 ml-4 space-y-6">
            <div className="space-y-3">
              <div className="space-y-1.5" />
            </div>
          </div>
        </article>
      </section>
      <RightSide />
    </main>
  );
};

export default Id;
