import wooviLogo from "../../assets/icons/wooviLogo.svg";
import { Logo, Container } from "./styles";

export default function LogoContainer() {
  return (
    <Container>
      <Logo src={wooviLogo} alt="Woovi Logo" />
    </Container>
  );
}
