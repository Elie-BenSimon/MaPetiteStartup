import './newProject.scss';

const newProject = () => (
  <form action="">
    <label htmlFor="name">Nom du projet</label>
    <input
      type="text"
      id="name"
      name="name"
    />
    <label htmlFor="description">Difficulté</label>
    <textarea
      id="description"
      name="description"
    />
    <h3>Développeurs sur le projet</h3>
    <select name="" id="">
      <option value="test">test</option>
      <option value="test2">test2</option>
    </select>
    <button type="button">Ajouter un developpeur</button>
    <label htmlFor="difficulty">Difficulté</label>
    <input
      type="range"
      min="0"
      max="10"
      id="difficulty"
      name="difficulty"
    />
    <p>Bénéfice: beaucoup de $$$</p>
    <button type="submit">Valider</button>
  </form>
);

export default newProject;
