import { styled } from "../../../stitches.config";
import { montserrat } from "../../assets/fonts";
import { JmesLogoBlack } from "../../assets/logos";

const StyledHeader = styled("div", {
  borderBottom: "2px solid",
  borderImage: "linear-gradient(to right,  $lightThemeAccent, $lightTheme) 1",
  paddingY: "$1",
});
const HeaderText = styled("p", {
  fontSize: "8pt",
  letterSpacing: "0.02em",
  wordSpacing: "0.16em",
});

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderText className={montserrat.className}>DISCOVER</HeaderText>
      <JmesLogoBlack />
    </StyledHeader>
  );
};
