// == Import
import './styles.scss';

// dependencies/external
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// actions
import { updateCompletion, completeProject } from 'src/actions/project';
import { modifyProjectId, updateLassitude, fireDev } from 'src/actions/dev';
import { modifyMoney, modifyReputation } from 'src/actions/startup';

// components
import Header from 'src/components/Layouts/Header';
import Footer from 'src/components/Layouts/Footer';
import Homepage from 'src/components/Homepage';
import InfoBar from 'src/components/Layouts/InfoBar';
import Timer from 'src/components/Timer';
import Wrapper from 'src/components/Layouts/Wrapper';
import NavBar from 'src/components/Layouts/NavBar';
import Content from 'src/components/Layouts/Content';
import Employees from 'src/components/Dev/Employees';
import Recruitment from 'src/components/Dev/Recruitment';
import Projects from 'src/components/Project/Projects';
import Startup from 'src/components/Startup';
import NewProject from 'src/components/Project/NewProject';
import IndividualProject from 'src/components/Project/IndividualProject';
import IndividualEmployee from 'src/components/Dev/IndividualEmployee';

// == Composant
const App = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.user.token);
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

        // money gain
        dispatch(modifyMoney(project.moneyGain));

        // reputation gain
        dispatch(modifyReputation(project.reputationGain));
      }
    });
  }, [projectsList]);

  const newHour = () => {
    devList.forEach((dev) => {
      // calculation of lassitude gain factor by hour
      // the last number correspond to the max number of ingame hour non stop
      // with minimum deltaSkill before quitting
      const lassitudeGain = (dev.deltaSkill + 1) * 100 / 2160;

      // lassitude loss factor
      const lassitudeLoss = 1 / dev.lassitude;

      // if current dev is working on a project
      if (dev.code_project && dev.code_project !== 'newProject') {
        // update project completion with dev on projects
        setTimeout(() => dispatch(updateCompletion(dev.skill + 1, dev.code_project)), 1);

        // increase lassitude of working dev
        if (dev.lassitude + lassitudeGain <= 100) {
          dispatch(updateLassitude(dev.id, lassitudeGain));
        }
        // dev with max lassitude leave the company
        else {
          dispatch(fireDev(dev.id));
        }
      }
      // decrease lassitude of not working dev
      else if (dev.lassitude > 0) {
        if (dev.lassitude > lassitudeLoss) {
          dispatch(updateLassitude(dev.id, -lassitudeLoss));
        }
        // prevent lassitude below zero
        else {
          dispatch(updateLassitude(dev.id, -dev.lassitude));
        }
      }
    });
  };

  const newDay = () => console.log('new Day!');
  const newMonth = () => console.log('new Month!');
  const newYear = () => console.log('new Year!');

  return (
    <div className="app">
      <Header>
        { token !== null
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
      { token === null && <Homepage />}
      { token !== null
      && (
        <Wrapper>
          <NavBar />
          <Content>
            <Routes>
              <Route path="/" element={<Startup />} />
              <Route path="/recruitment" element={<Recruitment />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/employees/:id" element={<IndividualEmployee />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/new" element={<NewProject />} />
              <Route path="/projects/:id" element={<IndividualProject />} />
            </Routes>
          </Content>
        </Wrapper>
      )}

      <Footer />
    </div>
  );
};

// == Export
export default App;
