import { Header } from "../components/Header"
import LogoSVG from '../assets/logo.svg';
import LogoMovil from '../assets/logo-footer.png';
import WSPFlotante from '../assets/pngwing.webp';
import { Contacto } from "../components/Contacto";
import { Servicios } from "../components/Servicios";
import { Cobertura } from "../components/Cobertura";
import { Testimonios } from "../components/Testimonios";
import { Footer } from "../components/Footer";

export const Home: React.FC = () => {
  return (
    <>
      <div className="wsp-flotante">
        <a href='https://wa.me/56965644328' target="_blank">
          <img width="1280" height="720" src={WSPFlotante} alt="whattsapp" />
        </a>
      </div>

      <Header
        logo={LogoSVG}
        altLogo="Logo"
        nav1="Inicio"
        nav2="Servicios"
        nav3="Testimonios"
        logoMovil={LogoMovil}
      />
      <Contacto />

      <main>
        <hr id="servicios" />
        <Servicios />
        <Cobertura />
        <hr id="testimonios" />
        <Testimonios />
      </main>
      <Footer />
    </>
  )
}