import './Contact.css';

const WHATSAPP_NUMBER = '+213799665571';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^\d]/g, '')}`;

function Contact() {
  return (
    <div className="section">
      <div className="container contact-page">
        <h1>Contactez-nous</h1>

        <div className="contact-page__block">
          <p>
            Bienvenue chez Akham Travel ! Nous serions ravis de vous
            accompagner dans la découverte du Sahara et de la Vallée du
            M'Zab.
          </p>
        </div>

        <div className="contact-page__block">
          <address>
            <p>Ghardaïa, Algérie</p>
            <p>
              <a href="mailto:riadtak03@gmail.com">riadtak03@gmail.com</a>
            </p>
          </address>
        </div>

        <div className="contact-page__block contact-page__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13465.927220672173!2d3.66266369384301!3d32.45980255684589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x126428b69a115f1f%3A0x9eb92ff8b1b9fad6!2sMaison%20traditionnelle%20Akham!5e0!3m2!1sde!2sdz!4v1792659188720!5m2!1sde!2sdz"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Localisation Akham Travel"
          />
        </div>

        <div className="contact-page__block">
          <p>
            Pour réserver un séjour ou poser une question sur nos programmes,
            contactez-nous directement sur WhatsApp :
          </p>
          <a
            href={WHATSAPP_LINK}
            className="btn contact-page__whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp : {WHATSAPP_NUMBER}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
