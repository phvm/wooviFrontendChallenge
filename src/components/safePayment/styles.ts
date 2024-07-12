import { styled, Typography } from "@mui/material";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";

export const TrustWoovi = styled(Typography)({
  fontWeight: "500",
  color: "#B2B2B2",
  fontSize: ".8rem",
  paddingTop: "4px",
});

export const FooterContainer = styled("footer")({
  width: "320px",
  padding: "20px",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
});

export const ShieldIcon = styled(GppGoodOutlinedIcon)({
  color: "#B2B2B2",
});
