import { Footer } from "../components/Footer"
import { HeaderServicios } from "../components/HeaderServicios"
import LogoSVG from '../assets/logo.svg';
import Volver from '../assets/volver.svg';
import { MainServicios } from "../components/MainServicios";

export const ReparacionTuberias: React.FC = () =>{
  return(
    <>
        <HeaderServicios
          logo={LogoSVG}
          altLogo="Logo"
          volver="Volver"
          volverImg={Volver}
        />

        <MainServicios
          tituloServicio="Reparacion de Tuberias"
          linkVideo="https://www.youtube.com/embed/XGnEOUYxWxg?si=m2ZY1NZuy250Bxpo"
          parrafo="Con el tiempo, las tuberías en tu hogar u oficina pueden sufrir desgaste, resultando en grietas o incluso roturas. En Castillo Gasfitería, nos especializamos en la reparación de diversos tipos de tuberías, como PEX, PPR, hierro fundido, cobre, PVC hidráulico y sanitario. Nuestros expertos están equipados para abordar problemas de manera específica, brindando soluciones efectivas que restauran la integridad de las tuberías y aseguran el funcionamiento continuo de tus sistemas de agua y desagüe. Garantizamos servicios de calidad que prolongan la vida útil de tus instalaciones hidráulicas."
        />
        <Footer />
      </>
)
}