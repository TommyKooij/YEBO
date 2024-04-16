import React from "react";
import { styled } from "frontity";
import savanne from "../img/IMG_4826.jpg";
import people from "../img/people.png";
import school from "../img/school.png";
import support from "../img/support.png";

export function HomePage(props) {
  return (
    <Container>
      <StyledImage alt={"cover"} src={savanne} />
      <Title>Een betere toekomst door onderwijs</Title>
      <Button>Help kinderen in Zuid-Afrika</Button>
      <Goal>
        <GoalContent>
          <h2>BIJDRAGEN AAN EEN BETERE TOEKOMST DOOR ONDERWIJS?</h2>
          <h3>
            Een vervolgopleiding is de sleutel tot een betere toekomst. Onze
            stichting helpt jongeren uit kansarme gezinnen in Schoemansdal,
            Zuid-Afrika, door het aanbieden van een studiefonds.
          </h3>
        </GoalContent>
      </Goal>
      <Topics>
        <TopicCard>
          <h2>Wie zijn wij?</h2>
          <Icon alt="peope" src={people} />
          <h3>
            YEBO is een non-profit organisatie die studiefondsen uitleent aan
            kansarme kinderen in Schoemansdal, Zuid-Afrika.
          </h3>
        </TopicCard>
        <TopicCard>
          <h2>Wat doen wij?</h2>
          <Icon alt="school" src={school} />
          <h3>
            Samen met onze donateurs proberen wij kinderen in Schoemansdal een
            kans op onderwijs te geven.
          </h3>
        </TopicCard>
        <TopicCard>
          <h2>Steun ons!</h2>
          <Icon alt="support" src={support} />
          <h3>
            Steun ons en help kinderen in Zuid-Afrika met het krijgen van een
            studiefonds, omdat elk kind recht heeft op goede educatie.
          </h3>
        </TopicCard>
      </Topics>
      <Testimonial>lol</Testimonial>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 0;
`;

const StyledImage = styled.img`
  display: block;
  height: 550px;
  width: 100%;
  object-fit: cover;
`;

const Title = styled.h1`
  position: absolute;
  bottom: 28px;
  left: 48px;
  color: white;
  font-size: 40px;
`;

const Button = styled.button`
  position: absolute;
  color: white;
  border-color: white;
  background-color: transparent;
  bottom: 0;
  left: 48px;
  padding: 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  width: auto;
  font-size: 20px;
`;

const Goal = styled.div`
  max-width: 100%;
  padding-top: 16px;
  padding-bottom: 32px;
  box-sizing: border-box;
  align-items: center;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const GoalContent = styled.div`
  width: 800px;
  text-align: center;
`;

const Topics = styled.div`
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-top: 1px solid black;
`;

const TopicCard = styled.div`
  width: 33.33%;
  height: 300px;
  padding: 8px 16px;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Icon = styled.img`
  height: 40%;
  width: 33%;
`;

const Testimonial = styled.div`
  width: 100%;
  height: auto;
  padding: 24px;
  background-color: blue;
`;
