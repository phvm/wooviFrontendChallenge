import { TrustWoovi, FooterContainer, ShieldIcon } from "./styles";
import mutedLogo from "../../assets/icons/mutedWooviLogo.svg";

export default function SafePayment() {
  return (
    <FooterContainer>
      <ShieldIcon />
      <TrustWoovi>Pagamento 100% seguro via: </TrustWoovi>
      <img src={mutedLogo} alt="Woovi logo in grey" />
    </FooterContainer>
  );
}
