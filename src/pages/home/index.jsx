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
            <div className="btn">
              <Button
                btnColor="negative"
                onClick={() => {
                  history.push("/user");
                }}
              >
                Perfil
              </Button>
            </div>
          </SlideDown>
        ) : (
          <SlideDown>
            <div className="btn">
              <Button
                btnColor="light-gray"
                onClick={() => {
                  history.push("/login");
                }}
              >
                Fazer Login
              </Button>
            </div>
          </SlideDown>
        )}
        <SlideUp>
          <div className="btn">
            <Button
              btnColor="gray"
              onClick={() => {
                history.push("/registry");
              }}
            >
              Ver Usuários Cadastrados
            </Button>
          </div>
        </SlideUp>
      </HomeMain>
    </div>
  );
}
