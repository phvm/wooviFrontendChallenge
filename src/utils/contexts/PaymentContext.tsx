import { createContext, useEffect, useState } from "react";
import { SelectedPayment } from "../../types/apiTypes";

interface Props {
  children: JSX.Element;
}

interface PaymentContext {
  selectedPayment: SelectedPayment;
  handlePaymentContextChange: (selectedPayment: SelectedPayment) => void;
  paymentInstallments: Installment[];
  handleInstallmentContextChange: (installments: Installment[]) => void;
}

type Installment = { number: number; value: number; isPaid: boolean };

export const PaymentContext = createContext<PaymentContext>({
  selectedPayment: {
    installments: 0,
    amount: 0,
    refound: 0,
    identifier: "",
  },
  handlePaymentContextChange: () => {},
  paymentInstallments: [],
  handleInstallmentContextChange: () => {},
});

export default function PaymentContextProvider({ children }: Props) {
  function handlePaymentContextChange(selectedPayment: SelectedPayment) {
    setPaymentOption({ ...selectedPayment });
  }

  function handleInstallmentContextChange(installments: Installment[]) {
    setPaymentInstallments(installments);
  }

  const [selectedPayment, setPaymentOption] = useState<SelectedPayment>({
    installments: 0,
    amount: 0,
    refound: 0,
    identifier: "",
  });

  const [paymentInstallments, setPaymentInstallments] = useState<Installment[]>(
    []
  );

  useEffect(() => {
    const installments: Installment[] = [];
    for (let i = 1; i <= selectedPayment.installments; i++) {
      installments.push({
        number: i,
        isPaid: false,
        value: selectedPayment.amount / selectedPayment.installments,
      });
    }
    setPaymentInstallments(installments);
  }, [selectedPayment]);

  return (
    <PaymentContext.Provider
      value={{
        selectedPayment,
        handlePaymentContextChange,
        paymentInstallments,
        handleInstallmentContextChange,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
}
