// == Import
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './styles.scss';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Homepage from 'src/components/Homepage';
import NavBar from 'src/components/NavBar';
import InfoBar from 'src/components/InfoBar';
import Timer from 'src/components/Timer';
import Wrapper from 'src/components/Wrapper';
import Employees from 'src/components/Employees';
import Recruitment from 'src/components/Recruitment';
import Projects from 'src/components/Projects';
import Startup from 'src/components/Startup';
import newProject from 'src/components/newProject';

// == Composant
const App = () => {
  const token = useSelector((state) => state.user.token);

  const newHour = () => console.log('new hour!');
  const newDay = () => console.log('new Day!');
  const newMonth = () => console.log('new Month!');
  const newYear = () => console.log('new Year!');

  return (
    <div className="app">
      <Header>
        { token != null
          && (
            <InfoBar>
              <Timer
                newHour={newHour}
                newDay={newDay}
                newMonth={newMonth}
                newYear={newYear}
              />
            </InfoBar>
          )}
      </Header>
      { token == null && <Homepage />}
      { token != null && <NavBar /> }
      { token != null
      && (
        <Wrapper>
          <Routes>
            <Route path="/" element={<Startup />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/new" element={<newProject />} />
          </Routes>
        </Wrapper>
      )}
      <Footer />
    </div>
  );
};

// == Export
export default App;
