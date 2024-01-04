import Link from "next/link";
import { IoIosTimer } from "react-icons/io";
import { data } from "@/data";

const RightSide = () => {
  return (
    <aside className="pl-5 ml-5 border-l border-dashed border-red-300 space-y-10 hidden md:block">
      <section>
        <h2 className="border-b-4 border-double border-red-100 mb-2.5 capitalize">
          <Link href="/lifestyle">lifestyle</Link>
        </h2>
        <div className="space-y-2.5">
          {data.lifestyle.slice(0, 5).map((i, j) => (
            <article
              key={i.id}
              className={`flex items-center border-t border-slate-400 border-dashed pt-2.5 ${
                j === 0 && "border-none pt-0"
              }`}
            >
              <div className="w-full">
                <div className="flex items-center space-x-1 font-normal text-slate-400 mb-0.5">
                  <IoIosTimer />
                  <span className="text-xs">{i.timestamp}</span>
                </div>
                <Link href={`/lifestyle/${i.id}`}>
                  <h3 className="text-sm break-all">{i.title}</h3>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section>
        <h2 className="border-b-4 border-double border-red-100 mb-2.5 capitalize">
          <Link href="/technology">technology</Link>
        </h2>
        <div className="space-y-2.5">
          {data.technology.slice(0, 5).map((i, j) => (
            <article
              key={i.id}
              className={`flex items-center border-t border-slate-400 border-dashed pt-2.5 ${
                j === 0 && "border-none pt-0"
              }`}
            >
              <div className="w-full">
                <div className="flex items-center space-x-1 font-normal text-slate-400 mb-0.5">
                  <IoIosTimer />
                  <span className="text-xs">{i.timestamp}</span>
                </div>
                <Link href={`/technology/${i.id}`}>
                  <h3 className="text-sm break-all">{i.title}</h3>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default RightSide;
