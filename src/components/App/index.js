// == Import
import './styles.scss';

// dependencies/external
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// actions
import { updateCompletion, completeProject } from 'src/actions/project';
import { modifyProjectId } from 'src/actions/dev';

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
import { useEffect } from 'react';

// == Composant
const App = () => {
  const dispatch = useDispatch();
  const devList = useSelector((state) => state.dev.devList);
  const projectsList = useSelector((state) => state.project.projectsList);

  useEffect(() => {
    projectsList.forEach((project) => {
      // check if a project is complete
      if (!project.complete && project.completion >= project.completionMax) {
        // tag the project as complete
        dispatch(completeProject(project.id));
        // reinitialization of code_project for dev on finished project
        dispatch(modifyProjectId(devList.filter(
          (dev) => dev.code_project === project.id,
        ).map((dev) => dev.id), null));
      }
    });
  }, [projectsList].map((project) => project.completion));

  const newHour = () => {
    devList.forEach((dev) => {
      if (dev.code_project) {
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
