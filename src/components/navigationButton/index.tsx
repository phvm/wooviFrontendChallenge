import { NavigateButton } from "./styles";

interface Props {
  content: string;
  handleClick: () => void;
}

export function NavigationButton({ content, handleClick }: Props) {
  return (
    <NavigateButton variant="contained" onClick={() => handleClick()}>
      {content}
    </NavigateButton>
  );
}
