import { styled } from "@mui/system";
import { Button } from "@mui/material";

export const OptionContainer = styled(Button)({
  borderRadius: "10px",
  border: "2px solid #e5e5e5",
  width: "350px",
  padding: "12px",
  color: "#4D4D4D",
  transition: "all 0.5s",
  ":hover": {
    cursor: "pointer",
    border: "2px solid #03D69D",
    backgroundColor: "#F4FBF9",
  },
});
