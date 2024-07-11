import LogoContainer from "../../components/logoContainer";
import { getData } from "../../fakeAPI/getData";
import PixOption from "../../components/pixOption";
import InstallmentOption from "../../components/installmentOption";
import {
  OptionsContainer,
  PageContainer,
  PaymentText,
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
        <OptionChip variant="filled" label="Pix" size="small" />
        <PixOption
          selectedValue={selectedValue}
          installments={pixOption.installments}
          installmentValue={pixOption.installmentValue}
          cashbackAmount={pixOption.cashbackAmount}
          cashbackPercentage={pixOption.cashbackPercentage}
          handleRadioChange={handleRadioChange}
          handleButtonClick={handleButtonClick}
        />
      </OptionsContainer>
      <OptionsContainer>
        <OptionChip variant="filled" label="Pix Parcelado" size="small" />
        {installmentOptions.map((installment) => {
          return (
            <InstallmentOption
              selectedValue={selectedValue}
              installments={installment.installments}
              installmentValue={installment.installmentValue}
              totalAmount={installment.totalAmount}
              discount={installment.discount}
              key={installment.installments}
              handleRadioChange={handleRadioChange}
              handleButtonClick={handleButtonClick}
            />
          );
        })}
      </OptionsContainer>
    </PageContainer>
  );
}
