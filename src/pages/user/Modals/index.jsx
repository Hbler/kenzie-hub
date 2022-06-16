import { useForm, useInput, useSelect } from "lx-react-form";
import { IoClose } from "react-icons/io5";

import api from "../../../service/api";
import Button from "../../../components/buttons/buttons";
import { ModalBG } from "./style";
import { StyledForm } from "../../../components/form/style";
import { FlexSurface } from "../../../components/surface/style";
import { ModalHeader } from "../../../components/header/style";
import { Input, Select } from "../../../components/input";
import { errorToast, successToast } from "../../../components/toasts";
import { useEffect, useRef } from "react";
import { SlideUp } from "../../../components/frames";

export const AddTech = ({ setAddTech, setCurrentUser }) => {
  const addModal = useRef();

  const title = useInput({
    name: "title",
    minLength: 3,
    errorText: {
      required: "Preencha o campo para continuar",
      minLength: "O nome deve ter no mínimo 3 characteres",
    },
  });

  const status = useSelect({
    name: "status",
    errorText: {
      required: "Escolha uma opção para continuar",
    },
  });

  const form = useForm({
    clearFields: true,
    formFields: [title, status],
    submitCallback: (formData) => {
      api
        .post("/users/techs", formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@kenzieHub.token")}`,
          },
        })
        .then((_) => {
          api
            .get(`/users/${localStorage.getItem("@kenzieHub.id")}`)
            .then((res) => {
              setCurrentUser({ ...res.data });
            })
            .catch((err) => console.log(err));

          successToast("Tecnologia Adicionada!");
          setAddTech(false);
        })
        .catch((err) => {
          console.log(err);
          errorToast("Ops! Algo deu errado...");
        });
    },
  });

  useEffect(() => {
    function handleOutClick(event) {
      const target = event.target;
      //Verifico se esse elemento é a referência ou está contida na referência
      if (!addModal.current?.contains(target)) {
        setAddTech(false);
      }
    }
    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, [setAddTech]);

  return (
    <ModalBG>
      <SlideUp>
        <div ref={addModal}>
          <ModalHeader>
            <h3>Cadastrar Tecnologia</h3>
            <button
              onClick={() => {
                setAddTech(false);
              }}
            >
              <IoClose />
            </button>
          </ModalHeader>
          <FlexSurface>
            <StyledForm onSubmit={form.handleSubmit}>
              <Input
                label="Tecnologia"
                type="text"
                {...title.inputProps}
                helperText={title.error}
              />
              <Select
                label="Selecionar status"
                {...status.inputProps}
                helperText={status.error}
              >
                <option value="">Selecione o nível</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </Select>
              <Button>Cadastrar</Button>
            </StyledForm>
          </FlexSurface>
        </div>
      </SlideUp>
    </ModalBG>
  );
};

export const EditTech = ({ setCurrentUser, setEditTech, clickedTech }) => {
  const editModal = useRef();

  const title = useInput({
    name: "title",
    initialValue: clickedTech.title,
    minLength: 3,
    errorText: {
      required: "Preencha o campo para continuar",
      minLength: "O nome deve ter no mínimo 3 characteres",
    },
  });

  const status = useSelect({
    name: "status",
    initialValue: clickedTech.status,
    errorText: {
      required: "Escolha uma opção para continuar",
    },
  });

  const form = useForm({
    clearFields: true,
    formFields: [title, status],
    submitCallback: (formData) => {
      console.log(formData);
      api
        .post(`/users/techs/${clickedTech.id}`, formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@kenzieHub.token")}`,
          },
        })
        .then((_) => {
          api
            .get(`/users/${localStorage.getItem("@kenzieHub.id")}`)
            .then((res) => {
              setCurrentUser({ ...res.data });
            })
            .catch((err) => console.log(err));

          successToast("Tecnologia Atualizada!");
          setEditTech(false);
        })
        .catch((err) => {
          console.log(err);
          errorToast("Ops! Algo deu errado...");
        });
    },
  });

  useEffect(() => {
    function handleOutClick(event) {
      const target = event.target;
      //Verifico se esse elemento é a referência ou está contida na referência
      if (!editModal.current?.contains(target)) {
        setEditTech(false);
      }
    }
    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, [setEditTech]);

  return (
    <ModalBG>
      <SlideUp>
        <div ref={editModal}>
          <ModalHeader>
            <h3>Editar Tecnologia</h3>
            <button
              onClick={() => {
                setEditTech(false);
              }}
            >
              <IoClose />
            </button>
          </ModalHeader>
          <FlexSurface>
            <StyledForm onSubmit={form.handleSubmit}>
              <Input
                label="Tecnologia"
                type="text"
                {...title.inputProps}
                helperText={title.error}
              />
              <Select
                label="Selecionar status"
                {...status.inputProps}
                helperText={status.error}
              >
                <option value="">Selecione o nível</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </Select>
              <Button>Salvar Alterações</Button>
            </StyledForm>
          </FlexSurface>
        </div>
      </SlideUp>
    </ModalBG>
  );
};

export const ConfirmDelete = ({
  setCurrentUser,
  setDeleteTech,
  clickedTech,
}) => {
  const deleteModal = useRef();

  const removeTech = () => {
    api
      .delete(`/users/techs/${clickedTech.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@kenzieHub.token")}`,
        },
      })
      .then((_) => {
        api
          .get(`/users/${localStorage.getItem("@kenzieHub.id")}`)
          .then((res) => {
            setCurrentUser({ ...res.data });
          })
          .catch((err) => console.log(err));

        successToast("Tecnologia removida!");
        setDeleteTech(false);
      })
      .catch((err) => {
        console.log(err);
        errorToast("Ops! Algo deu errado...");
      });
  };

  useEffect(() => {
    function handleOutClick(event) {
      const target = event.target;
      //Verifico se esse elemento é a referência ou está contida na referência
      if (!deleteModal.current?.contains(target)) {
        setDeleteTech(false);
      }
    }
    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, [setDeleteTech]);

  return (
    <ModalBG>
      <SlideUp>
        <FlexSurface
          flexDirection="column"
          alignItems="strech"
          gap="1rem"
          ref={deleteModal}
        >
          <h3>Apagar {clickedTech.title}?</h3>
          <Button onClick={removeTech}>Apagar</Button>
          <Button
            btnColor="light-gray"
            onClick={() => {
              setDeleteTech(false);
            }}
          >
            Cancelar
          </Button>
        </FlexSurface>
      </SlideUp>
    </ModalBG>
  );
};
