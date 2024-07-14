import {
  RadioInstallmentContainer,
  OptionContainer,
  InstallmentsValue,
} from "./styles";
import SelectedRadio from "../selectedRadio";
import { ChangeEvent } from "react";
import { localizeNumber } from "../../utils/localizeNumber";

interface Props {
  children: JSX.Element;
  selectedValue: string;
  installments: number;
  installmentValue: number;
  handleRadioChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleOptionClick: (installment: string) => void;
}

function getContainerStyles(isSelected: boolean) {
  const notSelectedStyles = {
    border: "2px solid #E5E5E5",
    backgroundColor: "#FFFFFF",
  };

  const isSelectedStyles = {
    border: "2px solid #03D69D",
    backgroundColor: "#F4FBF9",
  };
  return isSelected ? isSelectedStyles : notSelectedStyles;
}

export default function PaymentButton({
  children,
  installments,
  installmentValue,
  selectedValue,
  handleRadioChange,
  handleOptionClick,
}: Props) {
  const installmentsNumber: string = installments.toString();
  const isSelected: boolean = selectedValue === installmentsNumber;
  const containerStyle = getContainerStyles(isSelected);
  const localizedInstallment: string = localizeNumber(installmentValue);

  return (
    <OptionContainer
      sx={{ ...containerStyle }}
      onClick={() => handleOptionClick(installmentsNumber)}
    >
      <RadioInstallmentContainer>
        <InstallmentsValue>
          <b>{`${installments}x`}</b>
          {` R$ ${localizedInstallment}`}
        </InstallmentsValue>
        <SelectedRadio
          handleRadioChange={handleRadioChange}
          installmentKey={installmentsNumber}
          isSelected={isSelected}
        />
      </RadioInstallmentContainer>
      {children}
    </OptionContainer>
  );
}
