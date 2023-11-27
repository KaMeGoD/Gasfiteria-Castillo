import { FormHero } from "./FormHero"
import { Hero } from "./Hero"

export const Contacto: React.FC = () => {
  return (
    <>
      <Hero 
        tituloHero="Servicios de Gasfiteria"
        textoHero="24 / 7"
      />
      <FormHero />
    </>
  )
}