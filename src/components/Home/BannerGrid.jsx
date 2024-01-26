import Link from "next/link";
import Image from "next/image";
import { data } from "@/data";
const formatData = [
  data.breaking[5],
  data.breaking[6],
  data.breaking[7],
  data.breaking[8],
  data.breaking[9],
];

const BannerGrid = () => {
  return (
    <section className="h-[calc(2*384px)] lg:h-96 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-5 sm:grid-rows-4 lg:grid-rows-2 gap-2.5 rounded-xl overflow-hidden">
      {formatData.map((i, j) => (
        <Link
          key={i.id}
          href={`/${
            j === 0
              ? "breaking"
              : j === 1
              ? "breaking"
              : j === 2
              ? "breaking"
              : j === 3
              ? "breaking"
              : j === 4
              ? "breaking"
              : null
          }/${i.id}`}
          className={`relative group rounded-lg overflow-hidden bg-slate-200 ${
            j === 0 && "sm:col-span-2 sm:row-span-2"
          }`}
        >
          <Image
            priority
            src={i.image}
            alt={i.id}
            fill
            sizes="auto"
            className="object-cover object-center group-hover:scale-110 duration-500"
          />
          <div
            className={`absolute bottom-0 w-full h-1/2 bg-gradient-to-b from-transparent to-black/75 flex items-end ${
              j === 0 ? "p-2.5 sm:p-5" : "p-2.5"
            }`}
          >
            <div>
              <h3
                className={`text-slate-100 ${
                  j === 0 ? "text-sm sm:text-base" : "text-sm"
                }`}
              >
                {j === 0 ? i.title : `${i.title.substring(0, 100)}...`}
              </h3>
              {j === 0 && (
                <p className="text-sm text-slate-300 mt-0.5 hidden sm:block">
                  {i.preArticle.substring(0, 175)}...
                </p>
              )}
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default BannerGrid;
