import Launches from './components/Functional/SpaceX/Launches';
import './App.css';
import AgeGuesser from './components/Functional/AgeGuesser/AgeGuesser';

function App() {
  return (
    <div className="App">
      <AgeGuesser url="https://api.agify.io/?name=" />
      <hr/>
      <Launches url="https://api.spacexdata.com/v3/launches"/>
    </div>
  );
}

export default App;
