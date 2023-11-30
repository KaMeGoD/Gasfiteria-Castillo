import { Footer } from "../components/Footer"
import { HeaderServicios } from "../components/HeaderServicios"
import LogoSVG from '../assets/logo.svg';
import Volver from '../assets/volver.svg';
import { MainServicios } from "../components/MainServicios";

export const CambiosGasfiteriayArtefactos: React.FC = () => {
  return (
      <>
        <HeaderServicios
          logo={LogoSVG}
          altLogo="Logo"
          volver="Volver"
          volverImg={Volver}
        />

        <MainServicios
          tituloServicio="Cambios de Gasfiteria y Artefactos"
          linkVideo="https://www.youtube.com/embed/XGnEOUYxWxg?si=m2ZY1NZuy250Bxpo"
          parrafo="¿Está considerando actualizar elementos en su baño o cocina, como grifos, inodoros, tuberías, lavamanos o lavavajillas? En Castillo Gasfitería, nos especializamos en realizar estos trabajos con velocidad, eficacia y transparencia. Contamos con expertos que se encargan de todas las facetas de la actualización, desde la instalación hasta la optimización del rendimiento. Nuestra atención meticulosa y compromiso con la satisfacción del cliente aseguran resultados de calidad, transformando su espacio de manera profesional y eficiente para satisfacer sus necesidades y gustos específicos."
        />
        <Footer />
      </>
  )
}