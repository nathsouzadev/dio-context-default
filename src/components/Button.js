import { useContext, useState } from 'react';
import { GlobalContext } from '../context/globalState';

const Button = () => {

    const [loading, setLoading] = useState(false)

    const { setState, state } = useContext(GlobalContext);

    const handleClick = () => {
        setLoading(true)
        
        setTimeout(() => {
            setLoading(false);
            !state.login ? setState({login: true}) : setState({login: false})
        }, 2000)
    }

    return(
        <div>
            {loading && 'Aguarde...'}
            <button onClick={handleClick}>
                {!state.login ? 'Entrar' : 'Sair'}
            </button>
        </div>
    )
}

export default Button;
