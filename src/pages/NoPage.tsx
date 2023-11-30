import { Footer } from "../components/Footer"
import { HeaderServicios } from "../components/HeaderServicios"
import LogoSVG from '../assets/logo.svg';
import Volver from '../assets/volver.svg';

export const NoPage: React.FC = () => {
  return (
    <>
      <>
        <HeaderServicios 
          logo={LogoSVG} 
          altLogo="Logo" 
          volver="Volver"
          volverImg={Volver}
          />
        
        No definido
        <Footer />
      </>
    </>
  )
}