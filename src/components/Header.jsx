import { Navbar, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import navigationRoutes from "../routs";

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" className="shadow-sm">
      <Container className="justify-content-start">
        <Navbar.Brand className="text-white" as={Link} to={navigationRoutes.projects()}>{'ToDo List for UpTrader'}</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header;