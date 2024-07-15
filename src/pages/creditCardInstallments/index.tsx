import { useContext } from "react";

import LogoContainer from "../../components/logoContainer";
import PageMessage from "../../components/pageMessage";
import CreditCardForm from "../../components/creditCardForm";
import SafePayment from "../../components/safePayment";

import { PageContainer } from "./styles";

import { UserContext } from "../../utils/contexts/UserContext";
import { PaymentContext } from "../../utils/contexts/PaymentContext";
import PaymentInfos from "../../components/paymentInfos";

export default function CreditCardInstallments() {
  const { userInfo } = useContext(UserContext);
  const { selectedPayment } = useContext(PaymentContext);

  return (
    <>
      <header>
        <LogoContainer />
      </header>
      <PageContainer>
        <PageMessage>{`${userInfo.name.split(" ")[0]}, pague o restante em ${selectedPayment.installments - 1}x no cartão`}</PageMessage>
        <CreditCardForm userInfo={userInfo} />
        <PaymentInfos
          paymentIdentifier={selectedPayment.identifier}
          paymentAmount={selectedPayment.amount}
        />
        <SafePayment />
      </PageContainer>
    </>
  );
}
