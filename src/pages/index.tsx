import Head from "next/head";
import { coolvetica, montserrat } from "../assets/fonts";
import { styled, globalCss } from "../../stitches.config";
import CardSection from "../components/Cards/CardSection";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import jmesCards from "../components/Cards/data/card-links";

const Box = styled("div", {
  position: "static",
  paddingX: "30px",
  paddingTop: "3%",
  paddingBottom: "5%",
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
export default function Home() {
  return (
    <Box>
      <Head>
        <title>JMES Blockchain</title>
      </Head>
      <Header />
      <ContentContainer>
        <Headline className={coolvetica.className}>JMES</Headline>
        <SubHeadline className={coolvetica.className}>Blockchain & App</SubHeadline>
        <CardSection cards={jmesCards} />
      </ContentContainer>
      <Footer />
    </Box>
  );
}
