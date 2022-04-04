// == Import
import './styles.scss';
import Timer from 'src/components/Timer';
import Employees from 'src/components/Employees';
import Recruitment from 'src/components/Recruitment';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import NavBar from 'src/components/NavBar';

// == Composant
const App = () => {
  const newHour = () => console.log('new hour!');
  const newDay = () => console.log('new Day!');
  const newMonth = () => console.log('new Month!');
  const newYear = () => console.log('new Year!');
  return (
    <div className="app">
      <Timer
        newHour={newHour}
        newDay={newDay}
        newMonth={newMonth}
        newYear={newYear}
      />
      <Employees />
      <Recruitment />
      <Header />
      <NavBar />
      <Footer />
    </div>
  );
};

// == Export
export default App;
