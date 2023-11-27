import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import LogoSVG from '../assets/logo.svg';
import WSPFlotante from '../assets/pngwing.webp';
import { MainServicios } from "../components/MainServicios";

export const Atencion: React.FC = () =>{
  return(
    <>
      <a className="wsp-flotante" href='https://wa.me/56965644328' target="_blank">
        <img width="1280" height="720" src={WSPFlotante} alt="whattsapp" />
      </a>
      <Header
        logo={LogoSVG}
        altLogo="Logo"
        nav1="Inicio"
        nav2="Servicios"
        nav3="Testimonios"
      />
      <MainServicios 
        tituloServicio="Servicios 24 / 7"
        linkVideo="https://www.youtube.com/embed/KkU7_ZmvdlA?si=lF0A3emx1WLNS0to"
        parrafo=""
      />
      <Footer/>
    </>
)
}