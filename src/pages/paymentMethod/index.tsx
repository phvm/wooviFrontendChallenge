import LogoContainer from "../../components/logoContainer";
import { getData } from "../../fakeAPI/getData";
import PixOption from "../../components/pixOption";
import InstallmentOption from "../../components/installmentOption";
import PaymentOption from "../../components/paymentOption";
import {
  PageContainer,
  PaymentText,
  OptionsContainer,
  OptionChip,
} from "./style";
import React, { useState } from "react";

export default function PaymentMethod() {
  const { userInfo, paymentOptions } = getData();
  const { pixOption, installmentOptions } = paymentOptions;
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
      <PaymentText>{`${userInfo.name}, como você gostaria de pagar?`}</PaymentText>
      <OptionsContainer>
        <OptionChip label="Pix" />
        <PaymentOption
          selectedValue={selectedValue}
          installments={pixOption.installments}
          installmentValue={pixOption.installmentValue}
          handleRadioChange={handleRadioChange}
          handleButtonClick={handleButtonClick}
        >
          <PixOption
            cashbackAmount={pixOption.cashbackAmount}
            cashbackPercentage={pixOption.cashbackPercentage}
          />
        </PaymentOption>
      </OptionsContainer>
      <OptionsContainer>
        <OptionChip label="Pix Parcelado" />
        {installmentOptions.map((installment) => {
          return (
            <PaymentOption
              handleButtonClick={handleButtonClick}
              handleRadioChange={handleRadioChange}
              installmentValue={installment.installmentValue}
              selectedValue={selectedValue}
              installments={installment.installments}
            >
              <InstallmentOption
                totalAmount={installment.totalAmount}
                discount={installment.discount}
                key={installment.installments}
              />
            </PaymentOption>
          );
        })}
      </OptionsContainer>
    </PageContainer>
  );
}
