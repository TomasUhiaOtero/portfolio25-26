import { motion } from 'framer-motion'
import ScrollAnimation from './ScrollAnimation'

function Portfolio() {
  const projects = [
    {
      id: 1,
      category: 'Todos, Front-End, Back-end',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'Asistente-Estudio-IA',
      description: 'Crea tests, flashcards o resumenes interactivos a partir de OpenAPI.',
      link: ""
    },
    {
      id: 2,
      category: 'Todos, Front-End, Back-end',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'Kairós',
      description: 'Web dedicada a la gestión de tareas y eventos utilizando APIs locales y externas.',
      link: ""
    },
    {
      id: 3,
      category: 'Todos, Front-End, Back-end',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      title: 'TopMusic',
      description: 'Web que muestra tops musicales y permite descubir nuevos generos musicales.',
      link: ""
    },
    {
      id: 4,
      category: 'Todos, Back-End',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1636&q=80',
      title: 'API REST Star Wars',
      description: 'Creación de la BBDD, Endpoints y pruebas con Postman',
      link: ""
    },
    {
      id: 5,
      category: 'Todos, Front-End',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'Este portfolio',
      description: '',
      link: ""
    },
    {
      id: 6,
      category: 'Todos, Front-End',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      title: 'Conversor de Monedas',
      description: 'Design system for web applications',
      link: ""
    },
    {
      id: 7,
      category: 'Todos, Front-End',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      title: '3 en Raya Interactivo',
      description: 'Design system for web applications',
      link: ""
    },
  ];

  const filters = ['Todos', 'Front-End', 'Back-End'];

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.25, 0.25, 0, 1],
      },
    }),
  }

  return (
    <ScrollAnimation>
      <section className="section" id="portfolio">
        <ScrollAnimation delay={0.1}>
          <div className="section-title">
            <h2>Mi Portfolio</h2>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.2}>
          <div className="portfolio-filter">
            {filters.map((filter) => (
              <button 
                key={filter} 
                className={`filter-btn ${filter === 'Todos' ? 'active' : ''}`} 
                data-filter={filter}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </ScrollAnimation>
        
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="portfolio-item"
              data-category={project.category}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <img src={project.image} alt={project.title} className="portfolio-img" />
              <div className="portfolio-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </ScrollAnimation>
  );
}

export default Portfolio;

