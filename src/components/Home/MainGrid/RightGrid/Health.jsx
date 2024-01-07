import Image from "next/image";
import Link from "next/link";
import { IoIosTimer } from "react-icons/io";
import { health } from "@/data/health";
import { healthHistory } from "@/history/health";

const Health = () => {
  return (
    <section className="space-y-2.5">
      <h2 className="border-b-4 border-double border-red-100 mb-2.5 capitalize">
        <Link href="/health">health</Link>
      </h2>
      {[...health, ...healthHistory].slice(0, 3).map((i, j) => (
        <article key={i.id} className="flex items-center h-20 space-x-2.5">
          <Link
            href={`/health/${i.id}`}
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
            <Link href={`/health/${i.id}`}>
              <h3 className="text-sm break-all">
                {i.title.substring(0, 70)}...
              </h3>
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Health;
