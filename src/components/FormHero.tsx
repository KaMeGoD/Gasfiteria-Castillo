import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


export const FormHero: React.FC = () => {

  const [name, setName] = useState<string>('');
  const [mail, setMail] = useState<string>('');
  const [numeroTel, setNumeroTel] = useState<string>('');

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_xqp4mm9', 'template_6w4ba3i', form.current!, '11XnO3eU0cd5AwlES')
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
    form.current?.reset();
  };

  const handleOnChageName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/[^A-Za-z]/.test(value)) {
      alert('No se deben ingresar números ni caracteres especiales.');
    } else {
      setName(value);
    }
  };

  const handleBlurMail = () => {
    // Verificar si el correo electrónico contiene un '@'
    if (!mail.includes('@')) {
      alert('La dirección de correo electrónico debe contener "@".');
      setMail("")
    }
  };

  const handleChangeMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
  };

  const handleChangeNumeroTel = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Eliminar cualquier carácter que no sea número
    const numericValue = e.target.value.replace(/\D/g, '');
    setNumeroTel(numericValue);
  };

  return (
    <>
      <section className="formContacto">
        <div className="textContacto">
          <h2>Cotiza con Nosotros</h2>
          <p>¡Si eres empresa cotiza con nosotros!</p>
          <p>Te respondemos a la brevedad</p>
          <p className="numeroTel">+569 65644328</p>
        </div>

        <div className="formularioContacto">
          <h3 className="titulo-form">¡Cuentanos!</h3>
          <form onSubmit={sendEmail} ref={form} className="form">
            <div className="disp-f gp-2 divInput">
              <label>
                <input
                  name="user_name"
                  className="nombre ph-final"
                  type="text"
                  placeholder="Nombre"
                  pattern="[A-Za-z]+"
                  value={name}
                  onChange={handleOnChageName}
                />
              </label>
              <label>
                <input
                  name="user_mail"
                  className="ph-final"
                  type="email"
                  placeholder="Correo Electrónico"
                  value={mail}
                  onChange={handleChangeMail}
                  onBlur={handleBlurMail}
                />
              </label>
            </div>

            <div className="disp-f gp-2 divInput">
              <label htmlFor="region">
                <select id="region" defaultValue="" name="user_ciudad" className="region">
                  <option className='opcion-default' value="" disabled>Región</option>
                  <option value="V. Región">V Región</option>
                  <option value="R. Metropolitana">R. Metropolitana</option>
                </select>
              </label>

              <div className="disp-f divTel">
                <p className="cod-num">+56</p>
                <input
                  name="user_cel"
                  className="ph-final"
                  type="tel"
                  maxLength={9}
                  placeholder="Teléfono"
                  value={numeroTel}
                  onChange={handleChangeNumeroTel}
                />
              </div>
            </div>

            <label>
              <textarea name="message" />
            </label>

            <div className="disp-f btn">
              <input className="btnSubmit" type="submit" value="¡Quiero Cotizar!" />
            </div>
          </form>
        </div>
      </section>
    </>
  )
}