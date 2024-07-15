import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { getData } from "../../fakeAPI/getData";

import LogoContainer from "../../components/logoContainer";
import CashbackInfos from "../../components/cashbackInfos";
import InstallmentInfos from "../../components/installmentsInfos";
import PaymentButton from "../../components/paymentButton";
import SafePayment from "../../components/safePayment";
import PageMessage from "../../components/pageMessage";
import { NavigationButton } from "../../components/navigationButton";

import { UserContext } from "../../utils/contexts/UserContext";
import { PaymentContext } from "../../utils/contexts/PaymentContext";

import { PageContainer, OptionsList, SingleOption, OptionChip } from "./styles";

import type { PaymentOption } from "../../types/apiTypes";

import Links from "../../utils/constants";
import { useNavigate } from "react-router-dom";

export default function PaymentMethod() {
  const data = getData();
  const navigate = useNavigate();
  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    if (
      userInfo.name === "" ||
      userInfo.name === null ||
      userInfo.name === undefined
    ) {
      toast.error("Dados ainda não informados", { autoClose: 2000 });
      return navigate(Links.home);
    }
  });

  const { handlePaymentContextChange } = useContext(PaymentContext);
  const [selectedValue, setSelectedValue] = useState<PaymentOption>({
    amount: 0,
    installments: 0,
    refound: 0,
  });

  const paymentOptions: {
    pixOption: PaymentOption;
    installmentOptions: PaymentOption[];
  } = data.paymentOptions;

  const bestInstallment: PaymentOption = selectedBestInstallment();

  function handleOptionClick(selectedOption: PaymentOption) {
    setSelectedValue(selectedOption);
  }

  function validadeSelectedOption(): boolean {
    return !(
      selectedValue === undefined ||
      selectedValue === null ||
      selectedValue.installments === 0
    );
  }

  function submiteSelectedOption() {
    if (validadeSelectedOption()) {
      handlePaymentContextChange(selectedValue);
      return navigate(Links.pixCredtCard);
    }
    return toast.error("Por favor, selecione uma opção de pagamento");
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
          option={paymentOptions.pixOption}
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
              selectedValue={selectedValue}
              option={installment}
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
      <NavigationButton
        content="Realizar pagamento"
        handleClick={() => submiteSelectedOption()}
      />
      <SafePayment />
    </PageContainer>
  );
}
