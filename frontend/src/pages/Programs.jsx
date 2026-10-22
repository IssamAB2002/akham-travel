import ProgramCard from '../components/ProgramCard';
import programs from '../data/programs';
import './Programs.css';

function Programs() {
  return (
    <div className="section">
      <div className="container">
        <h1>Nos programmes</h1>
        <p className="programs-intro">
          Des circuits conçus pour découvrir le Sahara et la Vallée du M'Zab,
          de quelques jours à une semaine.
        </p>
        <div className="programs-grid">
          {programs.map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Programs;
