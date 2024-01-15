import Breaking from "./LeftGrid/Breaking";
import Entertainment from "./LeftGrid/Entertainment";
import Technology from "./LeftGrid/Technology";
import Health from "./RightGrid/Health";
import Lifestyle from "./RightGrid/Lifestyle";

const MainGrid = () => {
  return (
    <main className="grid grid-cols-3">
      {/* Left Grid */}
      <section className="col-span-3 lg:col-span-2 space-y-10">
        <Breaking />
        <Entertainment />
        <Technology />
      </section>
      {/* Right Grid */}
      <section className="border-none lg:border-l lg:border-dashed border-red-300 pl-0 lg:pl-5 ml-0 lg:ml-5 mt-10 lg:mt-0 space-y-10 col-span-3 lg:col-span-1">
        <Lifestyle />
        <Health />
      </section>
    </main>
  );
};

export default MainGrid;
