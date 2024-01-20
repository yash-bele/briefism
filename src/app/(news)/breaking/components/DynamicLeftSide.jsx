"use client";
import dynamic from "next/dynamic";
import LoadingLeftSide from "@/components/Loading/LoadingLeftSide";
const LeftSide = dynamic(() => import("./LeftSide"), {
  ssr: false,
  loading: () => <LoadingLeftSide category={"breaking"} />,
});

const DynamicLeftSide = () => {
  return <LeftSide />;
};

export default DynamicLeftSide;
