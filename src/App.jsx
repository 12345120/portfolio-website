import './App.css';
import Home from './components/Home';
import LeftBar from "./components/LeftBar";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      
      {/* Left Bar */}
      <LeftBar></LeftBar>
      
      {/* Main Content */}
      <Home></Home>
      
      {/* Footer */}
    </div>
  );
}

export default App;
