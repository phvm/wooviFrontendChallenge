import { ChangeEvent, useState } from "react";

import { getData } from "../../fakeAPI/getData";

import LogoContainer from "../../components/logoContainer";
import CashbackInfos from "../../components/cashbackInfos";
import DiscountInfos from "../../components/discountInfos";
import PaymentOption from "../../components/paymentOption";
import SafePayment from "../../components/safePayment";

import {
  PageContainer,
  PaymentText,
  OptionsContainer,
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

  function handleRadioChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedValue(event.target.value);
  }

  function handleButtonClick(value: string) {
    setSelectedValue(value);
  }

  return (
    <PageContainer>
      <LogoContainer />
      <PaymentText>{`${userInfo.name}, como você quer pagar?`}</PaymentText>
      <OptionsContainer>
        <OptionChip label="Pix" />
        <PaymentOption
          selectedValue={selectedValue}
          installments={paymentOptions.pixOption.installments}
          installmentValue={paymentOptions.pixOption.installmentValue}
          handleRadioChange={handleRadioChange}
        >
          <CashbackInfos
            cashbackAmount={paymentOptions.pixOption.cashbackAmount}
            cashbackPercentage={paymentOptions.pixOption.cashbackPercentage}
          />
        </PaymentOption>
      </OptionsContainer>
      <OptionsContainer>
        <OptionChip label="Pix Parcelado" />
        {paymentOptions.installmentOptions.map((installment) => {
          return (
            <PaymentOption
              handleButtonClick={handleButtonClick}
              handleRadioChange={handleRadioChange}
              installmentValue={installment.installmentValue}
              selectedValue={selectedValue}
              installments={installment.installments}
              key={installment.installments}
            >
              <DiscountInfos
                discount={installment.discount}
                totalAmount={installment.totalAmount}
                discount={installment.discount}
                key={installment.installments}
              />
            </PaymentOption>
          );
        })}
      </OptionsContainer>
      <SafePayment />
    </PageContainer>
  );
}
