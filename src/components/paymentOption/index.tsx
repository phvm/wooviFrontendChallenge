import { Typography } from "@mui/material";
import { OptionButton } from "./style";
import SelectedRadio from "../selectedRadio";

interface Props {
  children: JSX.Element;
  selectedValue: string;
  installments: string;
  installmentValue: number;
  handleRadioChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleButtonClick: (value: string) => void;
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
    <OptionButton
      sx={{ ...containerStyle }}
      variant="outlined"
      type="button"
      disableRipple
      onClick={() => handleButtonClick(installments)}
    >
      <Typography>{`${installments}x R$ ${installmentValue}`}</Typography>
      {children}
      <SelectedRadio
        handleRadioChange={handleRadioChange}
        installmentKey={installments}
        isSelected={isSelected}
      />
    </OptionButton>
  );
}
