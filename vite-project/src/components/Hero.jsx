import { motion } from 'framer-motion'
import { FaDribbble, FaGithub, FaLinkedinIn, FaMailBulk, FaMailchimp, FaTwitter } from 'react-icons/fa';
import { FaLetterboxd } from 'react-icons/fa6';
import GeneratedText from "../components/GeneratedText"

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  }

  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-text" variants={itemVariants}>

          <h1 className='puesto'><span>Desarrollador FullStack Junior</span></h1>
          <GeneratedText />
          <motion.div className="hero-btns" variants={itemVariants}>
            <a href="#portfolio" className="btn btn-primary">Mis proyectos</a>
            <a href="#contact" className="btn btn-secondary">Contrátame !</a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          variants={imageVariants}
        >
          <img src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="Alex Carter" />

          <motion.div
            className="social-links"
            variants={itemVariants}
          >
            <a href="https://github.com/TomasUhiaOtero"  rel="noopener noreferrer" target='_blank'><FaGithub /></a>
            <a href="https://www.linkedin.com/in/tom%C3%A1s-uh%C3%ADa-otero-b10748345/"  rel="noopener noreferrer" target='_blank'><FaLinkedinIn /></a>
            <a href="#"  rel="noopener noreferrer" target='_blank'><FaMailBulk /></a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;

