// == Import
import { Route, Routes } from 'react-router-dom';
import './styles.scss';
import Timer from 'src/components/Timer';
import Employees from 'src/components/Employees';
import Recruitment from 'src/components/Recruitment';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import NavBar from 'src/components/NavBar';
import Projects from 'src/components/Projects';
import Startup from 'src/components/Startup';
import NewProject from 'src/components/newProject';

// == Composant
const App = () => {
  const newHour = () => console.log('new hour!');
  const newDay = () => console.log('new Day!');
  const newMonth = () => console.log('new Month!');
  const newYear = () => console.log('new Year!');
  return (
    <div className="app">

      <NavBar />
      <Timer
        newHour={newHour}
        newDay={newDay}
        newMonth={newMonth}
        newYear={newYear}
      />
      <Routes>
        <Route path="/" element={<Startup />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/new" element={<NewProject />} />
      </Routes>
      <Footer />
    </div>
  );
};

// == Export
export default App;
