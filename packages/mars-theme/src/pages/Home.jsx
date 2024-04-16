import React from "react";
import { styled } from "frontity";
import savanne from "../img/IMG_4826.jpg";

export function HomePage(props) {
  return (
    <Container>
      <StyledImage alt={"cover"} src={savanne} />
      <Title>Een betere toekomst door onderwijs</Title>
      <Button>Help kinderen in Zuid-Afrika</Button>
      <Goal>
        <h2>BIJDRAGEN AAN EEN BETERE TOEKOMST DOOR ONDERWIJS?</h2>
        <h4>
          Een vervolgopleiding is de sleutel tot een betere toekomst. Onze
          stichting helpt jongeren uit kansarme gezinnen in Schoemansdal
          (Zuid-Afrika) door het aanbieden van een studiefonds.
        </h4>
      </Goal>
      <Topics>
        <TopicCard>#1</TopicCard>
        <TopicCard>#2</TopicCard>
        <TopicCard>#3</TopicCard>
      </Topics>
      <Testimonial>lol</Testimonial>
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
  height: auto;
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
  width: 800px;
  max-width: 100%;
  padding: 24px;
  box-sizing: border-box;
  justify-content: space-around;
  text-align: center;
  color: black;
`;

const Topics = styled.div`
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TopicCard = styled.div`
  width: 33.33%;
  height: 300px;
  text-align: center;
  background-color: red;
  border-right: 1px solid black;
`;

const Testimonial = styled.div`
  width: 100%;
  height: auto;
  padding: 24px;
  background-color: blue;
`;
