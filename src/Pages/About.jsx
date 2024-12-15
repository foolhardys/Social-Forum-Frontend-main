import AboutHero from "../Components/About/AboutHero";
import AboutMain from "../Components/About/AboutMain";

const About = () => {
  return (
    <section className="min-h-screen flex items-center flex-col bg-gradient-to-br from-purple-100 to-orange-200">
      <AboutHero />
      <AboutMain />
    </section>
  );
};

export default About;
