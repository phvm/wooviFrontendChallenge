 import { Container, Logo } from "./style"
import wooviLogo from "../../assets/icons/wooviLogo.svg"

export default function LogoContainer() {
  return (
    <Container>
      <Logo src={wooviLogo} alt="Woovi Logo"/>
    </Container>  
  )
}