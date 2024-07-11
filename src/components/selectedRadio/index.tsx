import CheckIcon from "@mui/icons-material/Check";
import { Radio } from "@mui/material";

interface Props {
  isSelected: boolean;
  installmentKey: string;
  handleRadioChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SelectedRadio({
  isSelected,
  installmentKey,
  handleRadioChange,
}: Props) {
  return (
    <Radio
      sx={{
        border: isSelected ? "#03D69D" : "2px solid #E5E5E5",
        width: "24px",
        height: "24px",
        backgroundColor: isSelected ? "#03D69D" : "transparent",
      }}
      disableRipple
      checkedIcon={
        <CheckIcon
          sx={{
            height: "16px",
            color: isSelected ? "#ffffff" : "transparent",
          }}
        />
      }
      icon={<></>}
      checked={isSelected}
      value={installmentKey}
      onChange={handleRadioChange}
    />
  );
}
