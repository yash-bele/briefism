import Image from "next/image";
import Link from "next/link";
import { IoIosTimer } from "react-icons/io";
import { lifestyle } from "@/data/lifestyle";
import { lifestyleHistory } from "@/history/lifestyle";

const Lifestyle = () => {
  return (
    <section className="space-y-2.5">
      <h2 className="border-b-4 border-double border-red-100 mb-2.5 capitalize">
        <Link href="/lifestyle">lifestyle</Link>
      </h2>
      {[...lifestyle, ...lifestyleHistory].slice(0, 3).map((i, j) => (
        <article
          key={i.id}
          style={{ paddingTop: j === 0 && 0 }}
          className={`flex items-center h-auto sm:h-20 space-x-0 sm:space-x-2.5 border-t border-slate-400 border-dashed sm:border-none pt-2.5 sm:pt-0 ${
            j === 0 && "border-none pt-0"
          }`}
        >
          <Link
            href={`/lifestyle/${i.id}`}
            className="relative h-full w-40 hidden sm:block bg-slate-200 rounded-xl overflow-hidden"
          >
            <Image
              priority
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
              <h3 className="text-sm hidden sm:block">
                {i.title.substring(0, 70)}...
              </h3>
              <h3 className="text-sm block sm:hidden">{i.title}</h3>
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Lifestyle;
