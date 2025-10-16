import './App.css';
import { createContext } from 'react'
import ChildC from './components/ChildC';

const Data = createContext();
const userName = "HARIS";

function App() {
  return (
    <>
      <Data.Provider value={userName}>
        <ChildC />
      </Data.Provider>
      
    </>
  );
}

export default App;
export {Data};