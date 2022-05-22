import logo from "./logo.png";
import "./App.css";
import CoderStamp from "./CoderStamp";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <img src={logo} className="app-logo img-fluid" alt="logo" />
        <main>
          <Dictionary />
        </main>
      </div>
      <CoderStamp />
    </div>
  );
}

export default App;
