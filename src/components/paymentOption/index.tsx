import { Typography } from "@mui/material";
import { RadioInstallmentContainer, OptionContainer } from "./style";
import SelectedRadio from "../selectedRadio";

interface Props {
  children: JSX.Element;
  selectedValue: string;
  installments: string;
  installmentValue: number;
  handleRadioChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function PaymentOption({
  children,
  installments,
  installmentValue,
  selectedValue,
  handleRadioChange,
  handleButtonClick,
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
    <OptionContainer sx={{ ...containerStyle }}>
      <SelectedRadio
        handleRadioChange={handleRadioChange}
        installmentKey={installments}
        isSelected={isSelected}
      />
    </OptionContainer>
  );
}
