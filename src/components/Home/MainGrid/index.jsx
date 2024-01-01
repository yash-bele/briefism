import { data } from "@/data";
// Left Grid
import Breaking from "./LeftGrid/Breaking";
import Entertainment from "./LeftGrid/Entertainment";
import Technology from "./LeftGrid/Technology";
import Business from "./LeftGrid/Business";
// Right Grid
import Lifestyle from "./RightGrid/Lifestyle";
import Health from "./RightGrid/Health";
import Sports from "./RightGrid/Sports";

const MainGrid = () => {
  return (
    <main className="grid grid-cols-3">
      {/* Left Grid */}
      <section className="col-span-3 lg:col-span-2 space-y-10">
        <Breaking breaking={data.breaking} />
        <Entertainment entertainment={data.entertainment} />
        <Technology technology={data.technology} />
        <Business business={data.business} />
      </section>
      {/* Right Grid */}
      <section className="border-l border-dashed border-red-300 pl-5 ml-5 hidden lg:block space-y-10">
        <Lifestyle lifestyle={data.lifestyle} />
        <Health health={data.health} />
        <Sports sports={data.sports} />
      </section>
    </main>
  );
};

export default MainGrid;
