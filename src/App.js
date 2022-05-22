import logo from "./logo.png";
import "./App.css";
import CoderStamp from "./CoderStamp.js";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <img src={logo} className="app-logo img-fluid" alt="logo" />

      <CoderStamp />
    </div>
  );
}

export default App;
