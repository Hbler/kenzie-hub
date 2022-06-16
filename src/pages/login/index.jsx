import { useState } from "react";

import { Redirect, useHistory } from "react-router-dom";
import { useForm, useInput } from "lx-react-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import api from "../../service/api";
import Button from "../../components/buttons/buttons";
import { Logo } from "../../components/logo/style";
import { Input } from "../../components/input";
import { Header } from "../../components/header/style";
import { StyledForm } from "../../components/form/style";
import { FlexSurface } from "../../components/surface/style";
import { errorToast } from "../../components/toasts";
import { SlideDown } from "../../components/frames";

export default function Login({
  setCurrentUser,
  setAuthenticated,
  authenticated,
}) {
  const [pswrdVisible, setPswrdVisible] = useState(false);

  const history = useHistory();

  const togglePswrd = () => {
    setPswrdVisible(!pswrdVisible);
  };

  const email = useInput({
    name: "email",
    errorText: {
      required: "Preencha o campo para continuar",
    },
  });

  const password = useInput({
    name: "password",
    errorText: {
      required: "Preencha o campo para continuar",
    },
  });

  const form = useForm({
    clearFields: true,
    formFields: [email, password],
    submitCallback: (formData) => {
      api
        .post("/sessions", formData)
        .then((res) => {
          localStorage.setItem("@kenzieHub.token", res.data.token);
          localStorage.setItem("@kenzieHub.id", res.data.user.id);
          setCurrentUser({ ...res.data.user });
          setAuthenticated(true);
          history.push(`/user/${res.data.user.name}`);
        })
        .catch((err) => {
          console.log(err);
          errorToast("Email ou Senha inválidos");
        });
    },
  });

  if (authenticated) return <Redirect to="/user" />;

  return (
    <>
      <Header justifyContent="space-between" page="form">
        <div>
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
      <div className="container">
        <SlideDown>
          <FlexSurface
            flexDirection="column"
            alignItems="strech"
            gap="1rem"
            page="form"
          >
            <h2>Login</h2>
            <StyledForm onSubmit={form.handleSubmit}>
              <Input
                label="Email"
                type="email"
                {...email.inputProps}
                helperText={email.error}
              />
              <Input
                label="Senha"
                type={pswrdVisible ? "text" : "password"}
                {...password.inputProps}
                helperText={password.error}
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    togglePswrd();
                  }}
                >
                  {pswrdVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </Input>
              <Button type="submit">Entrar</Button>
            </StyledForm>
            <small>Ainda não possui uma conta?</small>
            <Button
              btnColor="light-gray"
              onClick={() => {
                history.push("/signup");
              }}
            >
              Cadastre-se
            </Button>
          </FlexSurface>
        </SlideDown>
      </div>
    </>
  );
}
