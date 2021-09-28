import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { GlobalContext } from '../context/globalState';
import Header from '../components/Header';
import Button from '../components/Button';

const Home = () => {

    const [variavel, setVariavel] = useState(5)

    const { state } = useContext(GlobalContext);

    function contador(){
        setVariavel(variavel + 1)
    }

    console.log(state)

    return(
        <div>
            <Header />
            <Button />
            {state.login && <Link to='perfil'>Perfil</Link>}
            {variavel}

            <button onClick={contador}>Add</button>
        </div>
    )
}

export default Home;
