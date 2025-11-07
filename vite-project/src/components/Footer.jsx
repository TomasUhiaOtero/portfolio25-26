import { motion } from 'framer-motion'
import ScrollAnimation from './ScrollAnimation'
import { FaGithub, FaLinkedinIn, FaMailBulk } from 'react-icons/fa';

function Footer() {
  const navLinks = [
    { href: '#inicio', text: 'Inicio' },
    { href: '#sobre-mi', text: 'Sobre mí' },
    { href: '#servicios', text: 'Servicios' },
    { href: '#portfolio', text: 'Portfolio' },
    { href: '#contacto', text: 'Contacto' }
  ];

  const socialLinks = [
    { href: '#', icon: <FaGithub /> },
    { href: '#', icon: <FaLinkedinIn /> },
    { href: '#', icon: <FaMailBulk /> },
  ];

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
      },
    }),
  }

  return (
    <ScrollAnimation>
      <footer>
        <motion.div 
          className="footer-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.a 
            href="#" 
            className="footer-logo"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className='flex flex-row justify-between gap-2'>
              <h2>Tomás</h2><span>Uhía</span>
            </div>
          </motion.a>
          
          <motion.ul 
            className="footer-links"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {navLinks.map((link, index) => (
              <motion.li 
                key={index}
                custom={index}
                variants={linkVariants}
                whileHover={{ scale: 1.1 }}
              >
                <a href={link.href}>{link.text}</a>
              </motion.li>
            ))}
          </motion.ul>
          
          <motion.div 
            className="footer-social"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                custom={index}
                variants={linkVariants}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
          
          <motion.p 
            className="copyright"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            © 2025 Tomás Uhía Otero.
          </motion.p>
        </motion.div>
      </footer>
    </ScrollAnimation>
  );
}

export default Footer;

