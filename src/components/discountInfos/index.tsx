import { Typography } from "@mui/material";
import { InterestPercentage } from "./styles";
import Flag from "../flag";

interface Props {
  totalAmount: string;
  discount: number;
  isBestInstallment?: boolean;
}

export default function DiscountInfos({
  totalAmount,
  discount,
  isBestInstallment,
}: Props) {
  function shouldDisplayFlag(): boolean {
    if (isBestInstallment) {
      return isBestInstallment && discount > 0;
    }
    return false;
  }

  const isFlagVisible: boolean = shouldDisplayFlag();

  return (
    <>
      <Typography>{`Total: R$ ${totalAmount}`}</Typography>
      {isFlagVisible && (
        <Flag
          message={
            <InterestPercentage variant="caption">
              <b>{`-${discount * 100}% de juros: `}</b>
              Melhor opção de parcelamento
            </InterestPercentage>
          }
        />
      )}
    </>
  );
}
