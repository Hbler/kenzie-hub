import { useHistory } from "react-router-dom";
import Button from "../../components/buttons/buttons";
import { Logo } from "../../components/logo/style";
import { HomeMain } from "./style";

export default function Home({ authenticated }) {
  const history = useHistory();

  return (
    <div className="container">
      <HomeMain>
        <Logo>KenzieHub</Logo>

        {authenticated ? (
          <Button
            btnColor="negative"
            onClick={() => {
              history.push("/user");
            }}
          >
            Perfil
          </Button>
        ) : (
          <Button
            btnColor="light-gray"
            onClick={() => {
              history.push("/login");
            }}
          >
            Fazer Login
          </Button>
        )}
        <Button
          btnColor="gray"
          onClick={() => {
            history.push("/registry");
          }}
        >
          Ver Usuários Cadastrados
        </Button>
      </HomeMain>
    </div>
  );
}
