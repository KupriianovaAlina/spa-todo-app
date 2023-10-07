import { Navbar, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import navigationRoutes from "../routs";

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" className="shadow-sm ">
      <Container>
        <Navbar.Brand className="text-white ms-3" as={Link} to={navigationRoutes.projects()}>{'ToDo List for UpTrader'}</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header;