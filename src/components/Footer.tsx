import Logo from '../assets/logo-footer.png';
import ArrowDown from '../assets/arrowdown.svg';
import Email from '../assets/mail.png';
import Phone from '../assets/phone.png';
import Wsp from '../assets/wsp.png';



export const Footer: React.FC = () => {
  return (
    <>
      <footer className='footer'>
        <div>
          <img className='logoFooter' width="1280" height="720" src={Logo} alt="logo" />
        </div>

        <nav>
          <p>Acceso Rapido</p>
          <ul>
            <li><img width="1280" height="720" className='arrowDwon' src={ArrowDown} alt="arrow" /><a href="#inicio">Inicio</a></li>
            <li><img width="1280" height="720" className='arrowDwon' src={ArrowDown} alt="arrow" /><a href="#servicios">Servicios</a></li>
            <li><img width="1280" height="720" className='arrowDwon' src={ArrowDown} alt="arrow" /><a href="#testimonios">Testimonios</a></li>
          </ul>
        </nav>

        <div className='horariosyRRSS'>
          <div className='horarios'>
            <p>Horarios:</p>
            <p className='horario'>Lunes a Domingo 24/7</p>
          </div>
          <div className='RRSS'>
            {/* <p>Redes Sociales</p> */}
            {/* <img src="" alt="wsp" /> 
            <img src="" alt="mail" /> */}
          </div>
        </div>

        <div className='contacto'>
          <p>Contacto</p>
          <div>
            <div className='icoContacto'><img width="1280" height="720" src={Email} alt="mail" /><p>castillogasfiteriacl@gmail.com</p></div>
            <div className='icoContacto'><img width="1280" height="720" src={Phone} alt="phone" /><p>(+56)965644328</p></div>
            <div className='icoContacto'><img width="1280" height="720" src={Wsp} alt="wsp" /><p>(+56)965644328</p></div>
          </div>
        </div>
      </footer>
      <div className='piefinal'><p>Copyright © 2023 Castillo Gasfiteria, Creado y Desarrollado por <a className='jcdevs' target="_blank" href="https://portafolio-jcdev.netlify.app/">JCDEVS.</a></p></div>
    </>
  )
}