import { useEffect, useState } from "react";

import { Redirect, useHistory } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

import api from "../../service/api";
import Card from "../../components/card";
import Button from "../../components/buttons/buttons";
import { Logo } from "../../components/logo/style";
import { Main } from "../../components/main/style";
import { FlexSurface } from "../../components/surface/style";
import { Header, UserHeader } from "../../components/header/style";
import { AddTech, ConfirmDelete, EditTech } from "./Modals";
import { Appear } from "../../components/frames";

export default function User({
  authenticated,
  setAuthenticated,
  currentUser,
  setCurrentUser,
}) {
  const [addTech, setAddTech] = useState(false);
  const [editTech, setEditTech] = useState(false);
  const [deleteTech, setDeleteTech] = useState(false);
  const [clickedTech, setClickedTech] = useState({});

  const history = useHistory();

  const logOut = () => {
    setAuthenticated(false);
    localStorage.removeItem("@kenzieHub.token");
    history.push("/");
  };

  useEffect(() => {
    api
      .get(`/users/${localStorage.getItem("@kenzieHub.id")}`)
      .then((res) => setCurrentUser({ ...res.data }))
      .catch((err) => console.log(err));
  }, [setCurrentUser, currentUser.id]);

  if (!authenticated) return <Redirect to="/login" />;

  return (
    <Appear>
      {addTech && (
        <AddTech setAddTech={setAddTech} setCurrentUser={setCurrentUser} />
      )}
      {editTech && (
        <EditTech
          setCurrentUser={setCurrentUser}
          setEditTech={setEditTech}
          clickedTech={clickedTech}
        />
      )}
      {deleteTech && (
        <ConfirmDelete
          setCurrentUser={setCurrentUser}
          setDeleteTech={setDeleteTech}
          clickedTech={clickedTech}
        />
      )}

      <Header justifyContent="space-between" page="user">
        <div className="container">
          <Logo>KenzieHub</Logo>
          <Button btnColor="gray" btnSize="sm" onClick={logOut}>
            Sair
          </Button>
        </div>
      </Header>
      <UserHeader>
        <div className="container">
          <h1>Olá, {currentUser.name}</h1>
          <p>{currentUser.course_module}</p>
        </div>
      </UserHeader>
      <Main>
        <div className="container">
          <div className="title">
            <h2>Tecnologias</h2>
            <Button
              btnColor="gray"
              btnSize="sm"
              onClick={() => {
                setAddTech(true);
              }}
            >
              <FaPlus />
            </Button>
          </div>
          <FlexSurface flexDirection="column" alignItems="strech" gap="1rem">
            {currentUser.techs ? (
              currentUser.techs?.map((tech) => (
                <Card
                  key={tech.id}
                  tech={tech}
                  remove={() => {
                    setClickedTech({ ...tech });
                    setDeleteTech(true);
                  }}
                  edit={() => {
                    setClickedTech({ ...tech });
                    setEditTech(true);
                  }}
                />
              ))
            ) : (
              <h2>Cadastre uma nova Tech</h2>
            )}
          </FlexSurface>
        </div>
      </Main>
    </Appear>
  );
}
