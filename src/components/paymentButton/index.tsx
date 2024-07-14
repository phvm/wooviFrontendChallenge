import {
  RadioInstallmentContainer,
  OptionContainer,
  InstallmentsValue,
} from "./styles";
import SelectedRadio from "../selectedRadio";
import { localizeNumber } from "../../utils/localizeNumber";
import { PaymentOption } from "../../types/apiTypes";

interface Props {
  option: PaymentOption;
  children: JSX.Element;
  selectedValue: PaymentOption;
  handleOptionClick: (paymentOption: PaymentOption) => void;
}

function getContainerStyles(isSelected: boolean) {
  const notSelectedStyles = {
    border: "2px solid #E5E5E5",
    backgroundColor: "#FFFFFF",
  };

  const isSelectedStyles = {
    border: "2px solid #03D69D",
    backgroundColor: "#F4FBF9",
  };
  return isSelected ? isSelectedStyles : notSelectedStyles;
}

export default function PaymentButton({
  option,
  children,
  selectedValue,
  handleOptionClick,
}: Props) {
  const installmentsNumber: string = option.installments.toString();
  const isSelected: boolean =
    selectedValue.installments.toString() === installmentsNumber;
  const containerStyle = getContainerStyles(isSelected);
  const localizedInstallment: string = localizeNumber(
    option.amount / option.installments
  );

  return (
    <OptionContainer
      sx={{ ...containerStyle }}
      onClick={() => handleOptionClick(option)}
    >
      <RadioInstallmentContainer>
        <InstallmentsValue>
          <b>{`${option.installments}x`}</b>
          {` R$ ${localizedInstallment}`}
        </InstallmentsValue>
        <SelectedRadio isSelected={isSelected} />
      </RadioInstallmentContainer>
      {children}
    </OptionContainer>
  );
}
