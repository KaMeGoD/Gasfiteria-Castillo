
import { useEffect } from "react";

interface PropsHeader {
  logo: string;
  altLogo: string;
  nav1: string;
  nav2: string;
  nav3: string;
}

export const Header: React.FC<PropsHeader> = ({ logo, altLogo, nav1, nav2, nav3 }) => {

  useEffect(() => {
    const navegacionFija = () => {
      const barra = document.querySelector('#header') as HTMLElement | null;
      const formContacto = document.querySelector('.formContacto') as HTMLElement | null;
      const body = document.querySelector('body') as HTMLElement | null;
    
      const handleScroll = () => {
        if (formContacto && formContacto.getBoundingClientRect().bottom! < 0) {
          barra?.classList.add('fijo');
          body?.classList.add('body-scroll');
        } else {
          barra?.classList.remove('fijo');
          body?.classList.remove('body-scroll');
        }
      };
    
      window.addEventListener('scroll', handleScroll);
    
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    };

    const scrollNav = () => {
      const enlaces = document.querySelectorAll('.nav ul li a');

      enlaces.forEach((enlace) => {
        enlace.addEventListener('click', (e) => {
          e.preventDefault();
          const seccionScroll = enlace.getAttribute('href');
          const seccion = document.querySelector(seccionScroll!);
          seccion?.scrollIntoView({ behavior: 'smooth' });
        });
      });
    };
    navegacionFija();
    scrollNav();
  }, []);

  const handleOnClickMenuHamburguesa = (): void => {
    const button = document.querySelector('button') as HTMLButtonElement | null;
    const navMovil = document.querySelector('.navegacion-movil') as HTMLDivElement | null;

    if (button) {
      button.classList.toggle('activo');
      navMovil?.classList.toggle('nav__movil-activo');
    }



  };

  return (
    <>
      <header id="header">
        <div className="logo" id="inicio">
          <img className="logo"  src={logo} alt={altLogo} loading="lazy"/>
        </div>

        <button onClick={handleOnClickMenuHamburguesa} className="menu-hamburguesa">
          <span className={`hamburgesa1`}></span>
          <span className={`hamburgesa2`}></span>
          <span className={`hamburgesa3`}></span>
        </button>

        <div className="navegacion-movil">
          <div className="logo logo_nav-movil" id="inicio">
            <img className="logo" src={logo} alt={altLogo} />
          </div>
          <nav className="nav-movil">
            <ul>
              <li><a href="#inicio" className="hvr-bounce-to-right">{nav1}</a></li>
              <li><a href="#servicios" className="hvr-bounce-to-right">{nav2}</a></li>
              <li><a href="#testimonios" className="hvr-bounce-to-right">{nav3}</a></li>
            </ul>
          </nav>
          <div className="box-btncierre">
            <button aria-label="hamburgesa" onClick={handleOnClickMenuHamburguesa} className="btn-cierre-menu hvr-shrink">X</button>
          </div>
        </div>

        <nav className="nav">
          <ul>
            <li><a href="#inicio" className="hvr-underline-from-center">{nav1}</a></li>
            <li><a href="#servicios" className="hvr-underline-from-center">{nav2}</a></li>
            <li><a href="#testimonios" className="hvr-underline-from-center">{nav3}</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}