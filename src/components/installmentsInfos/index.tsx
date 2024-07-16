import { InterestPercentage, TotalAmout } from "./styles";
import { localizeNumber } from "../../utils/localizeNumber";
import Flag from "../flag";

interface Props {
  totalAmount: number;
  discount: number;
  isBestInstallment?: boolean;
}

export default function InstallmentInfos({
  totalAmount,
  discount,
  isBestInstallment,
}: Props) {
  const localizedAmout: string = localizeNumber(totalAmount);
  const isFlagVisible: boolean | undefined = isBestInstallment && discount > 0;

  return (
    <>
      <TotalAmout>{`Total: ${localizedAmout}`}</TotalAmout>
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
