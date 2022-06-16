import { useState } from "react";

import { Redirect, useHistory } from "react-router-dom";
import { useForm, useInput, useSelect } from "lx-react-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import api from "../../service/api";
import Button from "../../components/buttons/buttons";
import { Logo } from "../../components/logo/style";
import { Header } from "../../components/header/style";
import { StyledForm } from "../../components/form/style";
import { FlexSurface } from "../../components/surface/style";
import { Input, Select } from "../../components/input";
import { successToast, errorToast } from "../../components/toasts";
import { SlideDown } from "../../components/frames";

export default function SignUp({ authenticated }) {
  const [pswrdVisible, setPswrdVisible] = useState(false);

  const history = useHistory();

  const togglePswrd = () => {
    setPswrdVisible(!pswrdVisible);
  };

  const name = useInput({
    name: "name",
    minLength: 3,
    errorText: {
      required: "Preencha o campo para continuar",
      minLength: "O nome deve ter no mínimo 3 characteres",
    },
  });

  const email = useInput({
    name: "email",
    validation: "email",
    errorText: {
      required: "Preencha o campo para continuar",
    },
  });

  const password = useInput({
    name: "password",
    validation: "senha",
    errorText: {
      required: "Preencha o campo para continuar",
    },
  });

  const confirmPassword = useInput({
    name: "confirmPassword",
    same: password.value,
  });

  const bio = useInput({
    name: "bio",
  });

  const contact = useInput({
    name: "contact",
  });

  const course_module = useSelect({
    name: "course_module",
    errorText: {
      required: "Escolha uma opção para continuar",
    },
  });

  const form = useForm({
    clearFields: true,
    stepFields: {
      0: [name, email, password, confirmPassword],
      1: [bio, contact, course_module],
    },
    formFields: [
      name,
      email,
      password,
      confirmPassword,
      bio,
      contact,
      course_module,
    ],
    submitCallback: ({
      name,
      email,
      password,
      bio,
      contact,
      course_module,
    }) => {
      const newUser = {
        name,
        email,
        password,
        bio,
        contact,
        course_module,
      };

      api
        .post("/users", newUser)
        .then((_) => {
          successToast("Conta criada com sucesso!\nVoltando para a home");
          history.push("/");
        })
        .catch((err) => {
          console.log(err);
          errorToast("Ops! algo deu errado");
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
              history.push("/login");
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
            <h2>Crie sua conta</h2>
            <small>Rápido e grátis, vamos nessa</small>
            <StyledForm onSubmit={form.handleSubmit}>
              {form.step === 0 && (
                <>
                  <Input
                    label="Nome"
                    type="text"
                    {...name.inputProps}
                    helperText={name.error}
                  />
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
                  <Input
                    label="Confirmar Senha"
                    type={pswrdVisible ? "text" : "password"}
                    {...confirmPassword.inputProps}
                    helperText={confirmPassword.error}
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
                  <Button
                    btnColor="light-gray"
                    type="button"
                    onClick={form.nextStep}
                  >
                    Avançar
                  </Button>
                </>
              )}
              {form.step === 1 && (
                <>
                  <Input
                    label="Bio"
                    type="text"
                    {...bio.inputProps}
                    helperText={bio.error}
                  />
                  <Input
                    label="Telefone"
                    type="tel"
                    {...contact.inputProps}
                    helperText={contact.error}
                  />
                  <Select
                    label="Selecionar módulo"
                    {...course_module.inputProps}
                    helperText={course_module.error}
                  >
                    <option value="">Selecione o seu módulo</option>
                    <option value="Modulo 1: Front End - Iniciante)">
                      Módulo 1
                    </option>
                    <option value="Modulo 2: Front End - Intermediário)">
                      Módulo 2
                    </option>
                    <option value="Modulo 3: Front End - Avançado)">
                      Módulo 3
                    </option>
                    <option value="Modulo 4: Back End - Iniciante)">
                      Módulo 4
                    </option>
                    <option value="Modulo 5: Back End - Intermediário)">
                      Módulo 5
                    </option>
                    <option value="Modulo 6: Back End - Avançado)">
                      Módulo 6
                    </option>
                  </Select>
                  <Button
                    btnColor="light-gray"
                    type="button"
                    onClick={form.previousStep}
                  >
                    Voltar
                  </Button>
                  <Button btnColor="negative" type="submit">
                    Enviar
                  </Button>
                </>
              )}
            </StyledForm>
          </FlexSurface>
        </SlideDown>
      </div>
    </>
  );
}
