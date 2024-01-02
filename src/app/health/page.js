import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

export const metadata = {
  title: "Health - Briefism",
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
