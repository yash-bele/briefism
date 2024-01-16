import dynamic from "next/dynamic";
import RightSide from "./components/RightSide";
const LeftSide = dynamic(() => import("./components/LeftSide"), {
  ssr: false,
});

export const metadata = {
  title: "Breaking | Briefism",
};

const Category = () => {
  return (
    <main className="grid grid-cols-3 mb-10">
      <LeftSide />
      <RightSide />
    </main>
  );
};

export default Category;
