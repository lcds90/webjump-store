import React, { useEffect } from 'react'
import './App.css';
const App = () => {

  const tryFetch = async () => {
    const response = await fetch('http://localhost:8888/api/V1/categories/list ');
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    tryFetch();
  }, [])

    return (
        <div>
          Hello React From Webpack!
        </div>
    )
}

export default App;