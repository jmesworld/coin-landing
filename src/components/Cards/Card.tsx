import { styled } from "../../../stitches.config";

const Container = styled("div", {
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

const StyledLink = styled("a", {
  textDecoration: "none",
  color: "$purple600",
});

export interface CardProps {
  href: string;
  innerHtml: string;
}

export const Card: React.FC<CardProps> = ({ href, innerHtml }) => {
  return (
    <Container size={{ "@initial": "1", "@bp1": "1" }}>
      <Body>
        <StyledLink href={href}>{innerHtml}</StyledLink>
      </Body>
    </Container>
  );
};
