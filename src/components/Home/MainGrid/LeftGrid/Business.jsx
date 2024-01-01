import Image from "next/image";
import Link from "next/link";
import { IoIosTimer } from "react-icons/io";

const Business = ({ business }) => {
  return (
    <section>
      <Link href="/business">
        <h2 className="border-b-4 border-double border-red-100 mb-2.5 capitalize">
          business
        </h2>
      </Link>
      <div className="flex flex-col lg:grid grid-cols-2 gap-2.5 lg:gap-5">
        <section className="grid grid-rows-3 gap-2.5 h-[calc(384px/2)] lg:h-auto">
          {business.slice(0, 1).map((i, j) => (
            <Link
              key={i.id}
              href={`/business/${i.id}`}
              className={`relative group w-full h-full overflow-hidden cursor-pointer rounded-xl ${
                j === 0 ? "row-span-3" : "row-span-2"
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
              <div className="absolute bottom-0 w-full h-3/4 bg-gradient-to-b from-transparent to-black/50 flex items-end p-2.5">
                <div>
                  <div className="flex items-center space-x-1 font-normal text-slate-300 mb-0.5">
                    <IoIosTimer />
                    <span className="text-xs">{i.timestamp}</span>
                  </div>
                  <h3 className="text-slate-200 text-sm">{i.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </section>
        <section className="flex flex-col sm:grid grid-rows-3 gap-2.5">
          {business.slice(1, 4).map((i, j) => (
            <article
              key={i.id}
              className={`flex items-center h-auto sm:h-20 space-x-0 sm:space-x-2.5 border-t border-slate-400 border-dashed sm:border-none pt-2.5 sm:pt-0 ${
                j === 0 && "border-none"
              }`}
            >
              <Link
                href={`/business/${i.id}`}
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
                <Link href={`/business/${i.id}`}>
                  <h3 className="text-sm break-all">{i.title}</h3>
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Business;
