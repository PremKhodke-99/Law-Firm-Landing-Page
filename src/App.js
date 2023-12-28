import './App.css';
import AreaOfPractice from './Components/AreaOfPractice/AreaOfPractice';
import ChooseUs from './Components/ChooseUs/ChooseUs';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <ChooseUs />
      <AreaOfPractice />
    </div>
  );
}

export default App;
