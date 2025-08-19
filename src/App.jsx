import { useState } from 'react'
import reactLogo from './assets/react.svg'
import  './App.css'
// import  './App_dark.css' 
import Header from './components/Header'
import Main from './components/Main'
function App() {
  const [Theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <div className={Theme}>
      <Header />
      <Main />
      {/* <button onClick={toggleTheme}>
        Switch to {Theme === 'light' ? 'Dark' : 'Light'} Theme
      </button> */}
    </div>
  )
}

export default App
