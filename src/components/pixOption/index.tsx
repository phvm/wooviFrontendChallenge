import { Typography } from "@mui/material";
import { OptionContainer, CashbackPercent } from "./style";
import SelectedRadio from "../selectedRadio";

interface Props {
  installments: string;
  installmentValue: number;
  cashbackPercentage: number;
  cashbackAmount: number;
  selectedValue: string;
  handleRadioChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleButtonClick: (value: string) => void;
}

export default function PixOption({
  installments,
  installmentValue,
  cashbackPercentage,
  cashbackAmount,
  selectedValue,
  handleRadioChange,
  handleButtonClick,
}: Props) {
  const cashback: number = cashbackPercentage * 100;
  const isSelected: boolean = selectedValue === installments;

  return (
    <OptionContainer
      sx={{}}
      variant="outlined"
      type="button"
      disableRipple
      onClick={() => handleButtonClick(installments)}
    >
      <Typography>{`${installments}x R$ ${installmentValue}`}</Typography>
      <CashbackPercent>{`Ganhe ${cashback} de Cashback`}</CashbackPercent>
      <Typography>{`🤑 R$ ${cashbackAmount} de volta no seu Pix na hora`}</Typography>
      <SelectedRadio
        handleRadioChange={handleRadioChange}
        installmentKey={installments}
        isSelected={isSelected}
      />
    </OptionContainer>
  );
}
