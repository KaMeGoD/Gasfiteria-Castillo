import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import LogoSVG from '../assets/logo.svg';
import WSPFlotante from '../assets/pngwing.webp';

export const NoPage: React.FC = () => {
  return (
    <>
      <a className="wsp-flotante" href='https://wa.me/56965644328' target="_blank">
        <img width="1280" height="720" src={WSPFlotante} alt="whattsapp" />
      </a>
      indefinido
      <Header
        logo={LogoSVG}
        altLogo="Logo"
        nav1="Inicio"
        nav2="Servicios"
        nav3="Testimonios"
      />
      
      <Footer />
    </>
  )
}