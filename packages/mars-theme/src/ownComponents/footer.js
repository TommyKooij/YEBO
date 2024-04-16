import { styled } from "frontity";

const Footer = () => {
  return (
    <>
      <Container>
        <List>
          <ListTitle>Contact</ListTitle>
          <ListItem>Telefoon: 06-87654321</ListItem>
          <ListItem>Mail: info@YEBO.nl</ListItem>
          <ListItem>Adres: De Vlierbes 63, Doetinchem</ListItem>
          <ListItem>RSIN (Fiscaal):</ListItem>
        </List>
      </Container>
    </>
  );
};

export default Footer;

const Container = styled.div`
  width: auto;
  height: 200px;
  background-color: black;
`;

const List = styled.ul`
  color: white;
  list-style-type: none;
  padding-top: 8px;
`;

const ListTitle = styled.h2`
  margin: 8px;
`;

const ListItem = styled.li`
  margin: 8px;
`;
