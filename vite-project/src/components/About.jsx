import { motion } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";
import { FaReact, FaHtml5, FaCss3Alt, FaPython, FaJava, FaPhp, FaBootstrap, FaAndroid, FaDatabase, FaJs, FaNode, FaFlask, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiAstro, SiSqlite, SiMysql, SiSqlalchemy, SiApifox, SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap, SiPython, SiFlask, SiFastapi, SiNodedotjs, SiPhp, SiAndroidstudio, SiGit, SiGithub, SiEclipseide, SiJsonwebtokens, SiPostman } from "react-icons/si";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card"
import { VscVscodeInsiders } from "react-icons/vsc";


function About() {

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.25, 0.25, 0, 1],
      },
    }),
  };

  return (
    <ScrollAnimation>
      <section className="section" id="about">
        <ScrollAnimation delay={0.1}>
          <div className="section-title text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Sobre mí</h2>
          </div>
        </ScrollAnimation>

        <div className="about-content flex flex-col md:flex-row items-center gap-10 md:gap-16 px-4">
          {/* Imagen */}
          <ScrollAnimation direction="left" delay={0.2}>
            <div className="about-image rounded-2xl overflow-hidden shadow-lg shrink-0">
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="About Tomás"
                className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[400px] object-cover mx-auto"
              />
            </div>
          </ScrollAnimation>

          {/* Texto + Stack */}
          <ScrollAnimation direction="right" delay={0.3}>
            <div className="about-text text-neutral-300 max-w-xl w-full mx-auto text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">👋 Hola, soy Tomás</h3>
              <p className="mb-3">
                🧠 Apasionado por crear experiencias digitales completas, desde la lógica del backend
                hasta la interacción visual del frontend.
              </p>
              <p className="mb-3">
                💻 Llevo más de 2 años desarrollando proyectos web y móviles, usando tecnologías
                modernas y buenas prácticas.
              </p>
              <p className="mb-6">
                📖 Formado en el CFGS de DAM (2022–2024) y el Bootcamp FullStack de 4Geeks Academy (2025).
              </p>

              <Accordion
                type="single"
                collapsible
                className="w-full mt-5"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="cursor-pointer">FRONT-END STACK</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-1 text-balance">

                    <div className="flex flex-row gap-10 text-4xl">
                      <HoverCard>
                        <HoverCardTrigger className="hover:animate-pop cursor-pointer"><SiHtml5 /></HoverCardTrigger>
                        <HoverCardContent className="w-20 text-center text-gray-400 bg-[#181818]">HTML5</HoverCardContent>
                      </HoverCard>

                      <HoverCard>
                        <HoverCardTrigger className="hover:animate-pop cursor-pointer"><SiCss3 /></HoverCardTrigger>
                        <HoverCardContent className="w-20 text-center text-gray-400 bg-[#181818]">CSS3</HoverCardContent>
                      </HoverCard>

                      <HoverCard>
                        <HoverCardTrigger className="hover:animate-pop cursor-pointer"><SiJavascript /></HoverCardTrigger>
                        <HoverCardContent className="w-25 text-center text-gray-400 bg-[#181818]">JavaScript</HoverCardContent>
                      </HoverCard>

                      <HoverCard>
                        <HoverCardTrigger className="hover:animate-pop cursor-pointer"><SiReact /></HoverCardTrigger>
                        <HoverCardContent className="w-20 text-center text-gray-400 bg-[#181818]">React.js</HoverCardContent>
                      </HoverCard>

                      <HoverCard>
                        <HoverCardTrigger className="hover:animate-pop cursor-pointer"><SiTailwindcss /></HoverCardTrigger>
                        <HoverCardContent className="w-30 text-center text-gray-400 bg-[#181818]">TailwindCSS</HoverCardContent>
                      </HoverCard>

                      <HoverCard>
                        <HoverCardTrigger className="hover:animate-pop cursor-pointer"><SiBootstrap /></HoverCardTrigger>
                        <HoverCardContent className="w-25 text-center text-gray-400 bg-[#181818]">Bootstrap5</HoverCardContent>
                      </HoverCard>

                      <HoverCard>
                        <HoverCardTrigger className="hover:animate-pop cursor-pointer"><SiAstro /></HoverCardTrigger>
                        <HoverCardContent className="w-20 text-center text-gray-400 bg-[#181818]">Astro.js</HoverCardContent>
                      </HoverCard>
                    </div>
                    <p></p>

                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="cursor-pointer">BACK-END STACK</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-1 text-balance">

                    <div className="flex flex-row gap-10 text-4xl">
                    <HoverCard>
                        <HoverCardTrigger className="hover:animate-pop cursor-pointer"><SiPython /></HoverCardTrigger>
                        <HoverCardContent className="w-20 text-center text-gray-400 bg-[#181818]">Python</HoverCardContent>
                      </HoverCard>

                      <HoverCard>
                        <HoverCardTrigger className="hover:animate-pop cursor-pointer"><FaNodeJs /></HoverCardTrigger>
                        <HoverCardContent className="w-20 text-center text-gray-400 bg-[#181818]">Node.js</HoverCardContent>
                      </HoverCard>

                      <HoverCard>
                        <HoverCardTrigger className="hover:animate-pop cursor-pointer"><SiFlask /></HoverCardTrigger>
                        <HoverCardContent className="w-25 text-center text-gray-400 bg-[#181818]">Flask</HoverCardContent>
                      </HoverCard>

                      <HoverCard>
                        <HoverCardTrigger className="hover:animate-pop cursor-pointer"><SiFastapi /></HoverCardTrigger>
                        <HoverCardContent className="w-20 text-center text-gray-400 bg-[#181818]">FastAPI</HoverCardContent>
                      </HoverCard>

                      <HoverCard>
                        <HoverCardTrigger className="hover:animate-pop cursor-pointer"><SiPhp /></HoverCardTrigger>
                        <HoverCardContent className="w-20 text-center text-gray-400 bg-[#181818]">PHP</HoverCardContent>
                      </HoverCard>

                      <HoverCard>
                        <HoverCardTrigger className="hover:animate-pop cursor-pointer"><FaJava /></HoverCardTrigger>
                        <HoverCardContent className="w-25 text-center text-gray-400 bg-[#181818]">Java</HoverCardContent>
                      </HoverCard>
                    </div>
                    <p></p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="cursor-pointer">DATABASES</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">

                    <div className="flex flex-row gap-10 text-4xl">
                      <HoverCard>
                        <HoverCardTrigger className="hover:animate-pop cursor-pointer"><SiMysql /></HoverCardTrigger>
                        <HoverCardContent className="w-20 text-center text-gray-400 bg-[#181818]">MySql</HoverCardContent>
                      </HoverCard>

                      <HoverCard>
                        <HoverCardTrigger className="hover:animate-pop cursor-pointer"><SiSqlite /></HoverCardTrigger>
                        <HoverCardContent className="w-20 text-center text-gray-400 bg-[#181818]">SqLite</HoverCardContent>
                      </HoverCard>

                      <HoverCard>
                        <HoverCardTrigger className="hover:animate-pop cursor-pointer"><SiSqlalchemy /></HoverCardTrigger>
                        <HoverCardContent className="w-25 text-center text-gray-400 bg-[#181818]">SqlAlchemy</HoverCardContent>
                      </HoverCard>

                    </div>
                    <p></p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="cursor-pointer">TOOLS</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">

                  <div className="flex flex-row gap-10 text-4xl">
                      <HoverCard>
                        <HoverCardTrigger className="hover:animate-pop cursor-pointer"><VscVscodeInsiders /></HoverCardTrigger>
                        <HoverCardContent className="w-20 text-center text-gray-400 bg-[#181818]">VSCode</HoverCardContent>
                      </HoverCard>

                      <HoverCard>
                        <HoverCardTrigger className="hover:animate-pop cursor-pointer"><SiEclipseide /></HoverCardTrigger>
                        <HoverCardContent className="w-25 text-center text-gray-400 bg-[#181818]">EclipseIDE</HoverCardContent>
                      </HoverCard>

                      <HoverCard>
                        <HoverCardTrigger className="hover:animate-pop cursor-pointer"><SiAndroidstudio /></HoverCardTrigger>
                        <HoverCardContent className="w-30 text-center text-gray-400 bg-[#181818]">Android Studio</HoverCardContent>
                      </HoverCard>

                      <HoverCard>
                        <HoverCardTrigger className="hover:animate-pop cursor-pointer"><SiGit /></HoverCardTrigger>
                        <HoverCardContent className="w-15 text-center text-gray-400 bg-[#181818]">Git</HoverCardContent>
                      </HoverCard>

                      <HoverCard>
                        <HoverCardTrigger className="hover:animate-pop cursor-pointer"><SiGithub /></HoverCardTrigger>
                        <HoverCardContent className="w-20 text-center text-gray-400 bg-[#181818]">Github</HoverCardContent>
                      </HoverCard>

                      <HoverCard>
                        <HoverCardTrigger className="hover:animate-pop cursor-pointer"><SiJsonwebtokens /></HoverCardTrigger>
                        <HoverCardContent className="w-20 text-center text-gray-400 bg-[#181818]">JWT</HoverCardContent>
                      </HoverCard>

                      <HoverCard>
                        <HoverCardTrigger className="hover:animate-pop cursor-pointer"><SiPostman /></HoverCardTrigger>
                        <HoverCardContent className="w-20 text-center text-gray-400 bg-[#181818]">JWT</HoverCardContent>
                      </HoverCard>

                    </div>
                    <p></p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>



              <motion.a
                href="#"
                className="inline-block btn btn-primary mt-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Descargar CV
              </motion.a>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </ScrollAnimation>
  );
}

export default About;
