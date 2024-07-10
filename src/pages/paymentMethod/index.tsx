import LogoContainer from "../../components/logoContainer"
import { getData } from "../../fakeAPI/getData"
import { PageContainer, PaymentMethodText } from "./styles";

export default function PaymentMethod(){
  const data = getData();

  return (
    <PageContainer>
      <LogoContainer />
      <PaymentMethodText>{`${data.userInfo.name}, como você gostaria de pagar?`}</PaymentMethodText>
    </PageContainer>
  )
}