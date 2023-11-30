import { Footer } from "../components/Footer"
import { HeaderServicios } from "../components/HeaderServicios"
import LogoSVG from '../assets/logo.svg';
import Volver from '../assets/volver.svg';
import { MainServicios } from "../components/MainServicios";

export const Hydrojet: React.FC = () =>{
  return(
    <>
        <HeaderServicios
          logo={LogoSVG}
          altLogo="Logo"
          volver="Volver"
          volverImg={Volver}
        />

        <MainServicios
          tituloServicio="Hidrojet"
          linkVideo="https://www.youtube.com/embed/UV4iEWQGFuk?si=JNN0nNzZKWdScsMC"
          parrafo="
          En Castillo Gasfitería, nos destacamos por la implementación del sistema Hidrojet, una tecnología eficiente para la limpieza de conductos tanto verticales como horizontales en edificios y comunidades. Este sistema, conocido como hidrolavadoras o hidrolimpiadoras, ofrece diversas aplicaciones, siendo su función principal la limpieza profunda de tuberías, cañerías, drenajes y sistemas de alcantarillado. Su potencia y versatilidad nos permiten abordar con eficacia una amplia gama de obstrucciones y residuos, garantizando un funcionamiento óptimo de los sistemas hidráulicos y sanitarios en tu entorno residencial o comercial."
        />
        <Footer />
      </>
)
}