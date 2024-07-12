import { FlagContainer, MessageContainer, FlagTriangle } from "./styles";

interface Props {
  message: JSX.Element;
}

export default function Flag({ message }: Props) {
  return (
    <FlagContainer>
      <MessageContainer>{message}</MessageContainer>
      <FlagTriangle />
    </FlagContainer>
  );
}
