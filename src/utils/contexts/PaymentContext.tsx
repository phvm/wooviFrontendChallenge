import { createContext, useState } from "react";
import { SelectedPayment } from "../../types/apiTypes";

interface Props {
  children: JSX.Element;
}

interface PaymentContext {
  selectedPayment: SelectedPayment;
  handlePaymentContextChange: (selectedPayment: SelectedPayment) => void;
}

export const PaymentContext = createContext<PaymentContext>({
  selectedPayment: {
    installments: 0,
    amount: 0,
    refound: 0,
    identifier: "",
  },
  handlePaymentContextChange: () => {},
});

export default function PaymentContextProvider({ children }: Props) {
  function handlePaymentContextChange(selectedPayment: SelectedPayment) {
    setPaymentOption({ ...selectedPayment });
  }

  const [selectedPayment, setPaymentOption] = useState<SelectedPayment>({
    installments: 0,
    amount: 0,
    refound: 0,
    identifier: "",
  });
  return (
    <PaymentContext.Provider
      value={{ selectedPayment, handlePaymentContextChange }}
    >
      {children}
    </PaymentContext.Provider>
  );
}
