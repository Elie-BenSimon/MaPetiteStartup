// == Import
import './styles.scss';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import NavBar from 'src/components/NavBar';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <NavBar />
    <Footer />
  </div>
);

// == Export
export default App;
