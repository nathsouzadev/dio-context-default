import { useContext } from 'react';
import { useHistory, Link } from "react-router-dom";
import { GlobalContext } from '../context/globalState';

const Profile = () => {
    const history = useHistory();
    const { setState, state } = useContext(GlobalContext);

    !state.login && history.push('/');

    const handleClick = () => {
        setState({login: false})
    }
    
    return(
        <div>
            <h1>Bem vindo ao perfil</h1>
            <button onClick={handleClick}>Sair</button>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default Profile;
