import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export default function HeaderSearch() {

    const history = useHistory();

    async function handleSend() {
        history.push('/Listar');
    }

    return (
        <header className='container-header'>
            <Link onClick={handleSend}>
                <img className="jumboLogo" src={require('../assets/jumbo.png')} />
                <p className="jumboETL">JumboETL</p>
            </Link>
            <div className='busca-header'>
                <input type="text" className="txtBusca" placeholder="Digite aqui a sua busca" />
                <button className="btnBusca">Buscar</button>
            </div>
            <Link to='/' >
                <p className="disconnect">Desconectar→</p>
            </Link>
        </header>
    );

}   