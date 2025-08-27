import "./Header.css";

export function Header1() {
  return (
    <div>
      {/* Título principal */}
      <header>
        <h1>Header1... </h1>
      </header>
    </div>
  );
}

export const Header = ({ children, title, show }) => {
  return (
    <header className="header">
      <h1 className="title">{title || "titulo por defecto"} </h1>
      {children}

      {/*Operadores terciarios
       {show ?  <p>Este texto se va a mostrar solo si el prop show es true</p> : null }
     */}
     
      {show && <p>Este texto se va a mostrar solo si el prop show es true</p>}
    </header>
  );
};
