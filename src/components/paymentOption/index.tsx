import {
  RadioInstallmentContainer,
  OptionContainer,
  InstallmentsValue,
} from "./styles";
import SelectedRadio from "../selectedRadio";
import { ChangeEvent } from "react";

interface Props {
  children: JSX.Element;
  selectedValue: string;
  installments: string;
  installmentValue: string;
  handleRadioChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleOptionClick: (installment: string) => void;
}

export default function PaymentOption({
  children,
  installments,
  installmentValue,
  selectedValue,
  handleRadioChange,
  handleOptionClick,
}: Props) {
  const isSelected: boolean = selectedValue === installments;

  const notSelectedStyles = {
    border: "2px solid #E5E5E5",
    backgroundColor: "#FFFFFF",
  };

  const isSelectedStyles = {
    border: "2px solid #03D69D",
    backgroundColor: "#F4FBF9",
  };

  const containerStyle = isSelected ? isSelectedStyles : notSelectedStyles;
  return (
    <OptionContainer
      sx={{ ...containerStyle }}
      onClick={() => handleOptionClick(installments)}
    >
      <RadioInstallmentContainer>
        <InstallmentsValue>
          <b>{`${installments}x`}</b>
          {` R$ ${installmentValue}`}
        </InstallmentsValue>
        <SelectedRadio
          handleRadioChange={handleRadioChange}
          installmentKey={installments}
          isSelected={isSelected}
        />
      </RadioInstallmentContainer>
      {children}
    </OptionContainer>
  );
}
