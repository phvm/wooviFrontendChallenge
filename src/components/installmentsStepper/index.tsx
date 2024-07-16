import { useContext } from "react";

import { PaymentContext } from "../../utils/contexts/PaymentContext";

import { Step, StepLabel } from "@mui/material";

import { localizeNumber } from "../../utils/localizeNumber";

import StepperIcons from "../stepperIcons";

import {
  LabelContainer,
  PaymentParcel,
  PaymentValue,
  PaymentStepper,
} from "./styles";

type Step = { number: number; value: number; isPaid: boolean };

export default function InstallmentsStepper() {
  const { paymentInstallments } = useContext(PaymentContext);

  const activeStep = paymentInstallments.find((paymentStep: Step) => {
    return !paymentStep.isPaid;
  });

  return (
    <PaymentStepper
      activeStep={activeStep ? activeStep.number - 1 : 0}
      orientation="vertical"
    >
      {paymentInstallments.map((paymentStep: Step) => (
        <Step>
          <StepLabel StepIconComponent={StepperIcons}>
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
