import { Typography } from "@mui/material";

interface Props {
  totalAmount: number;
  discount: number;
}

export default function InstallmentOption({ totalAmount, discount }: Props) {
  const hasDiscount: boolean = discount > 0;

  return (
    <>
      <Typography>{`Total: R$ ${totalAmount}`}</Typography>
      {hasDiscount && (
        <Typography>{`-${discount * 100} de juros: Melhor opção de parcelamento`}</Typography>
      )}
    </>
  );
}
