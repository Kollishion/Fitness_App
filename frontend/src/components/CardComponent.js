import React from "react";
import { styled } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Root = styled("div")({
  display: "flex",
  gap: "30px",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: "linear-gradient(to right, #8e9eab, #eef2f3)",
});

const StyledCard = styled(Card)({
  width: 220,
  borderRadius: 20,
  overflow: "hidden",
  color: "#616161",
  boxShadow:
    "0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23)",
  cursor: "pointer",
  transition: "transform .2s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

const CardHeader = styled("div")({
  height: 200,
  display: "grid",
  placeItems: "center",
  borderRadius: "100% 0 100% 0 / 0 50% 50% 100%",
  backgroundSize: "cover",
});

const CardContentWrapper = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "60%",
  margin: "0 auto",
});

const Title = styled(Typography)({
  textAlign: "center",
  textTransform: "uppercase",
  fontSize: 16,
  margin: "10px 0 20px",
});

const Text = styled(Typography)({
  textAlign: "center",
  fontSize: 12,
  marginBottom: 20,
});

const StyledButton = styled(Button)({
  border: "none",
  borderRadius: 100,
  padding: "5px 30px",
  color: "#fff",
  marginBottom: 15,
  textTransform: "uppercase",
});

const cards = [
  {
    id: "one",
    icon: <img src="" alt="" />,
    btnText: "code",
    gradient: "linear-gradient(to bottom left, #f12711, #f5af19)",
  },
  {
    id: "two",
    icon: <img src="" alt="" />,
    btnText: "css3",
    gradient: "linear-gradient(to bottom left, #7F00FF, #E100FF)",
  },
  {
    id: "three",
    icon: <img src="" alt="" />,
    btnText: "html5",
    gradient: "linear-gradient(to bottom left, #3f2b96, #a8c0ff)",
  },
  {
    id: "four",
    icon: <img src="" alt="" />,
    btnText: "js",
    gradient: "linear-gradient(to bottom left, #11998e, #38ef7d)",
  },
];

const CardComponent = () => (
  <Root>
    {cards.map((card) => (
      <StyledCard key={card.id}>
        <CardHeader style={{ background: card.gradient }}>
          {card.icon}
        </CardHeader>
        <CardContentWrapper>
          <Title>Title</Title>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </CardContentWrapper>
        <CardActions>
          <StyledButton style={{ background: card.gradient }}>
            {card.btnText}
          </StyledButton>
        </CardActions>
      </StyledCard>
    ))}
  </Root>
);

export default CardComponent;
