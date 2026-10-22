import { Link, useParams } from 'react-router-dom';
import programs from '../data/programs';
import './ProgramDetail.css';

function ProgramDetail() {
  const { slug } = useParams();
  const program = programs.find((item) => item.slug === slug);

  if (!program) {
    return (
      <div className="section">
        <div className="container">
          <h1>Programme introuvable</h1>
          <p>Ce programme n'existe pas ou a été retiré.</p>
          <Link to="/programs" className="btn">
            Retour aux programmes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="section program-detail">
      <div className="container">
        <Link to="/programs" className="program-detail__back">
          ← Tous les programmes
        </Link>
        <h1>{program.title}</h1>
        <p className="program-detail__duration">{program.duration}</p>
        <img
          className="program-detail__image"
          src={program.image}
          alt={program.imageAlt}
        />
        <p>{program.summary}</p>
        <h2>Points forts</h2>
        <ul>
          {program.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <Link to="/contact" className="btn">
          Demander un devis
        </Link>
      </div>
    </div>
  );
}

export default ProgramDetail;
