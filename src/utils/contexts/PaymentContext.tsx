import { createContext, useState } from "react";
import { PaymentOption } from "../../types/apiTypes";

interface Props {
  children: JSX.Element;
}

interface PaymentContext {
  paymentOption: PaymentOption;
  handlePaymentContextChange: (selectedPayment: PaymentOption) => void;
}

export const PaymentContext = createContext<PaymentContext>({
  paymentOption: {
    installments: 0,
    amount: 0,
    refound: 0,
  },
  handlePaymentContextChange: () => {},
});

export default function PaymentContextProvider({ children }: Props) {
  function handlePaymentContextChange(selectedPayment: PaymentOption) {
    setPaymentOption({ ...selectedPayment });
  }

  const [paymentOption, setPaymentOption] = useState<PaymentOption>({
    installments: 0,
    amount: 0,
    refound: 0,
  });
  return (
    <PaymentContext.Provider
      value={{ paymentOption, handlePaymentContextChange }}
    >
      {children}
    </PaymentContext.Provider>
  );
}
