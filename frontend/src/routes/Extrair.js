import React, { useState, Fragment, useEffect } from 'react';
import HeaderNoSearch from '../sections/HeaderNoSearch';
import api from '../services/api';
import apiFlask from '../services/apiFlask';

import Toggle from 'rsuite/lib/Toggle';
import 'rsuite/es/Toggle/styles/themes/dark.less';

import '../styles/custom-theme.less';
import '../styles/style.css';

export default function Extrair() {

  const [dbtColNames, setDbtColNames] = useState([]);
  const [choicedColumns, setChoicedColumns] = useState([]);

  const user = localStorage.getItem('jumbo/user');
  const password = localStorage.getItem('jumbo/password');
  const host = localStorage.getItem('jumbo/host');
  const port = localStorage.getItem('jumbo/port');
  const database = localStorage.getItem('jumbo/database');
  const table = localStorage.getItem('jumbo/table')

  const dados = {
    user,
    password,
    host,
    port,
    database,
    table,
    choicedColumns
  };

  useEffect(() => {
    api.post('get_dbt_col_names', dados).then(response => {
      setDbtColNames(response.data.dbtColNames)
    });
  }, []);


  async function requestExtract() {

    await api.post('/extract_dbt_to_shp', dados, {
      responseType: "blob"
    })
      .then(response => {
        console.log(response.headers);
        const filename = response.headers['content-disposition']
          .split(';')
          .find(n => n.includes('filename='))
          .replace('filename=', '')
          .trim()
          ;
        const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        link.remove();
      }
      );
    alert('Carregado com sucesso')
  }

  async function handleColumnName(dbtColName) {
    if (choicedColumns.includes(dbtColName)) {
      // alert(choicedColumns)
      for (var i = 0; i < choicedColumns.length; i++) {
        if (choicedColumns[i] === dbtColName) {
          choicedColumns.splice(i, 1)
        }
      }
    }
    else {
      // alert(choicedColumns)
      choicedColumns.push(dbtColName)
    }
  }

  return (
    <div className='container-extract'>
      <Fragment>
        <HeaderNoSearch />
      </Fragment>
      <div className="container-extract-content">
        <>
          <header>
            <p>TABELA SELECIONADA: {table}</p>
          </header>

          <p id='extractTitle'>Selecione os arquivos que deseja extrair:</p>
          <section id="extractBackground">

            <article>
              <hr></hr>
              {dbtColNames.map(dbtColName => (
                <section className='extractFields'>
                  <p>
                    <span>{dbtColName}</span>
                    
                    <a>
                      <Toggle onChange={e => handleColumnName(dbtColName)} />
                    </a>
                  </p>

                  <hr></hr>
                </section>
              ))}
            </article>
            <button className="btnExtrair" onClick={requestExtract}>Extrair</button>
          </section>
        </>
      </div>

    </div >
  )

}
