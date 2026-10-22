import hotelImage from '../assets/images/hotel-toub.jpg';
import './Hotel.css';

function Hotel() {
  return (
    <div className="section hotel">
      <div className="container">
        <h1>Notre hôtel partenaire</h1>
        <img
          className="hotel__image"
          src={hotelImage}
          alt="Tour traditionnelle en toub à Beni Isguen"
        />
        <p>
          Au cœur de la Vallée du M'Zab, notre hôtel partenaire allie
          l'architecture traditionnelle en toub aux conforts modernes. Chaque
          chambre s'ouvre sur un patio ou une terrasse offrant une vue sur les
          ksour environnants.
        </p>
        <h2>Équipements</h2>
        <ul>
          <li>Chambres climatisées avec vue sur la palmeraie</li>
          <li>Restaurant proposant une cuisine locale</li>
          <li>Patio intérieur et terrasse panoramique</li>
          <li>Accueil et guides parlant français</li>
        </ul>
      </div>
    </div>
  );
}

export default Hotel;
