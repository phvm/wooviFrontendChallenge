import { useContext, useState } from "react";

import LogoContainer from "../../components/logoContainer";
import PageMessage from "../../components/pageMessage";
import SafePayment from "../../components/safePayment";
import PaymentInfos from "../../components/paymentInfos";
import { UserContext } from "../../utils/contexts/UserContext";
import { PaymentContext } from "../../utils/contexts/PaymentContext";

import qrcodeplaceholder from "../../assets/qrcode.svg";
import { localizeNumber } from "../../utils/localizeNumber";
import { PageContainer, QRCodeContainer, QRCodeImg } from "./styles";

import FileCopyIcon from "@mui/icons-material/FileCopy";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import Links from "../../utils/constants";
import ActionButton from "../../components/actionButton";

export default function PixCreditCardPage() {
  const { userInfo } = useContext(UserContext);
  const { selectedPayment } = useContext(PaymentContext);

  const navigate = useNavigate();

  const [qrcode, setQrcode] = useState<string>("codigo do qr code!");
  const { paymentInstallments, handleInstallmentContextChange } =
    useContext(PaymentContext);

  const localizedInstallments: string = localizeNumber(
    selectedPayment.amount / selectedPayment.installments
  );

  function copyQRCode() {
    navigator.clipboard.writeText(qrcode);
    toast.info("Código do Pix copiado!", { autoClose: 3000 });
  }

  function handleButtonClick() {
    copyQRCode();
    const payments = [...paymentInstallments];
    payments[0].isPaid = true;
    handleInstallmentContextChange(payments);
    toast.info("Você será redirecionado em alguns instantes", {
      autoClose: 3000,
    });
    setTimeout(() => navigate(Links.creditCardInstallments), 4000);
  }

  return (
    <>
      <header>
        <LogoContainer />
      </header>
      <PageContainer>
        <PageMessage>{`${userInfo.name}, pague a entrada de ${localizedInstallments} pelo Pix`}</PageMessage>
        <QRCodeContainer>
          <QRCodeImg src={qrcodeplaceholder} alt="QRCode para pagamento" />
        </QRCodeContainer>
        <ActionButton
          buttonValue={qrcode}
          content="Clique para copiar o QR Code"
          handleButtonClick={() => handleButtonClick()}
          endIcon={<FileCopyIcon />}
        />
        <PaymentInfos
          paymentIdentifier={selectedPayment.identifier}
          paymentAmount={selectedPayment.amount}
        />
        <SafePayment />
      </PageContainer>
    </>
  );
}
