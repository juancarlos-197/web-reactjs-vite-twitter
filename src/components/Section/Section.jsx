//const frutas = ["manzana", "pera", "naranja", "kiwi"];
import userImg1 from "../../assets/profile.png";
import userImg2 from "../../assets/man.png";
import userImg3 from "../../assets/boy.png";

import "./Section.css";

const users = [
 { id: 1, name: "Juán Carlos Albán", description: "Fronted Developer", image: userImg1 },
 { id: 1, name: "Miguel Angel Acosta ", description: "Backend Developer", image: userImg2 },
 { id: 1, name: "Leo Fer Mendez Angel", description: "JavaScript Developer", image: userImg3 }
];
export const Section = () => {
  return (
    <>
      <ul>
        {/*Recterisar listas 
           {frutas.map(fruta => {
          return <li key={fruta}>{fruta}</li> ;
        })}
     */}
      </ul>

      <section className="sep">
        {users.map((user) => {
          return (
            <div className="card" key={user.id}>
              <img className="image" src={user.image} alt={user.name} />
              <h2 className="name">{user.name}</h2>
              <p className="description">{user.description}</p>
            </div>
          );
        })}
      </section>
    </>
  );
};
