import { useContext, useState } from "react";

import { PaymentContext } from "../../utils/contexts/PaymentContext";

import { ListStepper } from "./styles";

import { Step, StepContent, StepLabel } from "@mui/material";

interface Props {}

type Step = { number: number; value: number; isDone: boolean };

export default function InstallmentsStepper() {
  const { paymentOption } = useContext(PaymentContext);

  const steps: Step[] = [];
  for (let i = 1; i <= paymentOption.installments; i++) {
    steps.push({
      number: i,
      isDone: false,
      value: paymentOption.amount / paymentOption.installments,
    });
  }

  const [paymentSteps, setPaymentSteps] = useState<Step[]>(steps);

  return (
    <ListStepper orientation="vertical" alternativeLabel>
      {paymentSteps.map((paymentStep: Step) => (
        <Step key={paymentStep.number}>
          <StepLabel></StepLabel>
          {`x ${paymentStep.value}`}
          <StepContent></StepContent>
        </Step>
      ))}
    </ListStepper>
  );
}
