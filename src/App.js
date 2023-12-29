import './App.css';
import AreaOfPractice from './Components/AreaOfPractice/AreaOfPractice';
import ChooseUs from './Components/ChooseUs/ChooseUs';
import Clients from './Components/Clients/Clients';
import Faq from './Components/Faq/Faq';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Subscribe from './Components/Subscribe/Subscribe';
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
      <Faq />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
