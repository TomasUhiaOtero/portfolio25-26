import { motion } from 'framer-motion'
import ScrollAnimation from './ScrollAnimation'

function Services() {
  const services = [
    {
      icon: "💻",
      title: 'Desarrollo Web',
      description: 'Sitios web y aplicaciones en línea personalizados, rápidos y seguros, utilizando tecnologías modernas.'
    },
    {
      icon: '🤳',
      title: 'Desarrollo Móvil',
      description: 'Aplicaciones móviles multiplataforma para iOS y Android, garantizando alto rendimiento y una experiencia de usuario fluida.'
    },
    {
      icon: '✏️',
      title: 'Diseño UI/UX ',
      description: 'Interfaces atractivas y funcionales centradas en el usuario, combinando creatividad y usabilidad.'
    },
    {
      icon: '⚛️',
      title: 'Desarrollo Front-End',
      description: 'Interfaces web modernas, dinámicas y responsivas con HTML, CSS, JavaScript y frameworks como React o Vue.'
    },
    {
      icon: '⚙️',
      title: 'Desarrollo Back-End',
      description: 'Soluciones sólidas del lado del servidor con Node.js, Python, JAVA o PHP, optimizando bases de datos y APIs.'
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.25, 0.25, 0, 1],
      },
    }),
  }

  return (
    <ScrollAnimation>
      <section className="section" id="services">
        <ScrollAnimation delay={0.1}>
          <div className="section-title">
            <h2>Mis Servicios</h2>
          </div>
        </ScrollAnimation>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="service-icon">
              <div className="service-icon text-5xl mb-4">{service.icon}</div>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </ScrollAnimation>
  );
}

export default Services;

