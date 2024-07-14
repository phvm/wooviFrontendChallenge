import { styled } from "@mui/system";
import { Box, Chip } from "@mui/material";

export const PageContainer = styled("main")({
  width: "100dvw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const OptionContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  margin: "8px",
});

export const OptionsList = styled(OptionContainer)({
  "& >:nth-child(2)": {
    borderRadius: "8px 8px 0 0",
  },
  "& >:last-child": {
    borderRadius: "0 0 8px 8px",
  },
});

export const SingleOption = styled(OptionContainer)({
  "& >:nth-child(2)": {
    borderRadius: "8px",
  },
});

export const OptionChip = styled(Chip)({
  width: "fit-content",
  height: "20px",
  margin: "0 0 -10px 20px",
  padding: "0 8px",
  fontWeight: 700,
  zIndex: 2,
  backgroundColor: "#E5E5E5",
  color: "#4D4D4D",
});
