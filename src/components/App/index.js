// == Import
import './styles.scss';
import { getFormattedDate } from 'src/utils/formatTime';

// dependencies/external
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// actions
import {
  updateCompletion,
  completeProject,
  patchProject,
} from 'src/actions/project';

import {
  changeProject,
  updateLassitude,
  fireDev,
  patchDev,
} from 'src/actions/dev';

import {
  changeMoney,
  changeReputation,
  toggleNewNotification,
  newNotification,
  patchStartup,
} from 'src/actions/startup';

// components
import Header from 'src/components/Layouts/Header';
import Footer from 'src/components/Layouts/Footer';
import Homepage from 'src/components/Homepage';
import InfoBar from 'src/components/Layouts/InfoBar';
import Timer from 'src/components/Timer';
import Wrapper from 'src/components/Layouts/Wrapper';
import NavBar from 'src/components/Layouts/NavBar';
import Employees from 'src/components/Dev/Employees';
import Recruitment from 'src/components/Dev/Recruitment';
import Projects from 'src/components/Project/Projects';
import Startup from 'src/components/Startup';
import NewProject from 'src/components/Project/NewProject';
import IndividualProject from 'src/components/Project/IndividualProject';
import Contact from 'src/components/Statics/Contact';
import Legals from 'src/components/Statics/Legals';
import Rules from 'src/components/Statics/Rules';
import Error from 'src/components/Statics/Error';
import Relocate from 'src/components/Startup/Relocate';
import Rh from 'src/components/Rh';
import Notification from 'src/components/Notification';

// == Composant
const App = () => {
  const dispatch = useDispatch();

  const startupId = useSelector((state) => state.startup.startupId);
  const devList = useSelector((state) => state.dev.devList);
  const projectsList = useSelector((state) => state.project.projectsList);
  const money = useSelector((state) => state.startup.money);
  const reputation = useSelector((state) => state.startup.reputation);

  // if the startup have employees
  let totalSalarySum = 0;
  if (devList.length) {
    totalSalarySum = devList.map((dev) => dev.salary).reduce(
      (previousValue, currentValue) => previousValue + currentValue,
    );
  }

  useEffect(() => {
    projectsList.forEach((project) => {
      // check if a project is complete
      if (!project.complete && project.completion >= project.difficulty.production) {
        // tag the project as complete
        dispatch(completeProject(project.id, project.difficulty.production));
        dispatch(patchProject(project.id, { completion: project.difficulty.production }));

        // list of dev on completed project
        const devListOnCompletedProject = devList.filter((dev) => dev.projectId == project.id);

        // reinitialization of project for dev on finished project
        dispatch(changeProject(devListOnCompletedProject.map((dev) => dev.id), null));

        devListOnCompletedProject.forEach((dev) => dispatch(patchDev(dev.id, { project: null })));

        // money gain
        dispatch(changeMoney(project.difficulty.profit));

        // reputation gain
        dispatch(changeReputation(project.difficulty.reputation));

        // update startup database infos
        dispatch(patchStartup({
          money: money + project.difficulty.profit,
          reputation: reputation + project.difficulty.reputation,
        }));
      }
    });
  }, [projectsList]);

  const newHour = (ingameDate) => {
    devList.forEach((dev) => {
      // calculation of lassitude gain factor by hour
      // the last number correspond to the max number of ingame hour non stop
      // with minimum deltaSkill before quitting
      // const lassitudeGain = (dev.deltaSkill + 1) * 100 / 1200;
      // console.log(lassitudeGain);
      const lassitudeGain = 0.1;
      const lassitudeLoss = 10 / (dev.lassitude ** (1 / 2));

      // if current dev is working on a project
      if (dev.projectId && dev.projectId !== 'newProject') {
        // update project completion with dev on projects
        setTimeout(() => dispatch(updateCompletion((dev.skill + 1) * 5, dev.projectId)), 1);

        // increase lassitude of working dev
        if (dev.lassitude + lassitudeGain <= 100) {
          // lassitude loss factor
          dispatch(updateLassitude(dev.id, lassitudeGain));
        }
        // dev with max lassitude leave the company
        else {
          const date = getFormattedDate(new Date(ingameDate));
          dispatch(toggleNewNotification(true));
          dispatch(patchDev(dev.id, { code_startup: null, code_project: null }));
          dispatch(fireDev(dev.id));
          dispatch(newNotification('burnout', dev.name, date));
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

  // saving data on each new day
  const newDay = () => {
    devList.forEach((d) => dispatch(patchDev(d.id, { lassitude: d.lassitude })));
    projectsList.forEach((p) => dispatch(patchProject(p.id, { completion: p.completion })));
  };

  const newMonth = () => console.log('new Month!');
  const newYear = () => console.log('new Year!');

  return (
    <div className="app">
      {startupId === null
        && (
          <>
            <Header />
            <Wrapper>
              <Routes>
                <Route path="/rules" element={<Rules />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/legals" element={<Legals />} />
                <Route path="/*" element={<Homepage />} />
              </Routes>
            </Wrapper>
          </>
        )}

      {startupId !== null
        && (
          <>
            <InfoBar>
              <Timer
                newHour={newHour}
                newDay={newDay}
                newMonth={newMonth}
                newYear={newYear}
              />
            </InfoBar>
            <Wrapper>
              <NavBar />
              <Routes>
                <Route path="/" element={<Startup totalSalary={totalSalarySum} />} />
                <Route path="/notification" element={<Notification />} />
                <Route path="/relocate" element={<Relocate />} />
                <Route path="/recruitment" element={<Recruitment />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/new" element={<NewProject />} />
                <Route path="/projects/:id" element={<IndividualProject />} />
                <Route path="/rh" element={<Rh />} />
                <Route path="/rules" element={<Rules />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/legals" element={<Legals />} />
                <Route path="/*" element={<Error />} />
              </Routes>
            </Wrapper>
          </>
        )}

      <Footer />
    </div>
  );
};

// == Export
export default App;
