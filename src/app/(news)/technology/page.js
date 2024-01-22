import DynamicLeftSide from "./components/DynamicLeftSide";
import RightSide from "./components/RightSide";

export const metadata = {
  title: "Technology | Briefism",
};

const Category = () => {
  return (
    <main className="grid grid-cols-3 mb-10">
      <DynamicLeftSide />
      <RightSide />
    </main>
  );
};

export default Category;
