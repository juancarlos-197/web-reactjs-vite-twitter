import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <article style={{}}>
        <header>
          <img
            src="https://github.com/juancarlos-197.png"
            alt="El avatar de portafolio "
          />
          <div>
            <strong>Juán Carlos Albán Luna</strong>
            <br />
            <span>jalban.dacompsc@gmail.com</span>
          </div>
          <br />
        </header>
        <aside>
          <button>Seguir</button>
        </aside>
      </article>
    </>
  );
}

export default App;
