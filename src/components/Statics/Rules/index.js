/* eslint-disable max-len */

// == Imports
import { useSelector } from 'react-redux';

import ClosePageButton from 'src/components/Statics/ClosePageButton';

import './rules.scss';

// == Component
const Rules = () => {
  const startupId = useSelector((state) => state.startup.startupId);

  return (
    <div className="box rules">
      <div className="box__header rules__header">
        <h2>Règles du jeu</h2>
        {startupId === null && <ClosePageButton page="/" />}
      </div>
      <div className="rules__content">
        <p>
          <span className="bold">Ma petite startup</span> est un jeu vidéo de gestion sur navigateur.
        </p>
        <p>
          Le but du jeu et d'amener sa start-up a avoir la réputation la plus grande, forte et reconnue dans la Silicone Valley. Une fois sa start-up créée, chaque joueur reçoit une somme de départ qu'il doit investir dans des locaux et des développeurs, puis faire fructifier en réalisant des projets qui vont lui permettre de faire augmenter sa réputation; ce qui lui donnera accès à des projets plus intéressants et rémunérateurs.
        </p>
        <h3>Startup</h3>
        <p>
          Chaque joueur pourra à la création de son compte créer sa startup et définir ses caractéristiques de base: un nom, un slogan et un logo.
        </p>
        <h3>Développeurs</h3>
        <p>
          Rien ne vaut une équipe soudée, motivée...et rentable ! Chaque développeur a un salaire mensuel dépendant de son niveau de compétence et donc de sa productivité. Mais attention à son taux de lassitude, un développeur efficace est un développeur investi...et qui ne risque pas de démissionner.
        </p>
        <h3>Projets</h3>
        <p>
          Véritable cœur du jeu, les projets sont le moyen pour le joueur de générer du profit. L’utilisateur peut créer un nouveau projet à tout moment en lui donnant un nom, une description et en choisissant une difficulté. Une fois le projet créé, le joueur peut y affecter des développeurs qui compléteront le projet avec le temps. Une fois cette completion atteinte le projet générera de l’argent de manière décroissante avec le temps.
        </p>
      </div>
    </div>
  );
};

export default Rules;
