import { styled } from "frontity";
import twitter from "../img/icons/twitter.png";
import facebook from "../img/icons/facebook.png";
import instagram from "../img/icons/instagram.png";
import linkedin from "../img/icons/linkedin.png";

const Footer = () => {
  return (
    <>
      <Container>
        <ContactList>
          <ListTitle>Contact</ListTitle>
          <ListItem>Telefoon: 06-87654321</ListItem>
          <ListItem>Mail: info@YEBO.nl</ListItem>
          <ListItem>Adres: De Vlierbes 63, Doetinchem</ListItem>
          <ListItem>RSIN (Fiscaal):</ListItem>
        </ContactList>
        <SocialList>
          <SocialListItem src={twitter} />
          <SocialListItem src={facebook} />
          <SocialListItem src={instagram} />
          <SocialListItem src={linkedin} />
        </SocialList>
      </Container>
    </>
  );
};

export default Footer;

const Container = styled.div`
  width: auto;
  height: 200px;
  background-color: black;
  display: flex;
`;

const ContactList = styled.ul`
  color: white;
  list-style-type: none;
  padding-top: 8px;
  width: 200px;
`;

const ListTitle = styled.h2`
  margin: 8px;
  width: inherit;
`;

const ListItem = styled.li`
  margin: 8px;
  width: inherit;
`;

const SocialList = styled.div`
  list-style-type: none;
`;

const SocialListItem = styled.img`
  display: inline;
  height: 52px;
  width: 52px;
  margin: 8px;
  border-radius: 50%;
  border: 1px solid white;
`;
