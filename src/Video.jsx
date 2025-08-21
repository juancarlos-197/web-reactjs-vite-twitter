export function Video({viteLogo, reactLogo}) {
  return (
    <div>
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
    </div>
  );
} 