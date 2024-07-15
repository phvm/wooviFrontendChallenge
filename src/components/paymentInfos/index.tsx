import { Typography } from "@mui/material";
import { localizeNumber } from "../../utils/localizeNumber";
import ContentDivider from "../contentDivider";
import InstallmentsStepper from "../installmentsStepper";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {
  DeadlineLabel,
  DividerContent,
  Identifier,
  IdentifierLabel,
  PaymentDeadline,
  WorkingGuide,
} from "./styles";

interface Props {
  paymentIdentifier: string;
  paymentAmount: number;
}

export default function PaymentInfos({
  paymentAmount,
  paymentIdentifier,
}: Props) {
  function getFormatDeadline() {
    const date = new Date();
    date.setMinutes(date.getMinutes() + 30);

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${day}/${month}/${year} - ${hours}:${minutes}`;
  }

  const deadlineTime: string = getFormatDeadline();

  return (
    <>
      <DeadlineLabel variant="caption">Prazo de pagamento: </DeadlineLabel>
      <PaymentDeadline variant="caption">{deadlineTime}</PaymentDeadline>
      <ContentDivider />
      <InstallmentsStepper />
      <ContentDivider />
      <DividerContent>
        <Typography variant="caption">CET: 0,5%</Typography>
        <Typography variant="caption">{`Total: R$ ${localizeNumber(paymentAmount)}`}</Typography>
      </DividerContent>
      <ContentDivider />
      <DividerContent>
        <WorkingGuide variant="caption">Como funciona?</WorkingGuide>
        <ExpandLessIcon />
      </DividerContent>
      <ContentDivider />
      <IdentifierLabel variant="caption">Identificador: </IdentifierLabel>
      <Identifier variant="caption">{paymentIdentifier}</Identifier>
    </>
  );
}
