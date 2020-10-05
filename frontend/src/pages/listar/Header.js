import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(){
    return(
        <header className='container-header'>
            <div className='busca-header'>
                <input type="text" className="txtBusca" placeholder="Buscar..."/>
                <button className="btnBusca">Buscar</button>
            </div>
            <Link to='/' >
            <p>Desconectar</p>
            </Link>
        </header>     
    );
    
}   