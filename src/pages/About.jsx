import RevealOnScroll from "../components/RevealOnScroll";
import PageTransition from "../components/PageTransition";
import Timeline from "../components/Timeline";

const About = () => {
  return (
    <PageTransition>
      <section className="min-h-screen px-6 py-12 pt-20 text-gray-800 bg-white dark:bg-gray-900 dark:text-white">
        <div className="max-w-4xl mx-auto">
          <RevealOnScroll>
            <h2 className="mb-6 text-4xl font-bold text-center">About Me</h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <p className="mb-4 text-lg leading-8">
              I'm a final-year computer engineering student at LTCE, Mumbai University. 
              I love building software that solves real-world problems and am deeply interested 
              in IoT and cloud technologies.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="mb-4 text-lg leading-8">
              I'm currently working on advanced projects like smart glasses for the visually impaired and 
              an e-commerce platform called ShopSwift.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <p className="text-lg leading-8">
              Outside of tech, I enjoy learning about innovation, startups, and the future of smart devices.
            </p>
          </RevealOnScroll>
        </div>

        <div className="mt-16">
          <Timeline />
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
