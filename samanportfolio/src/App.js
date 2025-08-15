import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Hero />
      </div>
    </div>
  );
}

export default App;
