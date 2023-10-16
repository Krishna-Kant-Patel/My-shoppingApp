import logo from './logo.svg';
import './App.css';
import Users from './components/Function';
import Timer from './components/Redux/store';
function App() {
  return (
    <div className="App">
      <h1>Welcome to My App</h1>
      {/* <Users/> */}
      <Timer/>
      
    </div>
  );
}

export default App;
