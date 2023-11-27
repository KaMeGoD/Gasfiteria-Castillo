interface PropsCardServicios {
  imgCard: string;
  altImgCard: string;
  tituloCard: string;
  parrafoCard: string;
}


export const CardServicios: React.FC<PropsCardServicios> = ({ imgCard, altImgCard, tituloCard, parrafoCard }) => {
  return (
    <>
      <section className="cardServicios hvr-grow">
        <div className="card">
          <img width="287" height="160" className="imgCard" src={imgCard} alt={altImgCard} />
          <h3 className="tituloCard">{tituloCard}</h3>
          <p className="parrafoCard">{parrafoCard}</p>
        </div>
        <hr className="barraCard" />
      </section>
    </>
  )
}