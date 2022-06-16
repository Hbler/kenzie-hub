import { useHistory } from "react-router-dom";

import Button from "../../components/buttons/buttons";
import { Logo } from "../../components/logo/style";
import { SlideDown, SlideUp } from "../../components/frames";
import { HomeMain } from "./style";

export default function Home({ authenticated }) {
  const history = useHistory();

  return (
    <div className="container">
      <HomeMain>
        <Logo>KenzieHub</Logo>

        {authenticated ? (
          <SlideDown>
            <Button
              btnColor="negative"
              onClick={() => {
                history.push("/user");
              }}
            >
              Perfil
            </Button>
          </SlideDown>
        ) : (
          <SlideDown>
            <Button
              btnColor="light-gray"
              onClick={() => {
                history.push("/login");
              }}
            >
              Fazer Login
            </Button>
          </SlideDown>
        )}
        <SlideUp>
          <Button
            btnColor="gray"
            onClick={() => {
              history.push("/registry");
            }}
          >
            Ver Usuários Cadastrados
          </Button>
        </SlideUp>
      </HomeMain>
    </div>
  );
}
