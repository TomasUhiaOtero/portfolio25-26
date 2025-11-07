function Header() {
  return (
    <header id="header" className="animate-slide-in-bottom animate-bezier-back-in-out">
      <a href="#" className="logo">Tomás<span>Uhía</span></a>
      
      <ul className="nav-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#sobre-mi">Sobre mí</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contacto">Contacto</a></li>
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

