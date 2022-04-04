// == Import
import './styles.scss';
import Timer from 'src/components/Timer';
import Employees from 'src/components/Employees';
import Recruitment from 'src/components/Recruitment';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import NavBar from 'src/components/NavBar';
import Projects from 'src/components/Projects';

// == Composant
const App = () => {
  const newHour = () => console.log('new hour!');
  const newDay = () => console.log('new Day!');
  const newMonth = () => console.log('new Month!');
  const newYear = () => console.log('new Year!');
  return (
    <div className="app">
      <Projects />
    </div>
  );
};

// == Export
export default App;
