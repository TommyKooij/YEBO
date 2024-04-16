import React from "react";
import { styled } from "frontity";
import savanne from "../img/IMG_4826.jpg";
import people from "../img/people.png";
import school from "../img/school.png";
import support from "../img/support.png";
import testimonialIcon from "../img/testimonial_image.jpg";
import Footer from "../ownComponents/footer";
import TopicCard from "../ownComponents/topic-card";

export function HomePage(props) {
  const CardTitles = ["Wie zijn wij?", "Wat doen wij?", "Steun ons!"];
  const CardIcons = [people, school, support];
  const CardText = [
    "YEBO is een non-profit organisatie die studiefondsen uitleent aan kansarme kinderen in Schoemansdal, Zuid-Afrika.",
    "Samen met onze donateurs proberen wij kinderen in Schoemansdal een kans op onderwijs te geven.",
    "Steun ons en help kinderen in Zuid-Afrika met het krijgen van een studiefonds, omdat elk kind recht heeft op goede educatie.",
  ];

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
        {CardTitles.map((text, index) => (
          <TopicCard
            title={CardTitles[index]}
            icon={CardIcons[index]}
            text={CardText[index]}
            key={index}
          />
        ))}
      </Topics>
      <Testimonial>
        <TestimonialIcon alt="testimonial_icon" src={testimonialIcon} />
        <div>
          <TestimonialText>
            <h4>
              “YEBO changed my life. I had the opportunity to study engineering
              and now I can support my family and community!”
            </h4>
            <h4>- Willem Fourie(21), Doctor</h4>
          </TestimonialText>
        </div>
      </Testimonial>
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
  padding: 16px 0px 24px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-top: 1px solid black;
`;

const Testimonial = styled.div`
  width: auto;
  height: auto;
  padding: 36px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
`;

const TestimonialIcon = styled.img`
  width: 208px;
  height: 208px;
  border-radius: 50%;
`;

const TestimonialText = styled.div`
  max-width: 400px;
  padding-left: 18px;
  margin-left: 18px;
  border-left: 1px solid black;
`;
