import Comillas from '../assets/comillas.svg';

interface PropsCardTestimonio{
  cita: string;
  nombre:string;
  direccion: string;
}
export const CardTestimonios: React.FC<PropsCardTestimonio> = ({cita, nombre , direccion}) => {
  return (
    <>
      <div className="cardTestimonio">
        <img width="1280" height="720" className='imgCardTestimonio' src={Comillas} alt="comillas" />
        <q>{cita}</q>
        <div className='citasCardTetimonios'>
          <p>{nombre}</p>
          <p>{direccion}</p>
        </div>

      </div>
    </>
  )
}