import { motion } from 'framer-motion'
import ScrollAnimation from './ScrollAnimation'
import { HoverCard, HoverCardTrigger, HoverCardContent } from "../components/ui/hover-card"
import { useState } from 'react'

function Contact() {
  const [copied, setCopied] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  const contactInfo = [
    {
      icon: "📍",
      title: "Ubicación",
      detail: "Pontevedra, España",
      copyable: false,
    },
    {
      icon: "📧",
      title: "Email",
      detail: "uhiaoterotomas@gmail.com",
      copyable: true,
    },
    {
      icon: "📱",
      title: "Teléfono",
      detail: "+34 698107375",
      copyable: true,
    },
  ];

  const handleCopy = async (text, title, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(title);
      setOpenIndex(index); // 👈 abre el hovercard correspondiente

      // Oculta después de 2s
      setTimeout(() => {
        setCopied(null);
        setOpenIndex(null);
      }, 2000);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <ScrollAnimation>
      <section className="section" id="contact">
        <ScrollAnimation delay={0.1}>
          <div className="section-title">
            <h2>Contáctame!</h2>
          </div>
        </ScrollAnimation>

        <div className="contact-container">
          <motion.div
            className="contact-info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {contactInfo.map((info, index) => (
              <HoverCard
                key={index}
                open={openIndex === index} // 👈 controla apertura manual
                onOpenChange={(open) => setOpenIndex(open ? index : null)}
              >
                <HoverCardTrigger asChild>
                  <motion.div
                    className={`contact-card ${info.copyable ? "cursor-pointer" : ""} text-white`}
                    custom={index}
                    variants={cardVariants}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    onClick={() =>
                      info.copyable && handleCopy(info.detail, info.title, index)
                    }
                  >
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-details">
                      <h3>{info.title}</h3>
                      <p className="text-white">{info.detail}</p>
                    </div>
                  </motion.div>
                </HoverCardTrigger>

                {info.copyable && (
                  <HoverCardContent
                    side="top"
                    align="center"
                    className="w-40 px-4 py-2 text-md text-white text-center bg-[#181818] border border-gray-700 rounded-lg shadow-md"
                  >
                    {copied === info.title ? "✅ Copiado!" : "Clic para copiar"}
                  </HoverCardContent>
                )}
              </HoverCard>
            ))}
          </motion.div>
        </div>
      </section>
    </ScrollAnimation>
  );
}

export default Contact;
