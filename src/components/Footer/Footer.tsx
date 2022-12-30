import { styled } from "../../../stitches.config";
import { montserrat } from "../../assets/fonts";
import { GithubLogo } from "../../assets/logos";

const StyledFooter = styled("div", {
  borderTop: "2px solid",
  borderImage: "linear-gradient(to right, $lightTheme, $lightThemeAccent) 1",
  paddingY: "$1",
  marginTop: "auto",
});

const LogoContainer = styled("div", {
  marginLeft: "auto",
  maxWidth: "30px",
  maxHeight: "30px",
});

const Link = styled("a", {
  textDecoration: "none",
  color: "black",
  "&:hover": {
    color: "$purple600",
  },
});

export const Footer = () => {
  return (
    <StyledFooter>
      <LogoContainer>
        <Link
          className={montserrat.className}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/jmesworld/coin-landing"
        >
          <GithubLogo />
        </Link>
      </LogoContainer>
    </StyledFooter>
  );
};
