import { FaHome } from 'react-icons/fa';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { RiSettings2Fill } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';

function Menu() {
    return(
        <div className="menu">
            <div className="button active"><FaHome/> <span>Mural</span></div>
            <div className="button"><IoPersonCircleOutline/><span>Prontuário</span></div>
            <div className="button"><RiSettings2Fill/><span>Configurações</span></div>
            <div className="button"><GiHamburgerMenu/><span>Outros</span></div>
        </div>
    )
    
}
export default Menu;