import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../_style.css';
import api from '../../services/api';

export default function Login() {

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [host, setHost] = useState('');
    const [porta, setPorta] = useState('');
    const [database, setDatabase] = useState('');

    const history = useHistory();

    async function Conectar(e) {
        e.preventDefault();

        const data = {
            usuario,
            senha,
            host,
            porta,
            database,
        };
        try {
            const response = await api.post('login', data);

            // alert(`Conexão: ${response.data.conexao}`);

            history.push('/Listar');
        } catch (err) {
            alert('Não foi possivel conectar');
        }
    }


    return (
        <div className="container-login">
            <div className="container-login-content">
                <section className="leftLogin">
                    <img src={require('../../imgs/login-banner.svg')} /> 
                </section>
                <section className="rightLogin">
                    <form onSubmit={Conectar}>
                        <div className="login-form-topside">
                            {/* this div class was not used yet */}
                            <div className="login-form-topside-user">
                                <label>Usuário</label>
                                <input value={usuario} onChange={e => setUsuario(e.target.value)}/>
                            </div>
                            <div className="login-form-topside-pw">
                                <label>Senha</label>
                                <input type="password" value={senha} onChange={e => setSenha(e.target.value)}></input>
                            </div>
                        </div>
                        <div className="login-form-botside">
                            <div className="login-form-botside-label">
                                <label>Host</label>
                                <label>Porta</label>
                                <label>Database</label>
                            </div>
                            <div className="login-form-botside-input">
                                <input value={host} onChange={e => setHost(e.target.value)}></input>
                                <input value={porta} onChange={e => setPorta(e.target.value)}></input>
                                <input value={database} onChange={e => setDatabase(e.target.value)}></input>
                            </div>
                        </div>
                        <div className="login-form-button">
                            <button type='submit'>Conectar</button>
                        </div>
                    </form>
                </section>

            </div>
        </div>
    );
}