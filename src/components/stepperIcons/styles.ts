import { Check } from "@mui/icons-material";
import { Box, styled } from "@mui/material";

export const StepIcon = styled("div")<{
  ownerState: { active?: boolean };
}>(({ ownerState }) => ({
  color: "#fffff",
  display: "flex",
  height: 22,
  alignItems: "center",
  marginLeft: "3px",
  ...(ownerState.active && {
    color: "#784af4",
  }),
}));

export const FilledIcon = styled(Box)({
  width: 20,
  height: 20,
  borderRadius: "50%",
  backgroundColor: "#03D69D",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const NotPaidIcon = styled(Box)({
  width: 20,
  height: 20,
  borderRadius: "50%",
  border: "2px solid #03D69D",
});

export const PaidIcon = styled(Check)({
  color: "#ffffff",
  fontSize: 16,
});
