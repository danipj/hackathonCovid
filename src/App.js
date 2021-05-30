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
import Menu from './Menu';

function App(){
  let isOpen = true;
  
    return (
      <div className="App">
        <Main />
        <Menu />
        </div>
    );
}

export default App;
