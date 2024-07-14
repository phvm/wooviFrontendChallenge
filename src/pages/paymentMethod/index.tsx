import { ChangeEvent, useState } from "react";

import { getData } from "../../fakeAPI/getData";

import LogoContainer from "../../components/logoContainer";
import CashbackInfos from "../../components/cashbackInfos";
import InstallmentInfos from "../../components/installmentsInfos";
import PaymentButton from "../../components/paymentButton";
import SafePayment from "../../components/safePayment";
import { PageMessage } from "../../components/pageMessage";

import { PageContainer, OptionsList, SingleOption, OptionChip } from "./styles";

import type { UserInfo, PaymentOption } from "../../types/apiTypes";
import { Button } from "@mui/material";

export default function PaymentMethod() {
  const data = getData();
  const [userInfo, setUserInfo] = useState<UserInfo>(data.userInfo);
  const [paymentOptions, setPaymentOptions] = useState<{
    pixOption: PaymentOption;
    installmentOptions: PaymentOption[];
  }>(data.paymentOptions);

  const [selectedValue, setSelectedValue] = useState<string>("");

  const bestInstallment: PaymentOption = selectedBestInstallment();

  function handleRadioChange(event: ChangeEvent<HTMLInputElement>) {
    setSelectedValue(event.target.value);
  }

  function handleOptionClick(installment: string) {
    setSelectedValue(installment);
  }

  function selectedBestInstallment() {
    const bestOption: PaymentOption = paymentOptions.installmentOptions.reduce(
      (
        currentInstallment: PaymentOption,
        bestDiscountInstallment: PaymentOption
      ) => {
        return currentInstallment.refound >= bestDiscountInstallment.refound
          ? currentInstallment
          : bestDiscountInstallment;
      }
    );

    return bestOption;
  }

  return (
    <PageContainer>
      <LogoContainer />
      <PageMessage>{`${userInfo.name}, como você quer pagar?`}</PageMessage>
      <SingleOption>
        <OptionChip label="Pix" />
        <PaymentButton
          handleOptionClick={handleOptionClick}
          selectedValue={selectedValue}
          installments={paymentOptions.pixOption.installments}
          installmentValue={paymentOptions.pixOption.amount}
          handleRadioChange={handleRadioChange}
        >
          <CashbackInfos
            cashbackAmount={
              paymentOptions.pixOption.amount * paymentOptions.pixOption.refound
            }
            cashbackPercentage={paymentOptions.pixOption.refound}
          />
        </PaymentButton>
      </SingleOption>
      <OptionsList>
        <OptionChip label="Pix Parcelado" />
        {paymentOptions.installmentOptions.map((installment) => {
          return (
            <PaymentButton
              key={installment.installments}
              handleOptionClick={handleOptionClick}
              handleRadioChange={handleRadioChange}
              installmentValue={installment.amount / installment.installments}
              selectedValue={selectedValue}
              installments={installment.installments}
            >
              <InstallmentInfos
                isBestInstallment={
                  bestInstallment?.installments === installment.installments
                }
                discount={installment.refound}
                totalAmount={installment.amount}
              />
            </PaymentButton>
          );
        })}
      </OptionsList>
      <Button type="button" disableRipple />
      <SafePayment />
    </PageContainer>
  );
}
