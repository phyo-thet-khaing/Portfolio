import AboutMe from "./AboutMe";
import JourneyContact from "./JourneyContact";

const AboutSection = () => {
  return (
    <section className="relative z-20 max-w-5xl mx-auto px-6 mt-32 mb-12">
      <AboutMe />
      <JourneyContact />
    </section>
  );
};

export default AboutSection;
