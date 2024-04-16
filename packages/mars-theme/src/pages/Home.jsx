import React from "react";
import { styled } from "frontity";
import savanne from "../img/IMG_4826.jpg";

export function HomePage(props) {
  return (
    <Container>
      <StyledImage alt={"cover"} src={savanne} />
      <Title>Een betere toekomst door onderwijs</Title>
      <Button>Help kinderen in Zuid-Afrika</Button>
      <Goal>Lol</Goal>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 0;
`;

const Title = styled.h1`
  position: absolute;
  bottom: 0;
  left: 0;
  color: white;
`;

const StyledImage = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Button = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  width: auto;
  height: 20px;
`;

const Goal = styled.div`
  width: 100%;
  paddingy: 20px;
  text-align: center;
  color: black;
`;
