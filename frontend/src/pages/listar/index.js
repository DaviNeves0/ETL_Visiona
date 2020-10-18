import React, { useState, Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../../_style.css';
import Header from './Header';
import api from '../../services/api';

export default function Lista() {

  const [tabelas, setTabelas] = useState([]);

  const history = useHistory();

  async function salvar(tabela) {
    const dados = { 'tabela': tabela };
    await api.post('get_tab_name', dados);
    history.push("/inserir");
  }

  useEffect(() => {
    api.get('get_tabelas').then(response => {
      setTabelas(response.data.tabelas)
    });
  }, []);

  return (
    <div className='container-list'>
      <Fragment>
        <Header />
        <div className='container-list-content'>
  
          {tabelas.map(tabela => (
            <div className='container-list-table'>
              <p>{tabela}</p>
              <hr></hr>
              <button type='submit' onClick={() => salvar(tabela)}>Inserir</button>
              <button type='submit'>Extrair</button>
            </div>
          ))}
          
        </div>
      </Fragment>
    </div>
  );
}





