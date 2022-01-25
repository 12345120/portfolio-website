import './App.css';
import Home from './components/Home';
import LeftBar from "./components/LeftBar";

function App() {
  return (
    <div className="App" id='app'>
      <div className='App_content'>
        {/* Navbar */}
        
        {/* Left Bar */}
        <LeftBar></LeftBar>
        
        {/* Main Content */}
        <Home></Home>
        
        {/* Footer */}
      </div>
    </div>
  );
}

export default App;
