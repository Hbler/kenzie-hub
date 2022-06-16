import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { CardContainer, Container, Techs, UserCardContainer } from "./style";

export default function Card({ tech, remove, edit }) {
  return (
    <CardContainer>
      <button className="edit" onClick={edit}>
        Editar
      </button>
      <div>
        <h3>{tech.title}</h3>
        <p>{tech.status}</p>
      </div>
      <button className="remove" onClick={remove}>
        Apagar
      </button>
    </CardContainer>
  );
}

export function UserCard({ user }) {
  const [showTechs, setShowTechs] = useState(false);
  return (
    <Container>
      <UserCardContainer>
        <div>
          <h3>{user.name}</h3>
          <p>{user.course_module}</p>
        </div>
        <button onClick={() => setShowTechs(!showTechs)}>
          {showTechs ? (
            <MdClose
              style={{ fontSize: "1.2rem", transform: "translate(10%, 20%)" }}
            />
          ) : (
            <FaPlus />
          )}
        </button>
      </UserCardContainer>
      {showTechs && (
        <Techs>
          {user.techs.length > 0 ? (
            user.techs?.map((tech) => (
              <p key={tech.id}>
                {tech.title} <span>{tech.status}</span>
              </p>
            ))
          ) : (
            <p>Sem tecnologias cadastradas</p>
          )}
        </Techs>
      )}
    </Container>
  );
}
