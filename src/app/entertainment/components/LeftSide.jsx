"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { IoIosTimer } from "react-icons/io";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { entertainment } from "@/data/entertainment";
import { entertainmentHistory } from "@/history/entertainment";
const concatData = [...entertainment, ...entertainmentHistory];

const LeftSide = () => {
  const [page, setPage] = useState(1);
  const handlePageChange = ({ selected }) => {
    setPage(selected + 1);
  };

  return (
    <section className="col-span-3 lg:col-span-2">
      <div className="border-b-4 border-double border-red-100 capitalize mb-2.5">
        <Link href="/" className="text-sm text-red-600 cursor-pointer">
          Home
        </Link>{" "}
        / <h1 className="text-base inline">entertainment</h1>
      </div>
      <div className="space-y-5">
        {concatData.slice(page * 7 - 7, page * 7).map((i, j) => (
          <article
            key={j}
            style={{ paddingTop: j === 0 && 0 }}
            className={`flex flex-col md:flex-row items-center space-x-0 md:space-x-2.5 border-t border-slate-400 border-dashed md:border-none pt-5 md:pt-0 ${
              j === 0 && "border-none"
            }`}
          >
            <Link
              href={`/entertainment/${i.id}`}
              className="relative h-40 w-full sm:w-96 bg-slate-200 rounded-xl overflow-hidden"
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
            <div className="w-full mt-2.5 md:mt-0">
              <div className="flex items-center space-x-1 font-normal text-slate-400 mb-0.5">
                <IoIosTimer />
                <span className="text-xs">{i.timestamp}</span>
              </div>
              <Link href={`/entertainment/${i.id}`}>
                <h3 className="mb-0.5 break-all">{i.title}</h3>
                <p className="text-sm text-slate-500 break-all">
                  {i.preArticle}
                </p>
              </Link>
            </div>
          </article>
        ))}
      </div>
      <ReactPaginate
        previousLabel={<GoChevronLeft />}
        nextLabel={<GoChevronRight />}
        breakLabel="..."
        pageCount={Math.ceil(concatData.length / 7)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={0}
        onPageChange={handlePageChange}
        containerClassName="flex border border-slate-300 rounded-lg w-fit mx-auto mt-10 overflow-hidden text-sm"
        pageLinkClassName="w-10 h-10 grid place-items-center border-r border-slate-300 hover:text-red-500 hover:bg-red-50"
        previousLinkClassName="w-10 h-10 grid place-items-center border-r border-slate-300 hover:text-red-300 hover:bg-red-50 text-slate-400 text-xl"
        nextLinkClassName="w-10 h-10 grid place-items-center hover:text-red-300 hover:bg-red-50 text-slate-400 text-xl"
        breakLinkClassName="w-10 h-10 grid place-items-center border-r border-slate-300 hover:text-red-500 hover:bg-red-50"
        activeClassName="text-red-500 bg-red-50"
      />
    </section>
  );
};

export default LeftSide;
