import { useContext, useState } from "react";

import LogoContainer from "../../components/logoContainer";
import PageMessage from "../../components/pageMessage";
import SafePayment from "../../components/safePayment";
import ContentDivider from "../../components/contentDivider";
import InstallmentsStepper from "../../components/installmentsStepper";

import { UserContext } from "../../utils/contexts/UserContext";
import { PaymentContext } from "../../utils/contexts/PaymentContext";

import qrcodeplaceholder from "../../assets/qrcode.svg";
import { localizeNumber } from "../../utils/localizeNumber";
import {
  PageContainer,
  QRCodeContainer,
  CopyButton,
  QRCodeImg,
  DeadlineLabel,
  PaymentDeadline,
  DividerContent,
  WorkingGuide,
  Identifier,
  IdentifierLabel,
} from "./styles";

import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { toast } from "react-toastify";

import { Typography } from "@mui/material";

export default function PixCreditCardPage() {
  const { userInfo } = useContext(UserContext);
  const { paymentOption } = useContext(PaymentContext);

  const [qrcode, setQrcode] = useState<{ code: string; identifier: string }>({
    code: "",
    identifier: "2c1b951f356c4680b13ba1c9fc889c47",
  });

  const localizedInstallments: string = localizeNumber(
    paymentOption.amount / paymentOption.installments
  );

  function copyQRCode() {
    navigator.clipboard.writeText(qrcode.code);
    toast.info("Código do Pix copiado!", { autoClose: 3000 });
  }

  function getFormatedDate() {
    const date = new Date();
    date.setMinutes(date.getMinutes() + 30);

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${day}/${month}/${year} - ${hours}:${minutes}`;
  }

  const deadlineTime: string = getFormatedDate();

  return (
    <>
      <header>
        <LogoContainer />
      </header>
      <PageContainer>
        <PageMessage>{`${userInfo.name}, pague a entrada de R$ ${localizedInstallments} pelo Pix`}</PageMessage>
        <QRCodeContainer>
          <QRCodeImg src={qrcodeplaceholder} alt="QRCode para pagamento" />
        </QRCodeContainer>
        <CopyButton
          value={qrcode.code}
          variant="contained"
          endIcon={<FileCopyIcon />}
          onClick={() => {
            copyQRCode();
          }}
        >
          Clique para copiar o QR Code
        </CopyButton>
        <DeadlineLabel variant="caption">Prazo de pagamento: </DeadlineLabel>
        <PaymentDeadline variant="caption">{deadlineTime}</PaymentDeadline>
        <ContentDivider />
        <InstallmentsStepper />
        <ContentDivider />
        <DividerContent>
          <Typography variant="caption">CET: 0,5%</Typography>
          <Typography variant="caption">{`Total: R$ ${localizeNumber(paymentOption.amount)}`}</Typography>
        </DividerContent>
        <ContentDivider />
        <DividerContent>
          <WorkingGuide variant="caption">Como funciona?</WorkingGuide>
          <ExpandLessIcon />
        </DividerContent>
        <ContentDivider />
        <IdentifierLabel variant="caption">Identificador: </IdentifierLabel>
        <Identifier variant="caption">{qrcode.identifier}</Identifier>
        <SafePayment />
      </PageContainer>
    </>
  );
}
