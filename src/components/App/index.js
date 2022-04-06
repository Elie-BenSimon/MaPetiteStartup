// == Import
import './styles.scss';

// dependencies/external
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// actions
import { updateCompletion } from 'src/actions/project';

// components
import Timer from 'src/components/Timer';
import Employees from 'src/components/Employees';
import Recruitment from 'src/components/Recruitment';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import NavBar from 'src/components/NavBar';
import Projects from 'src/components/Projects';
import Wrapper from 'src/components/Wrapper';
import InfoBar from 'src/components/InfoBar';
import Startup from 'src/components/Startup';
import NewProject from 'src/components/newProject';
import IndividualProject from 'src/components/IndividualProject';

// == Composant
const App = () => {
  const dispatch = useDispatch();
  const devList = useSelector((state) => state.dev.devList);

  const newHour = () => {
    devList.forEach((dev) => {
      if (dev.code_project) {
        console.log('dev.code_project match!', dev.code_project);
        setTimeout(() => dispatch(updateCompletion(dev.skill + 1, dev.code_project)), 1);
      }
    });
  };
  const newDay = () => console.log('new Day!');
  const newMonth = () => console.log('new Month!');
  const newYear = () => console.log('new Year!');

  return (
    <div className="app">
      <Header>
        <InfoBar>
          <Timer
            newHour={newHour}
            newDay={newDay}
            newMonth={newMonth}
            newYear={newYear}
          />
        </InfoBar>
      </Header>
      <NavBar />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Startup />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/new" element={<NewProject />} />
          <Route path="/projects/:id" element={<IndividualProject />} />
        </Routes>
      </Wrapper>
      <Footer />
    </div>
  );
};

// == Export
export default App;
