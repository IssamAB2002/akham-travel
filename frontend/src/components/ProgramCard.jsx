import { Link } from 'react-router-dom';
import './ProgramCard.css';

function ProgramCard({ program }) {
  return (
    <article className="program-card">
      <img
        className="program-card__image"
        src={program.image}
        alt={program.imageAlt}
        loading="lazy"
      />
      <div className="program-card__body">
        <h3>{program.title}</h3>
        <p className="program-card__duration">{program.duration}</p>
        <p>{program.summary}</p>
        <Link to={`/programs/${program.slug}`} className="btn">
          Voir le programme
        </Link>
      </div>
    </article>
  );
}

export default ProgramCard;
