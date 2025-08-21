export function TwitterCard({ userName, name, email, isFollowing }) {
  // Muestra en consola si el usuario está siendo seguido
  console.log(isFollowing);

  // Renderiza la tarjeta de usuario de Twitter
  return (
    <div>
      <article className="margin-t">
        <header>
          {/* Imagen de perfil del usuario */}
          <img
            src={`https://github.com/${userName}`}
            alt="El avatar de portafolio "
          />
          <div>
            {/* Nombre del usuario */}
            <strong>{name}</strong>
            <br />
            {/* Email del usuario */}
            <span>{email}</span>
          </div>
          <br />
        </header>
        <aside>
          {/* Botón para seguir al usuario */}
          <button className="tw-button">Seguir</button>
        </aside>
      </article>
    </div>
  );
}
