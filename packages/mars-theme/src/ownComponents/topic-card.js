import { styled } from "frontity";

const TopicCard = ({ title, icon, text }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Icon alt={title} src={icon} />
      <Text>{text}</Text>
    </Container>
  );
};

export default TopicCard;

const Container = styled.div`
  width: auto;
  max-width: 33.33%;
  height: auto;
  max-height: 300px;
  padding: 8px 16px;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Title = styled.h2`
  color: rgba(12, 17, 43);
  text-transform: uppercase;
`;

const Text = styled.text`
  color: rgba(12, 17, 43, 0.8);
  padding-top: 18px;
`;

const Icon = styled.img`
  height: 40%;
  width: 33%;
`;
