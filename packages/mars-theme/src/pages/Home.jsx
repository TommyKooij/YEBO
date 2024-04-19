import React from "react";
import { styled } from "frontity";
import savanne from "../img/IMG_4826.jpg";
import people from "../img/people.png";
import school from "../img/school.png";
import support from "../img/support.png";
import testimonialIcon from "../img/testimonial_image.jpg";
import Footer from "../ownComponents/footer";
import TopicCard from "../ownComponents/topic-card";
import Testimonial from "../ownComponents/testimonial";

export function HomePage() {
  //Made a card title, icons, and text variable.
  //The idea is that I'm going to loop through the title array and create a topic card component
  //for each unique value, then I'm going to give each topic card a title, icon, and text, depending
  //on their index values
  const CardTitles = ["Wie zijn wij?", "Wat doen wij?", "Steun ons!"];
  const CardIcons = [people, school, support];
  const CardText = [
    "YEBO is een non-profit organisatie die studiefondsen uitleent aan kansarme kinderen in Schoemansdal, Zuid-Afrika.",
    "Samen met onze donateurs proberen wij kinderen in Schoemansdal een kans op onderwijs te geven.",
    "Steun ons en help kinderen in Zuid-Afrika met het krijgen van een studiefonds, omdat elk kind recht heeft op goede educatie.",
  ];
  //Made a testimonial text and user variables.
  //I'm going to use a testimonial component and give that component the text and user info.
  //I mainly do it this way to make the code more readable
  const TestimonialText =
    "'YEBO changed my life. I had the opportunity to study engineering and now I can support my family and community!'";
  const TestimonialUser = "- Willem Fourie(21), Doctor";

  return (
    <Container>
      <StyledImage alt={"cover"} src={savanne} />
      <Title>Een betere toekomst door onderwijs</Title>
      <Button>Help kinderen in Zuid-Afrika</Button>
      <Goal>
        <GoalTitle>BIJDRAGEN AAN EEN BETERE TOEKOMST DOOR ONDERWIJS?</GoalTitle>
        <GoalText>
          {" "}
          Een vervolgopleiding is de sleutel tot een betere toekomst. Onze
          stichting helpt jongeren uit kansarme gezinnen in Schoemansdal,
          Zuid-Afrika, door het aanbieden van een studiefonds.
        </GoalText>
      </Goal>
      {/* Here I loop through the card titles array and make a topic card for each unique value */}
      <Topics>
        {CardTitles.map((text, index) => (
          <TopicCard
            title={text}
            icon={CardIcons[index]}
            text={CardText[index]}
            key={index}
          />
        ))}
      </Topics>
      {/* Here I show a testimonial reference */}
      <Testimonial
        icon={testimonialIcon}
        text={TestimonialText}
        user={TestimonialUser}
        key={0}
      />
      <Footer />
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
  padding-top: 8px;
  padding-bottom: 32px;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const GoalTitle = styled.h2`
  width: auto;
  max-width: 800px;
  color: rgba(12, 17, 43);
`;

const GoalText = styled.text`
  width: auto;
  max-width: 750px;
  color: rgba(12, 17, 43, 0.8);
  font-size: 20px;
`;

const Topics = styled.div`
  width: 100%;
  padding: 16px 0px 24px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-top: 1px solid black;
`;
