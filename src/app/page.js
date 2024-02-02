import NewsSlider from "@/components/Home/NewsSlider";
import BannerGrid from "@/components/Home/BannerGrid";
// import Breaking from "@/components/Home/MainGrid/LeftGrid/Breaking";
import Entertainment from "@/components/Home/MainGrid/LeftGrid/Entertainment";
import Technology from "@/components/Home/MainGrid/LeftGrid/Technology";
import Health from "@/components/Home/MainGrid/RightGrid/Health";
import Lifestyle from "@/components/Home/MainGrid/RightGrid/Lifestyle";

const Home = () => {
  return (
    <main>
      <div className="hidden sm:block">
        <NewsSlider />
      </div>
      <div className="mt-5">
        <BannerGrid />
      </div>
      <div className="mt-10 mb-14">
        <main className="grid grid-cols-3">
          {/* Left Grid */}
          <section className="col-span-3 lg:col-span-2 space-y-10">
            {/* <Breaking /> */}
            <Entertainment />
            <Technology />
          </section>
          {/* Right Grid */}
          <section className="border-none lg:border-l lg:border-dashed border-red-300 pl-0 lg:pl-5 ml-0 lg:ml-5 mt-10 lg:mt-0 space-y-10 col-span-3 lg:col-span-1">
            <Lifestyle />
            <Health />
          </section>
        </main>
      </div>
    </main>
  );
};

export default Home;
