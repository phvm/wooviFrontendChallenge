import { InterestPercentage, TotalAmout } from "./styles";
import Flag from "../flag";

interface Props {
  totalAmount: string;
  discount: number;
  isBestInstallment?: boolean;
}

export default function InstallmentInfos({
  totalAmount,
  discount,
  isBestInstallment,
}: Props) {
  const isFlagVisible: boolean | undefined = isBestInstallment && discount > 0;

  return (
    <>
      <TotalAmout>{`Total: R$ ${totalAmount}`}</TotalAmout>
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
