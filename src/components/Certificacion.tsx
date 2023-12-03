interface PropsCertificacion {
  logoCertificacion: string;
  qrCertificacion: string;
  textoCertificacion: string;
}

export const Certificacion: React.FC<PropsCertificacion> = ({ logoCertificacion, qrCertificacion, textoCertificacion }) => {
  return (
    <>
      <section className="certificacion">
        <h3 className="tituloSecundario tituloCertificacion">Certificación</h3>
        <div className="certificacionCuerpo">
          <div className="selloyQR">
            <img width="1280" height="720" src={logoCertificacion} alt="logo Certificacion" />
            <img width="1280" height="720" src={qrCertificacion} alt="qr Certificacion" />
          </div>
          <div className="textoCertificacion">
            <p>{textoCertificacion}</p>
          </div>
        </div>
      </section>

    </>
  )
}