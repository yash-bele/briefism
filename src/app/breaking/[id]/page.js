import Image from "next/image";
import Link from "next/link";
import { breaking } from "@/data/breaking";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

export async function generateMetadata({ params }) {
  const datum = breaking.find((i) => i.id === params.id);
  return {
    title: `${datum.title} | Briefism`,
    description: datum.preArticle,
  };
}

const Id = ({ params }) => {
  const datum = breaking.find((i) => i.id === params.id);
  return (
    <main className="grid md:grid-cols-2 lg:grid-cols-4 mb-10 mx-auto">
      <LeftSide id={datum.id} />
      {/* || Main || */}
      <section className="lg:col-span-2 space-y-5">
        {/* Head */}
        <div className="text-sm">
          <Link href="/" className="text-red-600 cursor-pointer">
            Home
          </Link>{" "}
          /{" "}
          <Link
            href="/breaking"
            className="text-red-600 cursor-pointer capitalize"
          >
            breaking
          </Link>{" "}
          / <span className="text-slate-600">{datum.title}</span>
        </div>
        {/* Main */}
        <article>
          <h1 className="text-2xl text-slate-600">{datum.title}</h1>
          <div className="relative w-full h-72 sm:h-96 bg-slate-200 rounded-xl overflow-hidden mt-1.5 mb-3">
            <Image
              priority
              src={datum.image}
              alt={datum.id}
              fill
              sizes="auto"
              className="object-cover object-center"
            />
          </div>
          <div className="space-y-3 text-sm">{datum.article}</div>
        </article>
      </section>
      <RightSide />
    </main>
  );
};

export default Id;
