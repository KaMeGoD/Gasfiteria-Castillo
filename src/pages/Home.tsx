import { Header } from "../components/Header"
import { Contacto } from "../components/Contacto";
import { Servicios } from "../components/Servicios";
import { Cobertura } from "../components/Cobertura";
import { Testimonios } from "../components/Testimonios";
import { Footer } from "../components/Footer";

import LogoSVG from '../assets/logo.svg';
import LogoMovil from '../assets/logo-footer.png';
import WSPFlotante from '../assets/pngwing.webp';
import QrCertificado from '../assets/CastilloferreteriaQR.png';
import LogoSec from '../assets/logo-sec-250x250-1.png';
import { Certificacion } from "../components/Certificacion";

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
        <Certificacion
          logoCertificacion={LogoSec}
          qrCertificacion={QrCertificado}
          textoCertificacion="Nuestra empresa cuenta con la certificación del sello SEC, asegurándole a usted, nuestro valioso cliente, que su problema será abordado por profesionales expertos y conocedores. Esta certificación brinda la garantía de que su situación está en manos competentes y seguras. Con ello, puede confiar plenamente en que su problema será tratado con la máxima competencia y conocimiento, otorgándole la tranquilidad de que está eligiendo a profesionales comprometidos y calificados para resolver sus necesidades de manera efectiva."
        />

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