import React from "react";
import { Card, CardProps } from "./Card";
import { styled } from "../../../stitches.config";
interface CardSectionProps {
  cards: CardProps[];
}
const StyledCardSection = styled("div", {
  margin: "75px",
});

const CardSection: React.FC<CardSectionProps> = ({ cards }) => {
  return (
    <StyledCardSection>
      {cards.map((card, index) => {
        return <Card key={index} href={card.href} innerHtml={card.innerHtml} />;
      })}
    </StyledCardSection>
  );
};

export default CardSection;
