import wooviLogo from "../../assets/icons/wooviLogo.svg";
import { Logo, Container } from "./style";

export default function LogoContainer() {
  return (
    <Container>
      <Logo src={wooviLogo} alt="Woovi Logo" />
    </Container>
  );
}
