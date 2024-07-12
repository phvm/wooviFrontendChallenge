import { CashbackPercent, CashbackFlag } from "./styles";
import Flag from "../flag";

interface Props {
  cashbackPercentage: number;
  cashbackAmount: number;
}

export default function CashbackInfos({
  cashbackPercentage,
  cashbackAmount,
}: Props) {
  const cashback: number = cashbackPercentage * 100;

  return (
    <>
      <CashbackPercent>{`Ganhe ${cashback} de Cashback`}</CashbackPercent>
      <Flag
        message={
          <CashbackFlag variant="caption">
            <b>{`🤑 R$ ${cashbackAmount} `}</b>
            de volta no seu Pix na hora
          </CashbackFlag>
        }
      />
    </>
  );
}
