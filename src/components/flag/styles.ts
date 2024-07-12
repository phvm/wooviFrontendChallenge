import { styled, Typography } from "@mui/material";
import { Box } from "@mui/material";

export const FlagContainer = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#133A6F",
  borderRadius: "4px 0 0 4px",
});

export const MessageContainer = styled(Typography)({
  padding: "4px",
});

export const FlagTriangle = styled(Box)({
  width: 0,
  height: 0,
  borderTop: "18px solid transparent",
  borderBottom: "18px solid transparent",
  borderRight: "30px solid #fff",
});
