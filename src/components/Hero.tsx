import Telefono from '../assets/call-outline.svg'
import Video from '../assets/video hero.mp4'

interface PropsHero {
  tituloHero: string;
  textoHero: string;
}

export const Hero: React.FC<PropsHero> = ({ tituloHero, textoHero }) => {
  return (
    <>
      <div className="hero">
        <video autoPlay muted loop playsInline>
          <source src={Video} typeof='video/mp4' />
          Tu navegador no soporta el elemento de video.
        </video>
        <div className='hero_texto'>
          <h1>{tituloHero}</h1>
          <p>{textoHero}</p>
          <a href='https://wa.me/56965644328' target="_blank" className='btnHero hvr-grow-shadow '>
            <img width="1280" height="720" className='telHero' src={Telefono} alt="teléfono" />
            <p>¡Escríbenos!</p>
          </a>
        </div>

      </div>
    </>
  )
}