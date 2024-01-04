import Link from "next/link";
import { IoIosTimer } from "react-icons/io";
import { data } from "@/data";

const LeftSide = () => {
  return (
    <aside className="pr-5 mr-5 border-r border-dashed border-red-300 space-y-10 hidden lg:block">
      <section>
        <h2 className="border-b-4 border-double border-red-100 mb-2.5 capitalize">
          <Link href="/breaking">breaking</Link>
        </h2>
        <div className="space-y-2.5">
          {data.breaking.slice(0, 5).map((i, j) => (
            <article
              key={i.id}
              style={{ paddingTop: j === 0 && 0 }}
              className={`flex items-center border-t border-slate-400 border-dashed pt-2.5 ${
                j === 0 && "border-none"
              }`}
            >
              <div className="w-full">
                <div className="flex items-center space-x-1 font-normal text-slate-400 mb-0.5">
                  <IoIosTimer />
                  <span className="text-xs">{i.timestamp}</span>
                </div>
                <Link href={`/breaking/${i.id}`}>
                  <h3 className="text-sm break-all">{`${i.title}`}</h3>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section>
        <h2 className="border-b-4 border-double border-red-100 mb-2.5 capitalize">
          <Link href="/entertainment">entertainment</Link>
        </h2>
        <div className="space-y-2.5">
          {data.entertainment.slice(0, 5).map((i, j) => (
            <article
              key={i.id}
              style={{ paddingTop: j === 0 && 0 }}
              className={`flex items-center border-t border-slate-400 border-dashed pt-2.5 ${
                j === 0 && "border-none"
              }`}
            >
              <div className="w-full">
                <div className="flex items-center space-x-1 font-normal text-slate-400 mb-0.5">
                  <IoIosTimer />
                  <span className="text-xs">{i.timestamp}</span>
                </div>
                <Link href={`/entertainment/${i.id}`}>
                  <h3 className="text-sm break-all">{`${i.title}`}</h3>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section>
        <h2 className="border-b-4 border-double border-red-100 mb-2.5 capitalize">
          <Link href="/health">health</Link>
        </h2>
        <div className="space-y-2.5">
          {data.health.slice(0, 5).map((i, j) => (
            <article
              key={i.id}
              style={{ paddingTop: j === 0 && 0 }}
              className={`flex items-center border-t border-slate-400 border-dashed pt-2.5 ${
                j === 0 && "border-none"
              }`}
            >
              <div className="w-full">
                <div className="flex items-center space-x-1 font-normal text-slate-400 mb-0.5">
                  <IoIosTimer />
                  <span className="text-xs">{i.timestamp}</span>
                </div>
                <Link href={`/health/${i.id}`}>
                  <h3 className="text-sm break-all">{`${i.title}`}</h3>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default LeftSide;
