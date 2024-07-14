import { HeaderMessage } from "./styles";

interface Prop {
  children: string;
}

export function PageMessage({ children }: Prop) {
  return <HeaderMessage variant="h1">{children}</HeaderMessage>;
}
