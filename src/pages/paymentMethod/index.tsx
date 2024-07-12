import { ChangeEvent, useState } from "react";

import { getData } from "../../fakeAPI/getData";

import LogoContainer from "../../components/logoContainer";
import CashbackInfos from "../../components/cashbackInfos";
import InstallmentInfos from "../../components/installmentsInfos";
import PaymentOption from "../../components/paymentOption";
import SafePayment from "../../components/safePayment";

import {
  PageContainer,
  PaymentText,
  OptionsList,
  SingleOption,
  OptionChip,
} from "./styles";

import type {
  InstallmentOption,
  PixOption,
  UserInfo,
} from "../../types/apiTypes";

export default function PaymentMethod() {
  const data = getData();
  const [userInfo, setUserInfo] = useState<UserInfo>(data.userInfo);
  const [paymentOptions, setPaymentOptions] = useState<{
    pixOption: PixOption;
    installmentOptions: InstallmentOption[];
  }>(data.paymentOptions);

  const [selectedValue, setSelectedValue] = useState<string>("");

  const bestInstallment: InstallmentOption = selectedBestInstallment();

  function handleRadioChange(event: ChangeEvent<HTMLInputElement>) {
    setSelectedValue(event.target.value);
  }

  function selectedBestInstallment() {
    const bestOption: InstallmentOption =
      paymentOptions.installmentOptions.reduce(
        (
          currentInstallment: InstallmentOption,
          bestDiscountInstallment: InstallmentOption
        ) => {
          return currentInstallment.discount >= bestDiscountInstallment.discount
            ? currentInstallment
            : bestDiscountInstallment;
        }
      );

    return bestOption;
  }

  function localizeNumber(value: number) {
    return value.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  return (
    <PageContainer>
      <LogoContainer />
      <PaymentText>{`${userInfo.name}, como você quer pagar?`}</PaymentText>
      <SingleOption>
        <OptionChip label="Pix" />
        <PaymentOption
          selectedValue={selectedValue}
          installments={paymentOptions.pixOption.installments}
          installmentValue={localizeNumber(
            paymentOptions.pixOption.installmentValue
          )}
          handleRadioChange={handleRadioChange}
        >
          <CashbackInfos
            cashbackAmount={paymentOptions.pixOption.cashbackAmount}
            cashbackPercentage={paymentOptions.pixOption.cashbackPercentage}
          />
        </PaymentOption>
      </SingleOption>
      <OptionsList>
        <OptionChip label="Pix Parcelado" />
        {paymentOptions.installmentOptions.map((installment) => {
          return (
            <PaymentOption
              handleRadioChange={handleRadioChange}
              installmentValue={localizeNumber(installment.installmentValue)}
              selectedValue={selectedValue}
              installments={installment.installments}
              key={installment.installments}
            >
              <InstallmentInfos
                isBestInstallment={
                  bestInstallment?.installments === installment.installments
                }
                discount={installment.discount}
                totalAmount={localizeNumber(installment.totalAmount)}
              />
            </PaymentOption>
          );
        })}
      </OptionsList>
      <SafePayment />
    </PageContainer>
  );
}
