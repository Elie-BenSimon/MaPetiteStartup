// == Import
import './styles.scss';
import Timer from 'src/components/Timer';

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
    </div>
  );
};

// == Export
export default App;
