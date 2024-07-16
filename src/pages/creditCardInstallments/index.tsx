import { useContext } from "react";

import LogoContainer from "../../components/logoContainer";
import PageMessage from "../../components/pageMessage";
import CreditCardForm from "../../components/creditCardForm";
import SafePayment from "../../components/safePayment";

import { PageContainer } from "./styles";

import { UserContext } from "../../utils/contexts/UserContext";
import { PaymentContext } from "../../utils/contexts/PaymentContext";
import PaymentInfos from "../../components/paymentInfos";
import ActionButton from "../../components/actionButton";
import { toast } from "react-toastify";

export default function CreditCardInstallments() {
  const { userInfo } = useContext(UserContext);
  const {
    selectedPayment,
    paymentInstallments,
    handleInstallmentContextChange,
  } = useContext(PaymentContext);

  function handleButtonClick() {
    const payments = [...paymentInstallments];
    const notPaidIndex = payments.findIndex(
      (installment) => !installment.isPaid
    );
    if (payments[notPaidIndex]) {
      payments[notPaidIndex].isPaid = true;
      handleInstallmentContextChange(payments);
      return toast.success("Pagamento realizado com sucesso");
    }
    return toast.error("Não há mais pagamentos a serem realizados");
  }
  return (
    <>
      <header>
        <LogoContainer />
      </header>
      <PageContainer>
        <PageMessage>{`${userInfo.name.split(" ")[0]}, pague o restante em ${selectedPayment.installments - 1}x no cartão`}</PageMessage>
        <CreditCardForm userInfo={userInfo} />
        <ActionButton content="Pagar" handleButtonClick={handleButtonClick} />
        <PaymentInfos
          paymentIdentifier={selectedPayment.identifier}
          paymentAmount={selectedPayment.amount}
        />
        <SafePayment />
      </PageContainer>
    </>
  );
}
