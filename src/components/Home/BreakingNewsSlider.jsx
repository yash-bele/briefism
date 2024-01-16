"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { breaking } from "@/data/breaking";

const BreakingNewsSlider = () => {
  const [currIndex, setCurrIndex] = useState(0);

  const handleNext = () => {
    if (currIndex === breaking.length - 1) return setCurrIndex(0);
    setCurrIndex((prev) => prev + 1);
  };
  const handlePrev = () => {
    if (currIndex === 0) return setCurrIndex(breaking.length - 1);
    setCurrIndex((prev) => prev - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currIndex]);

  return (
    <main className="flex items-center justify-between text-slate-500">
      <section className="flex items-center">
        <span className="bg-red-50 border border-dashed border-red-300 text-red-500 px-3 py-1.5 rounded-lg whitespace-nowrap">
          Breaking Briefs
        </span>
        <span className="text-sm ml-2.5">
          <Link href={`/breaking/${breaking[currIndex].id}`}>
            {breaking[currIndex].title}
          </Link>
        </span>
      </section>
      <section className="space-x-2.5 flex items-center">
        <button
          onClick={handlePrev}
          className="border border-slate-300 bg-slate-50 p-1 rounded-lg hover:border-red-300 hover:text-red-500 hover:bg-red-50"
        >
          <GoChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="border border-slate-300 bg-slate-50 p-1 rounded-lg hover:border-red-300 hover:text-red-500 hover:bg-red-50"
        >
          <GoChevronRight />
        </button>
      </section>
    </main>
  );
};

export default BreakingNewsSlider;
