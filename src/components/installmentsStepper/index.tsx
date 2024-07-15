import { useContext, useState } from "react";

import { PaymentContext } from "../../utils/contexts/PaymentContext";

import { Step, StepLabel } from "@mui/material";

import { localizeNumber } from "../../utils/localizeNumber";

import {
  LabelContainer,
  PaymentParcel,
  PaymentValue,
  PaymentStepper,
} from "./styles";

type Step = { number: number; value: number; isPaid: boolean };

export default function InstallmentsStepper() {
  const stepsTest: Step[] = [
    {
      value: 10,
      isPaid: false,
      number: 1,
    },
    {
      value: 10,
      isPaid: false,
      number: 2,
    },
  ];
  const { selectedPayment } = useContext(PaymentContext);

  const steps: Step[] = [];
  for (let i = 1; i <= selectedPayment.installments; i++) {
    steps.push({
      number: i,
      isPaid: false,
      value: selectedPayment.amount / selectedPayment.installments,
    });
  }

  const [paymentSteps, setPaymentSteps] = useState<Step[]>(stepsTest);

  const activeStep = paymentSteps.find((paymentStep: Step) => {
    return !paymentStep.isPaid;
  });

  return (
    <PaymentStepper activeStep={activeStep?.number} orientation="vertical">
      {paymentSteps.map((paymentStep: Step) => (
        <Step>
          <StepLabel>
            <LabelContainer>
              <PaymentParcel>
                {paymentStep.number === 1
                  ? `${paymentStep.number}ª entrada no Pix`
                  : `${paymentStep.number}ª no cartão`}
              </PaymentParcel>
              <PaymentValue>{`R$ ${localizeNumber(paymentStep.value)}`}</PaymentValue>
            </LabelContainer>
          </StepLabel>
        </Step>
      ))}
    </PaymentStepper>
  );
}
