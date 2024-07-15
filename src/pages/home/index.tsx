import { useNavigate } from "react-router-dom";

import LogoContainer from "../../components/logoContainer";
import PageMessage from "../../components/pageMessage";
import TextInput from "../../components/textInput";
import { NavigationButton } from "../../components/navigationButton";

import { UserContext } from "../../utils/contexts/UserContext";

import { PageContainer } from "./styles";
import { ChangeEvent, useContext, useState } from "react";
import { UserInfo } from "../../types/apiTypes";
import { toast } from "react-toastify";
import Links from "../../utils/constants";

export function Home() {
  const navigate = useNavigate();

  const { handleUserContextChange } = useContext(UserContext);

  const [userInfos, setUserInfo] = useState<UserInfo>({ name: "", cpf: "" });
  const [isInputEmpty, setIsInputEmpty] = useState<{
    emptyName: boolean;
    emptyCpf: boolean;
  }>({ emptyName: false, emptyCpf: false });

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setIsInputEmpty(
      event.target.value === ""
        ? { ...isInputEmpty, emptyName: true }
        : { ...isInputEmpty, emptyName: false }
    );
    setUserInfo({ ...userInfos, name: event.target.value });
  }

  function handleCPFChange(event: ChangeEvent<HTMLInputElement>) {
    setIsInputEmpty(
      event.target.value === ""
        ? { ...isInputEmpty, emptyCpf: true }
        : { ...isInputEmpty, emptyCpf: false }
    );
    setUserInfo({ ...userInfos, cpf: event.target.value });
  }

  function handleButtonClick() {
    const isNameEmpty: boolean =
      userInfos.name === "" ||
      userInfos.name === null ||
      userInfos.name === undefined;
    const isCPFEmpty: boolean =
      userInfos.cpf === "" ||
      userInfos.cpf === null ||
      userInfos.cpf === undefined;
    const isCPFIncomplete: boolean = userInfos.cpf.length < 11;
    if (isNameEmpty) {
      setIsInputEmpty({ ...isInputEmpty, emptyName: true });
      return toast.error("O nome precisa ser preenchido");
    }
    if (isCPFEmpty) {
      setIsInputEmpty({ ...isInputEmpty, emptyCpf: true });
      return toast.error("O CPF precisa ser preenchido");
    }
    if (isCPFIncomplete) {
      return toast.error("O CPF está incompleto");
    }
    toast.success("Informações preenchidas com sucesso", {
      autoClose: 2000,
    });
    handleUserContextChange(userInfos);
    navigate(Links.paymentMethod);
  }

  return (
    <>
      <header>
        <LogoContainer />
      </header>
      <PageContainer>
        <PageMessage>
          Informe seus dados para prosseguir com o pagamento
        </PageMessage>
        <TextInput
          error={isInputEmpty.emptyName}
          value={userInfos.name}
          placeholder="Nome"
          label="Nome"
          helperText="Campo obrigatório"
          handleInputChange={handleNameChange}
          required
        />
        <TextInput
          error={isInputEmpty.emptyCpf}
          value={userInfos.cpf}
          label="CPF"
          placeholder="CPF"
          helperText={
            isInputEmpty.emptyCpf
              ? "Campo Obrigatório"
              : userInfos.cpf.length < 11
                ? "CPF incompleto"
                : ""
          }
          handleInputChange={handleCPFChange}
          required
        />
        <NavigationButton content="Confirmar" handleClick={handleButtonClick} />
      </PageContainer>
    </>
  );
}
