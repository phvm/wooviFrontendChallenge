import { Typography } from "@mui/material";
import { OptionContainer } from "./style";
import SelectedRadio from "../selectedRadio";

interface Props {
  installments: string;
  installmentValue: number;
  totalAmount: number;
  discount: number;
  selectedValue: string;
  handleRadioChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleButtonClick: (value: string) => void;
}

export default function InstallmentOption({
  installments,
  installmentValue,
  totalAmount,
  discount,
  selectedValue,
  handleRadioChange,
  handleButtonClick,
}: Props) {
  const hasDiscount: boolean = discount > 0;
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
      variant="outlined"
      type="button"
      disableRipple
      onClick={() => handleButtonClick(installments)}
    >
      <Typography
        style={{ display: "block" }}
      >{`${installments}x R$ ${installmentValue}`}</Typography>
      <Typography>{`Total: R$ ${totalAmount}`}</Typography>
      {hasDiscount && (
        <Typography>{`-${discount * 100} de juros: Melhor opção de parcelamento`}</Typography>
      )}
      <SelectedRadio
        handleRadioChange={handleRadioChange}
        installmentKey={installments}
        isSelected={isSelected}
      />
    </OptionContainer>
  );
}
