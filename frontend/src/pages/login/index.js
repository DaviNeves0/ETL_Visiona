import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import './style.css';
import api from '../../services/api';

export default function Login(){

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [host, setHost] = useState('');
    const [porta, setPorta] = useState('');
    const [database, setDatabase] = useState('');

    const history = useHistory();

    async function Conectar(e){
        e.preventDefault();

        const data = {
          usuario,
          senha,
          host,
          porta,
          database, 
        };
        try{
        const response = await api.post('login',data);

        alert( `Conexão: ${response.data.conexao}`);

        history.push('/Listar');
        } catch (err) {
            alert('Não foi possivel conectar');
        }
    }


    return(
        <div className="container-login">
               <section className="container-login-form">
                <form onSubmit={Conectar}>
                    <h3>Usuário:</h3>
                    <input 
                        placeholder=''
                        value={ usuario}
                        onChange={e => setUsuario(e.target.value)}
                    />
                    <h3>Senha:</h3>
                    <input 
                        placeholder=''
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />
                    <div className="group_ 1">
                        <h3>Host:</h3>
                        <input 
                            placeholder='' style={{width:234}}
                            value={host}
                            onChange={e => setHost(e.target.value)}
                        />
                    </div>
                    <div className="group_ 2">
                        <h3>Porta:</h3>
                        <input 
                            placeholder=''style={{width:234}}
                            value={porta}
                            onChange={e => setPorta(e.target.value)}
                        />
                    </div>
                    <div className="group_ 3">
                        <h3>DataBase:</h3>
                        <input 
                            placeholder=''style={{width:234}}
                            value={database}
                            onChange={e => setDatabase(e.target.value)}
                        />
                    </div>
                    <button className="button-login" type='submit'>Conectar</button>
                </form>
               </section>
                <div className="container-login-img">
                   <h2>Faça o Login </h2>
                   <h2>em nosso sistema</h2> 
                </div>
        </div>
    );
}