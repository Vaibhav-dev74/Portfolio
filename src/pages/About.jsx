import RevealOnScroll from "../components/RevealOnScroll";
import Timeline from "../components/Timeline";
import PageTransition from "../components/PageTransition";

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
              I love building software that solves real-world problems and am deeply
              interested in IoT and cloud technologies.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="mb-4 text-lg leading-8">
              I'm currently working on advanced projects like smart glasses for the
              visually impaired and an e-commerce platform called ShopSwift.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <p className="text-lg leading-8">
              Outside of tech, I enjoy learning about innovation, startups, and the
              future of smart devices.
            </p>
          </RevealOnScroll>

          {/* Programming Languages Section */}
          <RevealOnScroll delay={0.4}>
            <div className="mt-12">
              <h3 className="mb-6 text-2xl font-semibold text-center">
                Programming Languages & Tools
              </h3>

              <div className="overflow-hidden">
                <div className="flex items-center gap-10 animate-scroll">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-12 h-12" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 h-12" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-12 h-12" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-12 h-12" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-12 h-12" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-12 h-12" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-12 h-12" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" className="w-12 h-12" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-12 h-12" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-12 h-12" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-12 h-12" />
                </div>
              </div>
            </div>
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
