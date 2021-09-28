import { useContext } from 'react';
import { GlobalContext } from '../context/globalState';

const Header = () => {

    const { state } = useContext(GlobalContext);

    return(
        <h1>
            {!state.login ? 'Faça login' : 'Bem vindo'}
        </h1>
    )
}

export default Header;
