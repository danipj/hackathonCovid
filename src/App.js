import './App.scss';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Main from './routes';

function App(){
  let isOpen = true;
  
    return (
      <div className="App">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Feed do paciente</NavbarBrand>
          <NavbarToggler />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/prontuario/">Prontuário afetivo</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/menu">Menu do hospital</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Main />
        </div>
    );
}

export default App;
