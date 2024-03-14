
import './App.css';
import { GallerySplash } from './Components/GallerySplash/GallerySplash';
import { Title } from './Components/Title/Title';
import { Info } from './Components/Info/Info';

function App() {
  return (
    <div className="App">
      <Title />
      <GallerySplash />
      <Info />
      
    </div>
  );
}

export default App;
