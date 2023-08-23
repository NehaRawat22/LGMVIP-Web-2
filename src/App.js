import './App.css';
import { useState } from 'react'; 
import Navbar from './components/Navbar';
import Users from './components/Users';
import LoadingSpinner from './components/LoadingSpinner';
function App() {
  const [isShown, setIsShown] = useState(false);
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const handleClick = async event => {
    // toggle shown state
    await delay(2000);
    setIsShown(true);
  }
  return (
    <div className="App">
      <Navbar/>
      <button className='btn' onClick={handleClick}>
        Get Users
      </button>
      {isShown? <Users/> : <LoadingSpinner/>}
    </div>
  );
}
export default App;
