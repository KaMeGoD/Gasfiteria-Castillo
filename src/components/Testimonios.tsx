import { CardTestimonios } from "./CardTestimonios"

export const Testimonios: React.FC = () =>{
  return(
    <>
    <h3 className="tituloSecundario">Nuestros Clientes</h3>
    <div className="testimoniosCards">
      <CardTestimonios
        cita="Quiero agradecer caleta el servicio de gasfitería que recibí. Tenía una fuga en la cocina y llamé a esta empresa. El gasfitero llegó a la hora, cachó altiro el drama, lo arregló rápido y el precio, al tiro, justo y bueno. Les recomiendo a ojos cerrados, son seco."
        nombre="Juan García"
        direccion="Cerro Carcel, Valparaiso"
      />
      <CardTestimonios
        cita="Quiero expresar mi gratitud por el excelente servicio de gasfitería que recibí. Tenía una fuga de agua en mi cocina y llamé a esta empresa. El gasfitero llegó puntual, diagnosticó el problema rápidamente y lo reparó con eficiencia. Además, el precio fue justo y asequible. Recomiendo encarecidamente sus servicios a cualquiera que necesite ayuda con problemas de fontanería. ¡Gracias!"
        nombre="Dario Garrido"
        direccion="Nuñoa, R. Metropolitana"
      />
      <CardTestimonios
        cita="Quiero destacar el tremendo servicio de gasfitería que me dieron. Tenía un problema con las cañerías y el muchacho llego al tiro. Fue super seco, arreglo todo rapidito y dejaron todo impecable. Los recomiendo a ojos cerrados. ¡Recomendados!."
        nombre="Emperatriz Valencia"
        direccion="Cerro Placeres, R. Valparaiso"
      />

    </div>
    </>
)
}