import { Footer } from "../components/Footer"
import { HeaderServicios } from "../components/HeaderServicios"
import LogoSVG from '../assets/logo.svg';
import Volver from '../assets/volver.svg';
import { MainServicios } from "../components/MainServicios";

export const DeteccionFugas: React.FC = () =>{
  return(
    <>
        <HeaderServicios
          logo={LogoSVG}
          altLogo="Logo"
          volver="Volver"
          volverImg={Volver}
        />

        <MainServicios
          tituloServicio="Deteccion de Fugas"
          linkVideo="https://www.youtube.com/embed/LBOiyVYb-hc?si=Og7_KiMaRjaDvHPi "
          parrafo="
          Si enfrentas problemas de fugas de agua en tuberías, sanitarios u otros dispositivos, en Castillo Gasfitería contamos con técnicos altamente capacitados y tecnología de vanguardia para abordar los desafíos de identificación y reparación de filtraciones. Nuestro equipo especializado garantiza la detección precisa de fugas, y utilizamos tecnología avanzada para resolver eficientemente cualquier problema. Con un enfoque profesional, nos aseguramos de que tu sistema de plomería esté libre de fugas y funcione de manera óptima, brindándote tranquilidad y protegiendo tu hogar o negocio contra daños mayores."
        />
        <Footer />
      </>
)
}