// == Import
import './styles.scss';
import Timer from 'src/components/Timer';
import Employees from 'src/components/Employees';
import Recruitment from 'src/components/Recruitment';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import NavBar from 'src/components/NavBar';
import Wrapper from 'src/components/Wrapper';
import InfoBar from 'src/components/InfoBar';

// == Composant
const App = () => {
  const newHour = () => console.log('new hour!');
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
        <Employees />
        <Recruitment />
      </Wrapper>
      <Footer />
    </div>
  );
};

// == Export
export default App;
