import { styled } from "../../../stitches.config";
import { montserrat } from "../../assets/fonts";

const CardContainer = styled("div", {
  marginX: "auto",
  marginY: "40px",
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
const StyledCard = styled("div", {
  border: "2px solid",
  borderRadius: 5,
});
const Body = styled("p", {
  fontSize: "10pt",
  letterSpacing: "0.02em",
  wordSpacing: "0.16em",
});

const Link = styled("a", {
  display: "block",
  width: "100%",
  textDecoration: "none",
  color: "black",
  "&:hover": {
    color: "$purple600",
  },
});
export interface CardProps {
  href: string;
  innerHtml: string;
}

export const Card: React.FC<CardProps> = ({ href, innerHtml }) => {
  return (
    <CardContainer size={{ "@initial": "1", "@bp1": "1" }}>
      <Link
        target="_blank"
        rel="noreferrer"
        href={href}
        className={montserrat.className}
      >
        <StyledCard size={{ "@initial": "1", "@bp1": "1" }}>
          <Body className={montserrat.className}>{innerHtml}</Body>
        </StyledCard>
      </Link>
    </CardContainer>
  );
};
