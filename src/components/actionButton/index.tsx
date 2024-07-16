import { FilledButton } from "./styles";

interface Props {
  buttonValue?: string;
  endIcon?: JSX.Element;
  handleButtonClick: () => void;
  content: string;
}

export default function ActionButton({
  buttonValue,
  handleButtonClick,
  endIcon,
  content,
}: Props) {
  return (
    <FilledButton
      value={buttonValue}
      variant="contained"
      endIcon={endIcon}
      onClick={() => {
        handleButtonClick();
      }}
    >
      {content}
    </FilledButton>
  );
}
