import Head from "next/head";
import JmesLogo from "../components/JmesLogo";
import GithubLogo from "../components/GithubLogo";
import { styled, globalCss } from "../../stitches.config";
import localFont from "@next/font/local";

const coolvetica = localFont({
  src: "../../public/fonts/coolvetica.woff",
});
const montserrat = localFont({
  src: "../../public/fonts/Montserrat-SemiBold.ttf",
});
//see https://stitches.dev/docs/api

const Box = styled("div", {
  backgroundColor: "$lightTheme",
  position: "static",
  paddingX: "30px",
  paddingTop: "3%",
  paddingBottom: "5%",
});
// const Box = styled("div", {
//   backgroundColor: "$lightTheme",
//   paddingX: "30px",
//   paddingTop: "3%",
//   paddingBottom: "5%",
//   position: "absolute",
//   width: "100%",
//   height: "100%",
//   overflow: "hidden",
//   padding: "20 0 0 50",
//   boxSizing: "content-box",
// });
const Header = styled("div", {
  borderBottom: "2px solid",
  borderImage: "linear-gradient(to right,  $lightThemeAccent, $lightTheme) 1",
  paddingY: "$1",
});
const HeaderText = styled("p", {
  fontSize: "8pt",
  letterSpacing: "0.02em",
  wordSpacing: "0.16em",
});

const LogoContainer = styled("div", {
  marginLeft: "auto",
  maxWidth: "30px",
  maxHeight: "30px",
});

const ContentContainer = styled("div", {
  marginX: "auto",
  marginY: "5%",
  textAlign: "center",
  variants: {
    size: {
      1: {
        maxWidth: "300px",
      },
      2: {
        maxWidth: "585px",
      },
      3: {
        maxWidth: "865px",
      },
    },
  },
});
const Headline = styled("p", {
  marginY: "unset",
  fontSize: "42pt",
  letterSpacing: "0.03em",
  wordSpacing: "0.04em",
});
const SubHeadline = styled("p", {
  marginY: "unset",
  fontSize: "16pt",
  letterSpacing: "0.14em",
  wordSpacing: "0.22em",
});

const CardSection = styled("div", {
  marginTop: "80px",
  marginBottom: "120px",
});
const Card = styled("div", {
  marginX: "auto",
  marginY: "40px",
  border: "2px solid",
  borderRadius: 5,
  variants: {
    size: {
      1: {
        maxWidth: "300px",
      },
      2: {
        maxWidth: "585px",
      },
      3: {
        maxWidth: "865px",
      },
    },
  },
});

const Body = styled("p", {
  fontSize: "10pt",
  letterSpacing: "0.02em",
  wordSpacing: "0.16em",
});
const Link = styled("a", {
  textDecoration: "none",
  color: "black",
  "&:hover": {
    color: "$purple600",
  },
});
const Footer = styled("div", {
  borderTop: "2px solid",
  borderImage: "linear-gradient(to right, $lightTheme, $lightThemeAccent) 1",

  paddingY: "$1",
  marginTop: "auto",
});

const globalStyles = globalCss({
  body: { margin: 0, padding: 0 },
});
() => {
  globalStyles();
  return <div />;
};
export default function Home() {
  return (
    <Box>
      <Head>
        <title>JMES Coin</title>
      </Head>
      <Header>
        <HeaderText className={montserrat.className}>DISCOVER</HeaderText>
        <JmesLogo />
      </Header>
      <ContentContainer>
        <Headline className={coolvetica.className}>JMES COIN</Headline>

        <CardSection>
          <Card size={{ "@initial": "1", "@bp1": "1" }}>
            <Body className={montserrat.className}>
              <Link
                className={montserrat.className}
                href="https://github.com/jmesworld/whitepaper/blob/main/jmes-coin-whitepaper.md"
              >
                Whitepaper
              </Link>
            </Body>
          </Card>
          <Card size={{ "@initial": "1", "@bp1": "1" }}>
            <Body className={montserrat.className}>
              <Link
                className={montserrat.className}
                href="https://explorer.jmes.cloud"
              >
                Blockchain
              </Link>
            </Body>
          </Card>
          <Card size={{ "@initial": "1", "@bp1": "1" }}>
            <Body className={montserrat.className}>
              <Link
                className={montserrat.className}
                href="https://www.keplr.app/download"
              >
                Wallet
              </Link>
            </Body>
          </Card>

          <Card size={{ "@initial": "1", "@bp1": "1" }}>
            <Body className={montserrat.className}>
              <Link
                className={montserrat.className}
                href="https://docs.jmes.cloud"
              >
                Docs
              </Link>
            </Body>
          </Card>

          <Card size={{ "@initial": "1", "@bp1": "1" }}>
            <Body className={montserrat.className}>
              <Link
                className={montserrat.className}
                href="https://gov.jmes.cloud"
              >
                Governance
              </Link>
            </Body>
          </Card>

          <Card size={{ "@initial": "1", "@bp1": "1" }}>
            <Body className={montserrat.className}>
              <Link
                className={montserrat.className}
                href="https://trello.com/b/oJCXdSrM/jmes-incubator"
              >
                Incubator
              </Link>
            </Body>
          </Card>
          <Card size={{ "@initial": "1", "@bp1": "1" }}>
            <Body className={montserrat.className}>
              <Link
                className={montserrat.className}
                href="https://discord.com/invite/NVsnRWu8"
              >
                Community
              </Link>
            </Body>
          </Card>
          <Card size={{ "@initial": "1", "@bp1": "1" }}>
            <Body className={montserrat.className}>
              <Link
                className={montserrat.className}
                href="https://discord.com/login?redirect_to=%2Fchannels%2F935880511950299217%2F945699545017356421%2F1034403820438036520"
              >
                JMES Logo
              </Link>
            </Body>
          </Card>
        </CardSection>
      </ContentContainer>

      <Footer>
        <LogoContainer>
          <Link
            className={montserrat.className}
            href="https://github.com/jmesworld"
          >
            <GithubLogo />
          </Link>
        </LogoContainer>
      </Footer>
    </Box>
  );
}
