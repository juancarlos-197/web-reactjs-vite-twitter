

export function TwitterCard({ userName, name,email , isFollowing}){
console.log(isFollowing);

    return (
        <div>
     
      <article className="margin-t">
        <header>
          <img
            src={`https://github.com/${userName}`}
            
            alt="El avatar de portafolio "
          />
          <div>
            <strong>{name}</strong>
            <br />
            <span> 
                {email} 
                </span>

          </div>
          <br />
        </header>
        <aside>
          <button className="tw-button">Seguir</button>
        </aside>
      </article>
    </div>
    )
}