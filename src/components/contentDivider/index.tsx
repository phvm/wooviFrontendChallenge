import { DividerContainer, PaymentDivider } from "./styles";

export default function ContentDivider() {
  return (
    <DividerContainer>
      <PaymentDivider orientation="horizontal" variant="middle" flexItem />
    </DividerContainer>
  );
}
