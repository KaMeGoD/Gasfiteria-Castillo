import { CardServicios } from "./CardServicios";
import { Link } from "react-router-dom";
// imágenes
import WC from "../assets/Servicios/wc.svg";
import Grifo from "../assets/Servicios/grifo-de-agua-180x180-1.svg";
import Fugas from "../assets/Servicios/fuga.svg";
import Hidrojet from "../assets/Servicios/tuberia-180x180-1.svg";
import Ductoscopia from "../assets/Servicios/detector-de-fugas-180x180-1.svg";
import Tubos from "../assets/Servicios/tuberia.svg";
import Atencion from "../assets/Servicios/24-7-180x180-1.svg";
import Plomero from "../assets/Servicios/plomero-180x180-1.svg";




export const Servicios: React.FC = () => {
  return (
    <>
      <h2 className="tituloSecundario">Servicios</h2>
      <div className="servicios">
        <Link to="/destapes">
          <CardServicios
            imgCard={WC}
            altImgCard="wc"
            tituloCard="Destapes"
            parrafoCard="Realizamos destapes en desagües, cámaras de alcantarillado tanto verticales como horizontales en edificios. También ofrecemos servicios de destape de lavaplatos, W.C., lavamanos, tinas, ductos de aguas lluvias, piletas, urinarios y mucho más. Nuestra avanzada tecnología no provoca daños en tuberías ni desagües, asegurando una limpieza sin riesgos."
          />
        </Link>
        <Link to="/cambiosGasfiteriayArtefacto">
          <CardServicios
            imgCard={Grifo}
            altImgCard="grifo"
            tituloCard="Cambios de Grifería y Artefactos"
            parrafoCard="Desea actualizar algún elemento en su baño o cocina, como grifos, el inodoro, tuberías, lavamanos, lavavajillas u otros dispositivos? En Castillo Gasfitería somos expertos en realizar estos tipos de trabajos de forma veloz, eficaz y transparente."
          />
        </Link>

        <Link to="/reparacionTuberias">
          <CardServicios
            imgCard={Tubos}
            altImgCard="tubos"
            tituloCard="Reparacion de Tuberias"
            parrafoCard="A lo largo del tiempo, las tuberías en su hogar u oficina pueden experimentar desgaste y fatiga, lo que puede llevar a grietas o incluso roturas. En Castillo Gasfitería, nos especializamos en la reparación de una amplia gama de tuberías de agua y desagüe, incluyendo tipos como PEX, PPR, hierro fundido, cobre, PVC hidráulico y sanitario."
          />
        </Link>

        <Link to="/deteccionFugas">
          <CardServicios
            imgCard={Fugas}
            altImgCard="fugas"
            tituloCard="Deteccion de Fugas"
            parrafoCard="¿Estás experimentando fugas de agua en tus tuberías, sanitarios u otros dispositivos? En Castillo Gasfitería, disponemos de técnicos altamente capacitados y la tecnología de vanguardia para identificar las filtraciones y fugas de agua más desafiantes."
          />
        </Link>

        <Link to="/hidrojet">
          <CardServicios
            imgCard={Hidrojet}
            altImgCard="hidrojet"
            tituloCard="Hidrojet"
            parrafoCard="En Castillo Gasfiteria, empleamos el sistema Hidrojet para llevar a cabo la limpieza tanto de conductos verticales como horizontales en edificios y comunidades. Este sistema, conocido también como hidrolavadoras o hidrolimpiadoras, presenta múltiples aplicaciones, siendo su uso principal la limpieza de tuberías, cañerías, drenajes y sistemas de alcantarillado."
          />
        </Link>

        <Link to="/videoDuscopia">
          <CardServicios
            imgCard={Ductoscopia}
            altImgCard="VideoInspección y Ductoscopía"
            tituloCard="VideoInspección y Ductoscopía"
            parrafoCard="Mediante el uso de cámaras de inspección por video, podemos determinar con precisión el estado actual de una tubería y la naturaleza de la reparación requerida. Esta tecnología nos permite optimizar el tiempo y reducir los costos."
          />
        </Link>

        <Link to="/atencion">
          <CardServicios
            imgCard={Atencion}
            altImgCard="24-7"
            tituloCard="Atención de Emergencias 24/7"
            parrafoCard="Estamos disponibles las 24 horas del día, los 7 días de la semana, durante todo el año, para atender cualquier urgencia que pueda surgir en su fontanería, como roturas de cañerías, fugas de agua, cambio de llaves, reparación de W.C., duchas, lavaplatos y grifería en general. No dude en ponerse en contacto con nosotros."
          />
        </Link>
        
        <Link to="/otrosServicios">
          <CardServicios
            imgCard={Plomero}
            altImgCard="fontanero"
            tituloCard="Otros Servicios de Gasfitería"
            parrafoCard="En caso de enfrentar una emergencia o cualquier otro problema, no dude en comunicarse con nosotros a través de correo electrónico, WhatsApp o una llamada directa. Por favor, proporcione los detalles necesarios para que podamos brindarle asistencia."
          />
        </Link>
      </div>
    </>
  )
}