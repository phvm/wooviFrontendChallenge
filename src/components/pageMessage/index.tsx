import { HeaderMessage } from "./styles";

interface Prop {
  children: string;
}

export default function PageMessage({ children }: Prop) {
  return <HeaderMessage variant="h1">{children}</HeaderMessage>;
}
