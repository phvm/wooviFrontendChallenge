import { StepIconProps } from "@mui/material";

import { StepIcon, FilledIcon, NotPaidIcon, PaidIcon } from "./styles";

export default function StepperIcons(props: StepIconProps) {
  const { active, completed } = props;

  return (
    <StepIcon ownerState={{ active }}>
      {completed ? (
        <FilledIcon>
          <PaidIcon />
        </FilledIcon>
      ) : (
        <NotPaidIcon />
      )}
    </StepIcon>
  );
}
