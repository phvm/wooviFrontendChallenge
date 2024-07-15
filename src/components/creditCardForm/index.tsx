import { useState, ChangeEvent } from "react";
import { UserInfo } from "../../types/apiTypes";
import { UserCard } from "../../types/componentTypes";
import TextInput from "../textInput";

interface Props {
  userInfo: UserInfo;
}
export default function CreditCardForm({ userInfo }: Props) {
  interface UserData extends UserInfo, UserCard {}
  const [isEmptyData, setIsEmptyData] = useState<{
    isEmptyName: boolean;
    isEmptyCpf: boolean;
    isEmptyCardNumber: boolean;
    isEmptyCode: boolean;
    isEmptyExpirationDate: boolean;
  }>({
    isEmptyName: false,
    isEmptyCpf: false,
    isEmptyCardNumber: false,
    isEmptyCode: false,
    isEmptyExpirationDate: false,
  });

  const [userData, setUserData] = useState<UserData>({
    name: userInfo.name,
    cpf: userInfo.cpf,
    cardNumber: "",
    code: "",
    expirationData: new Date(),
  });

  const [stringDate, setStringDate] = useState<string>("");

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setIsEmptyData(
      event.target.value === ""
        ? { ...isEmptyData, isEmptyName: true }
        : { ...isEmptyData, isEmptyName: false }
    );
    setUserData({ ...userData, name: event.target.value });
  }

  function handleCpfChange(event: ChangeEvent<HTMLInputElement>) {
    setIsEmptyData(
      event.target.value === ""
        ? { ...isEmptyData, isEmptyCpf: true }
        : { ...isEmptyData, isEmptyCpf: false }
    );
    setUserData({ ...userData, cpf: event.target.value });
  }

  function handleCardNumberChange(event: ChangeEvent<HTMLInputElement>) {
    setIsEmptyData(
      event.target.value === ""
        ? { ...isEmptyData, isEmptyCardNumber: true }
        : { ...isEmptyData, isEmptyCardNumber: false }
    );
    setUserData({ ...userData, cardNumber: event.target.value });
  }

  function handleCodeChange(event: ChangeEvent<HTMLInputElement>) {
    setIsEmptyData(
      event.target.value === ""
        ? { ...isEmptyData, isEmptyCode: true }
        : { ...isEmptyData, isEmptyCode: false }
    );
    setUserData({ ...userData, code: event.target.value });
  }

  function handleExperationDateChange(event: ChangeEvent<HTMLInputElement>) {
    setIsEmptyData(
      event.target.value === ""
        ? { ...isEmptyData, isEmptyExpirationDate: true }
        : { ...isEmptyData, isEmptyExpirationDate: false }
    );
    if (event.target.value.length === 5) {
      return;
    }
    setStringDate(event.target.value);
  }

  return (
    <>
      {" "}
      <TextInput
        helperText="Nome completo é obrigatório"
        error={isEmptyData.isEmptyName}
        required
        label="Nome completo"
        value={userData.name}
        handleInputChange={handleNameChange}
      />
      <TextInput
        helperText="CPF é obrigatório"
        error={isEmptyData.isEmptyCpf}
        required
        label="CPF"
        handleInputChange={handleCpfChange}
        value={userData.cpf}
      />
      <TextInput
        helperText="Número do cartão é obrigatório"
        error={isEmptyData.isEmptyCardNumber}
        required
        label="Número do cartão"
        value={userData.cardNumber}
        handleInputChange={handleCardNumberChange}
      />
      <TextInput
        helperText="Data de vencimento é obrigatório"
        error={isEmptyData.isEmptyExpirationDate}
        required
        label="Vencimento"
        value={stringDate}
        handleInputChange={handleExperationDateChange}
      />
      <TextInput
        helperText="CVV é obrigatório"
        error={isEmptyData.isEmptyCode}
        required
        value={userData.code}
        label="CVV"
        handleInputChange={handleCodeChange}
      />
    </>
  );
}
