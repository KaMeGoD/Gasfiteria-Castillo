import { Footer } from "../components/Footer"
import { HeaderServicios } from "../components/HeaderServicios"
import LogoSVG from '../assets/logo.svg';
import Volver from '../assets/volver.svg';
import { MainServicios } from "../components/MainServicios";

export const VideoDuscopia: React.FC = () => {
  return (
    <>
        <HeaderServicios 
          logo={LogoSVG} 
          altLogo="Logo" 
          volver="Volver"
          volverImg={Volver}
          />
        
        <MainServicios
          tituloServicio="Videoinspeccion y Ductoscopia"
          linkVideo="https://www.youtube.com/embed/ZmbwPqwtbuA?si=N4pA6FvYVtC1o2T6"
            parrafo="Empleando cámaras de inspección por video, logramos evaluar con precisión el estado actual de las tuberías y la naturaleza de las reparaciones necesarias. Esta tecnología innovadora no solo agiliza el proceso, sino que también optimiza el tiempo al ofrecer una visión detallada del interior de las tuberías, permitiéndonos identificar problemas de manera rápida y precisa. Como resultado, podemos abordar las reparaciones de manera más eficiente, reduciendo los costos asociados y proporcionando soluciones específicas para mantener el funcionamiento óptimo de tus sistemas hidráulicos."
        />
        <Footer />
      </>
  )
}