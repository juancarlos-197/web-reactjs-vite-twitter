import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";

import "./App.css";
import { TwitterCard } from "./TwitterCard";

const users = [
  // Usuario principal
  {
    userName: "juancarlos-197.png",
    name: "Juán Carlos Albán Luna",
    email: "jalban.dacompsc@gmail.com",
    isFollowing: false,
  },
  // Usuario invitado
  {
    userName: "leifermendez.png", // Nombre de usuario en GitHub
    name: "Leo Fer Mendez Angel", // Nombre completo
    email: "leifer.dacompsc@gmail.com", // Correo electrónico
    isFollowing: true, // ¿Está siguiendo?
  },
  // Usuario destacado
  {
    userName: "midudev.png", // Nombre de usuario en GitHub
    name: "Miguel Angel", // Nombre completo
    email: "miguel.dacompsc@gmail.com", // Correo electrónico
    isFollowing: true, // ¿Está siguiendo?
  },
];

function App() {
  // Renderiza la sección principal de la aplicación
  return (
    <><section className="App">
      {/* Logos de Vite y React */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* Título principal */}
      <h1>Vite + React</h1>

      {/* Renderiza una tarjeta por cada usuario */}
      {users.map(({ userName, name, email, isFollowing }) => (
        <TwitterCard
          key={userName}
          userName={userName}
          name={name}
          email={email}
          isFollowing={isFollowing} />
      ))}

      {/* Ejemplo de tarjetas adicionales comentadas */}
      {/*
      <TwitterCard
        userName="midudev.png"
        name="Juán Carlos Albán Luna"
        email="jalban.dacompsc@gmail.com"
        isFollowing={false}
      />
      <br />
      <TwitterCard
        userName="midudev.png"
        name="Juán Carlos Albán Luna"
        email="jalban.dacompsc@gmail.com"
        isFollowing={false}
      />
    */}



    </section>
  </>   

  );
}

export default App;
