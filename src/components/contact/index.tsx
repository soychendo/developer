import React from "react";
import { Bartitle } from "@components/Bartitle";
import TelegramImage from "@assets/telegram.svg";
import { Form } from "./Form";

const Contact = (): JSX.Element => {
  const contact = "Contacto";

  return(
    <div className="container-menu">
     <Bartitle textBar={contact} />
     <div className="grid-menu">
         <div className="col-md-12 pd-l">
            <div className="container-contact">
              <span>Tienes un proyecto en mente, y no sabes por dónde empezar?<br />
              Puedes escribirme directamente:<br /></span><br />
              <span className="correo"><i className="fas fa-envelope icono"></i> chendoec@live.com<br /></span>
              <div className="cont-text">
                <div className="cont-svg">
                  <img src={TelegramImage} className="img-svg" alt="svg-telegram" />
                </div>
                <a href="https://t.me/soychendo" target="_blank">@soychendo</a>
              </div>
              <p>Sientete libre de preguntar cuanto necesites. Te contestaré lo antes posible.</p>
            </div>
         </div>
         <div className="col-md-12 pd-l">
            <div className="cont-form">
              <Form />
            </div>
         </div>
     </div>
    </div>
  );
}

export default Contact;
