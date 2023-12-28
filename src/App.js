import './App.css';
import AreaOfPractice from './Components/AreaOfPractice/AreaOfPractice';
import ChooseUs from './Components/ChooseUs/ChooseUs';
import Clients from './Components/Clients/Clients';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Team from './Components/Team/Team';

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <ChooseUs />
      <AreaOfPractice />
      <Clients />
      <Team />
    </div>
  );
}

export default App;
