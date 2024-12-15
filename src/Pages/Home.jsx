import HomeHero from "../Components/Home/HomeHero";
import HomeTestimonials from "../Components/Home/HomeTestimonials";
import HowWeWork from "../Components/Home/HowWeWork";
// import FeaturedBlogs from "../Components/Home/FeaturedBlogs"
// import Announcements from "../Components/Announcements/Announcements"
// import HomeCarousel from "./HomeCarousel"

const Home = () => {
  return (
    <section className="min-h-screen flex items-center flex-col bg-gradient-to-br from-purple-100 to-orange-200">
      {/* <HomeCarousel /> */}
      <HomeHero />
      <HomeTestimonials />
      <HowWeWork />
      {/* <Announcements /> */}
      {/* <FeaturedBlogs /> */}
    </section>
  );
};

export default Home;
