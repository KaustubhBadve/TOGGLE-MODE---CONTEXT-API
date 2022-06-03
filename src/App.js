import { useContext } from 'react';
import './App.css';
import Sidestack from './components/Sidestack';
import { Thmcontext } from './context/Themecontext';

function App() {
  const {isLight} = useContext(Thmcontext)
  return (
    <div className={`App ${isLight ? "dark" : "light"}`}>
      <Sidestack/>
    </div>
  );
}

export default App;
