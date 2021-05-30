import { FaHome } from 'react-icons/fa';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { RiSettings2Fill } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function Menu() {
    let history = useHistory();
    let activeMural = false; 
    let activeProntuario = false;
    switch (window.location.pathname) {
        case '/prontuario/':
        case '/prontuario':
            activeProntuario = true;
            activeMural = false;
            break;
        default:
            activeMural = true;
            activeProntuario = false;
            break;
    }
    const [state,setState] = useState({activeProntuario,activeMural})
    function redirectMural(){
        history.push('/');
        setState({activeMural:true,activeProntuario:false})
    }
    function redirectProntuario(){
        history.push('/prontuario/');
        setState({activeMural:false,activeProntuario:true})
    }
    return(
        <div className="menu">
            <div className={`button ${state.activeMural?'active':''}`} onClick={()=>redirectMural()}><FaHome/> <span>Mural</span></div>
            <div className={`button ${state.activeProntuario?'active':''}`} onClick={()=>redirectProntuario()}><IoPersonCircleOutline/><span>Prontuário</span></div>
            <div className="button"><RiSettings2Fill/><span>Configurações</span></div>
            <div className="button"><GiHamburgerMenu/><span>Outros</span></div>
        </div>
    )
    
}
export default Menu;