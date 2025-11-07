function Header() {
  return (
    <header id="header" className="animate-slide-in-bottom animate-bezier-back-in-out">
      <a href="#" className="logo">Tomás<span>Uhía</span></a>
      
      <ul className="nav-links">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      
      <div className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
}

export default Header;

