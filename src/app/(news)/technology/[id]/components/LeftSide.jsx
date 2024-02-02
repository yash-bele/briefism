import Link from "next/link";
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

const LeftSide = () => {
  return (
    <aside className="pt-5 lg:pt-0 lg:pr-5 mt-5 lg:mt-0 lg:mr-5 border-none lg:border-r lg:border-dashed border-red-300 space-y-10">
      <section>
        <h2 className="border-b-4 border-double border-red-100 mb-2.5 capitalize">
          <Link href="/entertainment" className="flex items-center">
            <HiChevronDoubleRight className="mt-px mr-px text-red-400" />
            <span>entertainment</span>
          </Link>
        </h2>
        <div className="space-y-2.5">
          {[...entertainment, ...entertainmentHistory]
            .slice(0, 5)
            .map((i, j) => (
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
                    <h3 className="text-sm ">{`${i.title}`}</h3>
                  </Link>
                </div>
              </article>
            ))}
        </div>
      </section>
      <section>
        <h2 className="border-b-4 border-double border-red-100 mb-2.5 capitalize">
          <Link href="/health" className="flex items-center">
            <HiChevronDoubleRight className="mt-px mr-px text-red-400" />
            <span>health</span>
          </Link>
        </h2>
        <div className="space-y-2.5">
          {[...health, ...healthHistory].slice(0, 5).map((i, j) => (
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
                  <h3 className="text-sm ">{`${i.title}`}</h3>
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
