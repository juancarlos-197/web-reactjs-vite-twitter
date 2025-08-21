import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";

import "./App.css";
import { TwitterCard } from "./TwitterCard";

function App() {
  return (
    <section className="App">
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <TwitterCard
        userName="juancarlos-197.png"
        name="Juán Carlos Albán Luna"
        email="jalban.dacompsc@gmail.com"
        isFollowing={false}
      />
      <br />
      <TwitterCard
        userName="leifermendez.png"
        name="Miguel Angel"
        email="miguel.dacompsc@gmail.com"
        isFollowing
      />
    </section>
  );
}

export default App;
