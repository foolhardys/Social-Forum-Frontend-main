import AboutHero from "../Components/About/AboutHero";
import AboutMain from "../Components/About/AboutMain";
import AboutSlider from "../Components/About/AboutSlider";

const About = () => {
  return (
    <section className="min-h-screen flex items-center flex-col bg-gradient-to-br from-purple-100 to-orange-200">
      <AboutHero />
      <AboutMain />
      <AboutSlider />
    </section>
  );
};

export default About;
