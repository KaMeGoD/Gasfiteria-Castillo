
interface PropsMainServicios {
  tituloServicio: string;
  linkVideo: string;
  parrafo: string;
}

export const MainServicios: React.FC<PropsMainServicios> = ({ tituloServicio, linkVideo, parrafo }) => {
  return (
    <>
      <div className="mainServicios">
        <h3>{tituloServicio}</h3>
        <div className="mainContenido">
          <iframe
            width="560"
            height="350"
            src={linkVideo}
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            >
          </iframe>
          <p>{parrafo}</p>
        </div>

      </div>
    </>
  )
}