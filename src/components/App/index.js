// == Import
import './styles.scss';
import Timer from 'src/components/Timer';
import Recruitment from 'src/components/Recruitment';

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
      <Recruitment />
    </div>
  );
};

// == Export
export default App;
