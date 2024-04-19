import { styled } from "frontity";

const Testimonial = ({ icon, text, user }) => {
  return (
    <>
      <Container>
        <TestimonialIcon alt="testimonial_icon" src={icon} />
        <div>
          <TestimonialText>
            <h4>{text}</h4>
            <h4>{user}</h4>
          </TestimonialText>
        </div>
      </Container>
    </>
  );
};

export default Testimonial;

const Container = styled.div`
  width: auto;
  max-wdith: 400px;
  height: auto;
  padding: 36px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
`;

const TestimonialIcon = styled.img`
  width: auto;
  max-width: 208px;
  height: auto;
  max-height: 208px;
  border-radius: 50%;
`;

const TestimonialText = styled.div`
  max-width: 400px;
  padding-left: 27px;
  margin-left: 27px;
  border-left: 1px solid black;
`;
