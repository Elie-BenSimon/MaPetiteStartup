// allow DOM manipulation outside react scope
import ReactDom from 'react-dom';
// necessary for redux
import { Provider } from 'react-redux';
// necessary to implement routing
import { BrowserRouter } from 'react-router-dom';

// main component to render
import App from 'src/components/App';
// object that allows components to share a common state
import store from 'src/store';

const rootReactElement = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);
