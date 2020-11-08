import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export default function HeaderNoSearch() {

    const history = useHistory();

    async function handleSend() {
        history.push('/Listar');
    }

    return (
        <header className='container-headerNosearch'>
            <div className="container-header-content">
                <div className="container-header-content-left">
                    <Link onClick={handleSend}>
                        <img className="jumboLogo" src={require('../assets/jumbo.png')} />
                        <p className="jumboETL">JumboETL</p>
                    </Link>
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