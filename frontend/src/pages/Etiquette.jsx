import etiquetteImage from '../assets/images/etiquette-market.jpg';
import './Etiquette.css';

const tips = [
  {
    title: 'Tenue vestimentaire',
    body: 'Privilégiez des vêtements couvrants et légers, par respect pour les traditions locales, en particulier dans les ksour et les lieux de culte.',
  },
  {
    title: 'Photographie',
    body: "Demandez toujours l'autorisation avant de photographier des habitants, en particulier les femmes.",
  },
  {
    title: 'Visite des ksour',
    body: 'Certains quartiers de Beni Isguen sont fermés aux visiteurs après une certaine heure ou pendant la prière ; suivez les indications de votre guide.',
  },
  {
    title: 'Hospitalité',
    body: 'Le thé ou le café est souvent offert en signe de bienvenue ; il est de coutume de l\'accepter.',
  },
];

function Etiquette() {
  return (
    <div className="section">
      <div className="container">
        <h1>Étiquette et coutumes</h1>
        <img
          className="etiquette-image"
          src={etiquetteImage}
          alt="Le marché traditionnel de la place Lala Achou à Beni Isguen"
        />
        <p className="etiquette-intro">
          Quelques repères pour voyager dans le respect des traditions locales.
        </p>
        <div className="etiquette-list">
          {tips.map((tip) => (
            <div key={tip.title} className="etiquette-item">
              <h3>{tip.title}</h3>
              <p>{tip.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Etiquette;
