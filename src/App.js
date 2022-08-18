import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";
function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          {" "}
          <small>
            Coded by Babisha Shrestha and is open-sourced on{" "}
            <a href="https://github.com/Babi1232/dictionary"> Github</a> and
            hosted on{" "}
            <a href="https://clinquant-yeot-ac36a7.netlify.app/">Netlify</a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
