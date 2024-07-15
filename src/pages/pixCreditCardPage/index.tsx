import { useContext, useState } from "react";

import LogoContainer from "../../components/logoContainer";
import PageMessage from "../../components/pageMessage";
import SafePayment from "../../components/safePayment";
import PaymentInfos from "../../components/paymentInfos";
import { NavigationButton } from "../../components/navigationButton";

import { UserContext } from "../../utils/contexts/UserContext";
import { PaymentContext } from "../../utils/contexts/PaymentContext";

import qrcodeplaceholder from "../../assets/qrcode.svg";
import { localizeNumber } from "../../utils/localizeNumber";
import {
  PageContainer,
  QRCodeContainer,
  CopyButton,
  QRCodeImg,
} from "./styles";

import FileCopyIcon from "@mui/icons-material/FileCopy";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import Links from "../../utils/constants";

export default function PixCreditCardPage() {
  const { userInfo } = useContext(UserContext);
  const { selectedPayment } = useContext(PaymentContext);

  const navigate = useNavigate();

  const [qrcode, setQrcode] = useState<string>("");

  const localizedInstallments: string = localizeNumber(
    selectedPayment.amount / selectedPayment.installments
  );

  function copyQRCode() {
    navigator.clipboard.writeText(qrcode);
    toast.info("Código do Pix copiado!", { autoClose: 3000 });
  }

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
          value={qrcode}
          variant="contained"
          endIcon={<FileCopyIcon />}
          onClick={() => {
            copyQRCode();
          }}
        >
          Clique para copiar o QR Code
        </CopyButton>
        <PaymentInfos
          paymentIdentifier={selectedPayment.identifier}
          paymentAmount={selectedPayment.amount}
        />
        <NavigationButton
          content="Pagament no cartão"
          handleClick={() => navigate(Links.creditCardInstallments)}
        />
        <SafePayment />
      </PageContainer>
    </>
  );
}
