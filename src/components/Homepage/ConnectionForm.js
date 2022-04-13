// == Imports
import { useSelector, useDispatch } from 'react-redux';

import { changeFormField } from 'src/actions/homepage';
import { logIn } from 'src/actions/user';

// == Component
const ConnectionForm = () => {
  const emailValue = useSelector((state) => state.user.email);
  const passwordValue = useSelector((state) => state.user.password);

  // fake token before connecting to API
  const token = Math.random();

  const dispatch = useDispatch();

  return (
    <form
      className="connection__form"
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(logIn(token));
      }}
    >
      <div>
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          placeholder="moulaga4ever@mpsu.org"
          value={emailValue}
          id="email"
          name="email"
          required
          onChange={(event) => dispatch(changeFormField(event.target.value, event.target.name))}
        />
      </div>

      <div>
        <label htmlFor="password">Mot de passe*</label>
        <input
          type="password"
          placeholder="Sùp€rMot2Pass€!"
          value={passwordValue}
          id="password"
          name="password"
          required
          onChange={(event) => dispatch(changeFormField(event.target.value, event.target.name))}
        />
      </div>

      <div className="modal__content__info">
        <p>*Information obligatoire</p>
      </div>

      <button
        type="submit"
        className="button modal__content__button"
      >
        Connexion
      </button>

    </form>
  );
};

export default ConnectionForm;