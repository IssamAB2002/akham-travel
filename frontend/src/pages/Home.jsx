import { Link } from 'react-router-dom';
import ProgramCard from '../components/ProgramCard';
import programs from '../data/programs';
import heroImage from '../assets/images/hero-ghardaia.jpg';
import storyImage from '../assets/images/story-el-atteuf.jpg';
import './Home.css';

function Home() {
  return (
    <div>
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="container hero__inner">
          <h1>Akham Travel</h1>
          <p className="hero__tagline">
            Voyages authentiques au cœur du Sahara et de la Vallée du M'Zab.
          </p>
          <Link to="/programs" className="btn">
            Découvrir nos programmes
          </Link>
        </div>
      </section>

      <section className="section story">
        <div className="container story__inner">
          <img
            className="story__image"
            src={storyImage}
            alt="Le ksar d'El-Atteuf surplombant la palmeraie de la Vallée du M'Zab"
            loading="lazy"
          />
          <div className="story__text">
            <h2>Notre histoire</h2>
            <p>
              Akham Travel est né de l'amour du patrimoine algérien : les
              ksour millénaires de Ghardaïa, les dunes infinies du Grand Erg
              et les oasis cachées du Sahara. Nous concevons des circuits à
              taille humaine, pensés pour faire découvrir ces lieux dans le
              respect de leurs habitants et de leurs traditions.
            </p>
          </div>
        </div>
      </section>

      <section className="section programs-preview">
        <div className="container">
          <h2>Nos programmes</h2>
          <div className="programs-preview__grid">
            {programs.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="container cta__inner">
          <h2>Prêt pour l'aventure ?</h2>
          <p>Contactez-nous pour organiser votre prochain voyage.</p>
          <Link to="/contact" className="btn">
            Nous contacter
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
