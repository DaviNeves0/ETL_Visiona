import React, { useState, Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/style.css';
import HeaderSearch from '../sections/HeaderSearch';
import api from '../services/api';

export default function Lista() {

  const [tables, setTables] = useState([]);

  const history = useHistory();

  const user = localStorage.getItem('jumbo/user');
  const password = localStorage.getItem('jumbo/password');
  const host = localStorage.getItem('jumbo/host');
  const port = localStorage.getItem('jumbo/port');
  const database = localStorage.getItem('jumbo/database');

  const dados = {
    user,
    password,
    host,
    port,
    database,
  };

  async function loadInsert(table) {
    const dados = { 'table': table };
    localStorage.setItem('jumbo/table', table);
    history.push("/inserir");
  }

  async function loadExtract(table) {
    const dados = { 'table': table };
    localStorage.setItem('jumbo/table', table);
    history.push("/extrair");
  }

  useEffect(() => {
    api.post('get_tables', dados).then(response => {
      setTables(response.data.tables)
    });
  }, []);

  return (
    <div className='container-list'>
      <Fragment>
        <HeaderSearch />
        <div className='container-list-content'>

          {tables.map(table => (
            <div className='container-list-table'>
              <p>{table}</p>
              <hr></hr>
              <button type='submit' onClick={() => loadInsert(table)}>Inserir</button>
              <button type='submit' onClick={() => loadExtract(table)}>Extrair</button>
            </div>
          ))}

        </div>
      </Fragment>
    </div>
  );
}





