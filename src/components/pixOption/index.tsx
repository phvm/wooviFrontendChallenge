import { Typography } from "@mui/material";
import { CashbackPercent } from "./style";

interface Props {
  cashbackPercentage: number;
  cashbackAmount: number;
}

export default function PixOption({
  cashbackPercentage,
  cashbackAmount,
}: Props) {
  const cashback: number = cashbackPercentage * 100;

  return (
    <>
      <CashbackPercent>{`Ganhe ${cashback} de Cashback`}</CashbackPercent>
      <Typography>{`🤑 R$ ${cashbackAmount} de volta no seu Pix na hora`}</Typography>
    </>
  );
}
