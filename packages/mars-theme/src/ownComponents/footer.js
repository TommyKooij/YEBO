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
        {/* <SocialList>
          <SocialListItem src={twitter} />
          <SocialListItem src={facebook} />
          <SocialListItem src={instagram} />
          <SocialListItem src={linkedin} />
        </SocialList> */}
      </Container>
    </>
  );
};

export default Footer;

const Container = styled.div`
  width: auto;
  height: 200px;
  box-sizing: border-box;
  color: #fff;
`;

const ContactList = styled.ul`
  list-style-type: none;
  padding-top: 4px;
  margin: 4px;
  width: 300px;
`;

const ListTitle = styled.h2`
  margin: 8px;
  width: inherit;
`;

const ListItem = styled.li`
  margin: 8px;
  width: inherit;
`;
