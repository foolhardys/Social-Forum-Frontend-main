import HomeHero from "../Components/Home/HomeHero"
import HowWeWork from "../Components/Home/HowWeWork"
// import FeaturedBlogs from "../Components/Home/FeaturedBlogs"
// import Announcements from "../Components/Announcements/Announcements"
// import HomeCarousel from "./HomeCarousel"

const Home = () => {
  return (
    <section className='min-h-screen flex items-center flex-col bg-gradient-to-br from-purple-100 to-orange-200'>
      {/* <HomeCarousel /> */}
      <HomeHero />
      <HowWeWork/>
      {/* <Announcements /> */}
      {/* <FeaturedBlogs /> */}
    </section>
  )
}

export default Home