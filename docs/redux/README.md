# Redux

## Installation

`yarn add redux react-redux redux-devtools-extension`

## Mise en place du store

- créer un reducer : `src/reducers/nameForTheReducer.js`

```js
const initialState = {
  // ici le state initial
};

const nameForTheReducer = (state = initialState, action = {}) {
  switch(action.type) {
    default:
      return state;
  }
}

export default nameForTheReducer;

```

- créer le store : `src/store/index.js`

```js

import { createStore } from 'redux';

import { devToolsEnhancer } from 'redux-devtools-extension';

import reducer from 'src/reducers/nameForTheReducer';

const store = createStore(
  // reducer
  reducer,
  // enhancer
  devToolsEnhancer(),
);

export default store;

```

- utilisation du composant Provider pour que nos composants puissent avoir accès au
store. Par exemple dans _src/index.js_ :

```js
import { Provider } from 'react-redux';

import store from 'src/store';

[...]

const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

```

On peut utiliser le Redux dev tool pour vérifier que le store est fonctionnel : quand on regarde le détail de l'action d'initialisation, on devrait voir le state initial.

# Connexion d'un composant au store

Grâce au Provider nos composants sont implicitement connectés au store. Pour interagir avec le store on a deux hooks à notre disposition.

## Lecture d'informations du state : _useSelector_

On utilise le hook _useSelector_ fourni par _react-redux_. Ce hook est utilisable directement dans n'importe quel composant.

Si on avait un return implicite on remet les accolades et le mot `return`.

Si on veut récupérer plusieurs informations on fait appel à _useSelector_ plusieurs fois => récupérer une information avec useSelector permet aussi d'abonner le composant aux changements de cette information dans le state, le composant refera automatiquement son rendu si cette information change.

```js
import { useSelector } from 'react-redux';

const MyComponent = () => {
  const info = useSelector((state) => state.information);
  const otherInfo = useSelector((state) => state.otherInformation);

  return (
    <span>{info}</span>
    {otherInfo.map((item) => xxxxxxxxxxxxx)}
  );
}
```

## Modification du state, envoi d'une action au store : _useDispatch_

- si l'action dont on a besoin (intention) n'existe pas encore : définir le _action type_ et le _action creator_ pour cette action (créer un fichier d'annuaire _src/actions/nameActions.js_) :

```javascript
 // === action types
 export const DO_SOMETHING = 'DO_SOMETHING';

 // === action creators
 export const doSomething = (/* newValue */) => ({
   type: DO_SOMETHING,
   /* value: newValue, */
 });
```

puis ajouter le traitement de cette action dans un reducer (= quel est l'impact de cette action sur le state)

```javascript
import { DO_SOMETHING } from 'src/actions/nameForTheActions';

[...]

switch (action.type) {
  case DO_SOMETHING:
    // on retourne un nouveau state
    return {
      // en déversant les informations du state actuel
      ...state,
      // et en appliquant des modifications
      propriété_à_modifier_1: 'valeur',
      propriété_à_modifier_2: action.newValue,
    };
  [...]
}
```

- on dispatch une action dans le composant en utilisant le hook _useDispatch_ fourni par _react-redux_. Ce hook est utilisable directement dans n'importe quel composant.

Si on avait un return implicite on remet les accolades et le mot `return`.

```js
import { useDispatch } from 'react-redux';
import { doSomething } from 'src/actions/nameForTheActions';

const MyComponent = () => {
  const dispatch = useDispatch();
  
  return (
    <button
      onClick={() => {
        dispatch(doSomething(/* infos en payload si nécessaire */));
      }}
    >
```
