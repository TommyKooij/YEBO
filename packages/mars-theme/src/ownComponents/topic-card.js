import { styled } from "frontity";

const TopicCard = ({ title, icon, text }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <Icon alt={title} src={icon} />
      <h3>{text}</h3>
    </Container>
  );
};

const Container = styled.div`
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

export default TopicCard;
