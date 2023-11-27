import { Link } from "react-router-dom";

interface PropsHeader {
  logo: string;
  altLogo: string;
  volver: string;
  volverImg: string;
}

export const HeaderServicios: React.FC<PropsHeader> = ({ logo, altLogo, volver, volverImg }) => {

  return (
    <>
      <header id="header header-services">
        <div className="logo" id="inicio">
          <img className="logo"  src={logo} alt={altLogo} loading="lazy"/>
        </div>

        <div>
          <Link to="/home">
          <nav className="nav">
          <ul>
            <li><a className="hvr-underline-from-center volverPalabra">{volver}</a></li>
            <li><img className="volverImagen" src={volverImg} alt="volver" /></li>
          </ul>
        </nav>
          </Link>
        </div>
      </header>
    </>
  )
}