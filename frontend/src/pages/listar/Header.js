import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='container-header'>
            <img className="jumboLogo" src={require('../../imgs/jumbo.png')} />
            <p className="jumboETL">JumboETL</p>
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