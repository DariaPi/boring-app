import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [tip, setTip] = useState ("");

  const getTip = async () => {
    const responce = await fetch ('http://www.boredapi.com/api/activity/ ');
    const data = await responce.json ();
    setTip (data.activity);
  }

  useEffect (() => {
    getTip ();
  }, [])

  return (
    <div className="App">
      <p className='tip'>{ tip }</p>
      <button className='btn' onClick={ getTip }>new tip</button>
    </div>
  );
}

export default App;
