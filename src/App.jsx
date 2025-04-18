import BoyGirl from './screens/BoyGirl';
import About from './screens/About';
import Timer from './screens/Timer';
import Location from './screens/Location';
import Photos from './screens/Photos';
import Details from './screens/Details';
import Requests from './screens/Requests';
import FallingLeaf from './components/FallingLeaf';
import ScrollLeaf from './components/ScrollLeaf';
import './styles/reset.css';
import './styles/fonts.scss';
import './styles/adaptive.scss';
import './styles/App.scss';

function App() {
  return (
    <div className="wrapper">
      {[...Array(5)].map((_, i) => (
        <FallingLeaf key={i} />
      ))}
      {[...Array(2)].map((_, i) => (
        <ScrollLeaf key={i} />
      ))}
      <BoyGirl />
      <About />
      <Timer />
      <Location />
      <Requests />
      <Photos />
      <Details />
    </div>
  );
}

export default App;
