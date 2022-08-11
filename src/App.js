import React, { useState, useEffect } from "react";
function App() {
  const [tips, setTips] = useState("");
  const fetchTips = async () => {
  const response = await fetch(
      "http://www.boredapi.com/api/activity/"
    );
   const data = await response.json();
   setTips(data.activity);
  };
  useEffect(() => {
    fetchTips();
  }, []);
  return (
    <div className="App">
	<p> {tips} </p>
    	<button onClick={fetchTips}>New Tip</button>
    </div>
  );
}

export default App;
