import BreakingNewsSlider from "@/components/Home/BreakingNewsSlider";
import BannerGrid from "@/components/Home/BannerGrid";
import MainGrid from "@/components/Home/MainGrid";

const Home = () => {
  return (
    <main>
      <div className="hidden sm:block">
        <BreakingNewsSlider />
      </div>
      <div className="mt-5">
        <BannerGrid />
      </div>
      <div className="mt-10 mb-14">
        <MainGrid />
      </div>
    </main>
  );
};

export default Home;
