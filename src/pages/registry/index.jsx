import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../service/api";
import Button from "../../components/buttons/buttons";
import { Logo } from "../../components/logo/style";
import { Main } from "../../components/main/style";
import { Header } from "../../components/header/style";
import { FlexSurface } from "../../components/surface/style";
import { UserCard } from "../../components/card";
import { Appear } from "../../components/frames";

export default function Registry({ authenticated, allUsers, setAllUsers }) {
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    api
      .get("/users", {
        params: {
          page: currentPage,
          perPage: 5,
          tech: "",
        },
      })
      .then((res) => setAllUsers([...res.data]))
      .catch((err) => console.log(err));
  }, [setAllUsers, currentPage]);

  return (
    <Appear>
      <Header justifyContent="space-between" page="users">
        <div className="container">
          <Logo>KenzieHub</Logo>
          <Button
            btnColor="gray"
            btnSize="sm"
            onClick={() => {
              history.push("/");
            }}
          >
            Voltar
          </Button>
        </div>
      </Header>

      <Main>
        <div className="container">
          <div className="title">
            <h2>Usuários</h2>
            {authenticated ? (
              <Button
                btnColor="negative"
                btnSize="sm"
                onClick={() => {
                  history.push("/user");
                }}
              >
                Perfil
              </Button>
            ) : (
              <Button
                btnColor="gray"
                btnSize="sm"
                onClick={() => {
                  history.push("/signup");
                }}
              >
                Cadastre-se
              </Button>
            )}
            <div>
              {currentPage > 1 && (
                <Button
                  btnColor="negative"
                  btnSize="sm"
                  onClick={() => {
                    currentPage > 1 && setCurrentPage(currentPage - 1);
                  }}
                >
                  Anteriror
                </Button>
              )}
              <input
                type="number"
                min="1"
                value={currentPage}
                onChange={(e) => {
                  setCurrentPage(e.target.value);
                }}
              />
              <Button
                btnColor="negative"
                btnSize="sm"
                onClick={() => {
                  setCurrentPage(+currentPage + 1);
                }}
              >
                Próxima
              </Button>
            </div>
          </div>
          <FlexSurface flexDirection="column" alignItems="strech" gap="1rem">
            {allUsers.length > 0 ? (
              allUsers?.map((user) => <UserCard key={user.id} user={user} />)
            ) : (
              <h2>Sem resultados</h2>
            )}
          </FlexSurface>
        </div>
      </Main>
    </Appear>
  );
}
