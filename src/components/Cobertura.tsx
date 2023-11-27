import Glide from '@glidejs/glide';
import { useEffect } from 'react';

export const Cobertura: React.FC = () => {

  useEffect(() => {
    const glide = new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      perView: 1,
      autoplay: 2500
    });
    glide.mount();
    return () => {
      glide.destroy();
    }
  }, []);

  return (
    <>
      <section>
        <div className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              <li className="glide__slide">
                <div className='cobertura valparaiso'>
                <h3 className="tituloCoberturas">Cobertura</h3>
                <p className="ciudadesCoberturas">Valparaiso</p>
                </div>
              </li>
              <li className="glide__slide">
              <div className='cobertura viña'>
                <h3 className="tituloCoberturas">Cobertura</h3>
                <p className="ciudadesCoberturas">Viña del Mar</p>
                </div>
              </li>
              <li className="glide__slide">
              <div className='cobertura quilpue'>
                <h3 className="tituloCoberturas">Cobertura</h3>
                <p className="ciudadesCoberturas">Quilpue</p>
                </div>
              </li>
              <li className="glide__slide cobertura villa-alemana">
              <div className='cobertura villa-alemana'>
                <h3 className="tituloCoberturas">Cobertura</h3>
                <p className="ciudadesCoberturas">Villa Alemana</p>
                </div>
              </li>
              <li className="glide__slide cobertura Santiago">
              <div className='cobertura santiago'>
                <h3 className="tituloCoberturas">Cobertura</h3>
                <p className="ciudadesCoberturas">Santiago</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </section>
    </>
  )
}