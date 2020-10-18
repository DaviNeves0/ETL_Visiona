import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='container-headerNosearch'>
            <div className="container-header-content">
                <div className="container-header-content-left">
                    <img className="jumboLogo" src={require('../../imgs/jumbo.png')} />
                    <p className="jumboETL">JumboETL</p>
                </div>

                <div className="container-header-content-right">
                    <Link to='/' >
                        <p className="disconnect-2">Desconectar→</p>
                    </Link>
                </div>
            </div>
        </header>
    );

}   