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
        <h1>Dictionary</h1>
        <h3>What word would you like to look up?</h3>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
      </div>
      <CoderStamp />
    </div>
  );
}

export default App;
