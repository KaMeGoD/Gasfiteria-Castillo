import { Footer } from "../components/Footer"
import { HeaderServicios } from "../components/HeaderServicios"
import LogoSVG from '../assets/logo.svg';
import Volver from '../assets/volver.svg';
import { MainServicios } from "../components/MainServicios";

export const Destapes: React.FC = () => {
  return (
    <>
      <>
        <HeaderServicios 
          logo={LogoSVG} 
          altLogo="Logo" 
          volver="Volver"
          volverImg={Volver}
          />
        
        <MainServicios
          tituloServicio="Destapes"
          linkVideo="https://www.youtube.com/embed/XGnEOUYxWxg?si=m2ZY1NZuy250Bxpo"
          parrafo="Nos especializamos en servicios de destape, atendiendo desagües, cámaras de alcantarillado, lavaplatos, W.C., lavamanos, tinas, ductos de aguas lluvias, piletas, urinarios, y más. Nuestra avanzada tecnología garantiza una limpieza efectiva sin riesgos de daño en tuberías. 
          Complementamos esto con soluciones integrales de plomería, incluyendo inspecciones exhaustivas, mantenimiento preventivo y educación para nuestros clientes. La transparencia en los presupuestos y un compromiso con la funcionalidad a largo plazo son fundamentales en nuestra filosofía de servicio."
        />
        <Footer />
      </>
    </>
  )
}