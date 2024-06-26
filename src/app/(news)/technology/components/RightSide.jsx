import Link from "next/link";
import Image from "next/image";
import { IoIosTimer } from "react-icons/io";
import { HiChevronDoubleRight } from "react-icons/hi2";
import { data } from "@/data";
import { history } from "@/history";
const { entertainment, health, lifestyle, technology } = data;
const {
  entertainmentHistory,
  healthHistory,
  lifestyleHistory,
  technologyHistory,
} = history;

const RightSide = () => {
  return (
    <section className="space-y-10 border-l border-dashed border-red-300 pl-5 ml-5 hidden lg:block">
      <section className="space-y-2.5">
        <h2 className="border-b-4 border-double border-red-100 mb-2.5 capitalize">
          <Link href="/entertainment" className="flex items-center">
            <HiChevronDoubleRight className="mt-px mr-px text-red-400" />
            <span>entertainment</span>
          </Link>
        </h2>
        {[...entertainment, ...entertainmentHistory].slice(0, 3).map((i, j) => (
          <article
            key={i.id}
            className={`flex items-center h-auto sm:h-20 space-x-0 sm:space-x-2.5 border-t border-slate-400 border-dashed sm:border-none pt-2.5 sm:pt-0 ${
              j === 0 && "border-none"
            }`}
          >
            <Link
              href={`/entertainment/${i.id}`}
              className="relative h-full w-40 hidden sm:block bg-slate-200 rounded-xl overflow-hidden"
            >
              <Image
                src={i.image}
                alt={i.id}
                fill
                sizes="auto"
                className="object-cover object-center"
              />
            </Link>
            <div className="w-full">
              <div className="flex items-center space-x-1 font-normal text-slate-400 mb-0.5">
                <IoIosTimer />
                <span className="text-xs">{i.timestamp}</span>
              </div>
              <Link href={`/entertainment/${i.id}`}>
                <h3 className="text-sm ">{i.title.substring(0, 70)}...</h3>
              </Link>
            </div>
          </article>
        ))}
      </section>
      <section className="space-y-2.5">
        <h2 className="border-b-4 border-double border-red-100 mb-2.5 capitalize">
          <Link href="/health" className="flex items-center">
            <HiChevronDoubleRight className="mt-px mr-px text-red-400" />
            <span>health</span>
          </Link>
        </h2>
        {[...health, ...healthHistory].slice(0, 3).map((i, j) => (
          <article
            key={i.id}
            className={`flex items-center h-auto sm:h-20 space-x-0 sm:space-x-2.5 border-t border-slate-400 border-dashed sm:border-none pt-2.5 sm:pt-0 ${
              j === 0 && "border-none"
            }`}
          >
            <Link
              href={`/health/${i.id}`}
              className="relative h-full w-40 hidden sm:block bg-slate-200 rounded-xl overflow-hidden"
            >
              <Image
                src={i.image}
                alt={i.id}
                fill
                sizes="auto"
                className="object-cover object-center"
              />
            </Link>
            <div className="w-full">
              <div className="flex items-center space-x-1 font-normal text-slate-400 mb-0.5">
                <IoIosTimer />
                <span className="text-xs">{i.timestamp}</span>
              </div>
              <Link href={`/health/${i.id}`}>
                <h3 className="text-sm ">{i.title.substring(0, 70)}...</h3>
              </Link>
            </div>
          </article>
        ))}
      </section>
      <section className="space-y-2.5">
        <h2 className="border-b-4 border-double border-red-100 mb-2.5 capitalize">
          <Link href="/lifestyle" className="flex items-center">
            <HiChevronDoubleRight className="mt-px mr-px text-red-400" />
            <span>lifestyle</span>
          </Link>
        </h2>
        {[...lifestyle, ...lifestyleHistory].slice(0, 3).map((i, j) => (
          <article
            key={i.id}
            className={`flex items-center h-auto sm:h-20 space-x-0 sm:space-x-2.5 border-t border-slate-400 border-dashed sm:border-none pt-2.5 sm:pt-0 ${
              j === 0 && "border-none"
            }`}
          >
            <Link
              href={`/lifestyle/${i.id}`}
              className="relative h-full w-40 hidden sm:block bg-slate-200 rounded-xl overflow-hidden"
            >
              <Image
                src={i.image}
                alt={i.id}
                fill
                sizes="auto"
                className="object-cover object-center"
              />
            </Link>
            <div className="w-full">
              <div className="flex items-center space-x-1 font-normal text-slate-400 mb-0.5">
                <IoIosTimer />
                <span className="text-xs">{i.timestamp}</span>
              </div>
              <Link href={`/lifestyle/${i.id}`}>
                <h3 className="text-sm ">{i.title.substring(0, 70)}...</h3>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};

export default RightSide;
