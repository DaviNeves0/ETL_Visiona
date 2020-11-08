import React, { useState, Fragment, useEffect } from 'react';
import HeaderNoSearch from '../sections/HeaderNoSearch';
import api from '../services/api';
import apiFlask from '../services/apiFlask';
import Loader from 'rsuite/lib/Loader';
import 'rsuite/es/Loader/styles/themes/dark.less';
import Uploader from 'rsuite/lib/Uploader';
import 'rsuite/es/Uploader/styles/themes/dark.less';
import '../styles/custom-theme.less';
import '../styles/style.css';

export default function Inserir() {

  const [dbtColNames, setDbtColNames] = useState([]);
  const [shpColNames, setShpColNames] = useState([]);
  const selectedColumns = [];

  const user = localStorage.getItem('jumbo/user');
  const password = localStorage.getItem('jumbo/password');
  const host = localStorage.getItem('jumbo/host');
  const port = localStorage.getItem('jumbo/port');
  const database = localStorage.getItem('jumbo/database');
  const table = localStorage.getItem('jumbo/table')
  const shpFileName = localStorage.getItem('jumbo/shpFileName')
  const shpFilePath = localStorage.getItem('jumbo/shpFilePath');

  const dados = {
    user,
    password,
    host,
    port,
    database,
    table,
    shpFileName,
    shpFilePath,
    dbtColNames,
    selectedColumns
  };

  async function requestInsert() {

    selectedColumns.length = 0;

    dbtColNames.forEach(dbtColName => {
      const shpColNames = document.querySelector(`#${dbtColName}`);
      selectedColumns.push(shpColNames.value)
    });

    try {
      await api.post('/insert_shp_to_dbt', dados);
      alert('Carregado com sucesso')
    } catch (a) {
      alert('Erro');
    }

  }

  useEffect(() => {
    api.post('get_dbt_col_names', dados).then(response => {
      setDbtColNames(response.data.dbtColNames)
    });
  }, []);

  const instanceUploader = {
    name: 'shpFile',
    multiple: true,
    action: "http://localhost:8080/jumbo/upload_shp",
    onSuccess(response) {
      localStorage.setItem('jumbo/shpFileName', response.shpFileName);
      localStorage.setItem('jumbo/shpFilePath', response.shpFilePath);
      api.post('get_shp_col_names', { 'shpFilePath': response.shpFilePath }).then(response => {
        setShpColNames(response.data.shpColNames);
      })
    }
  };

  return (
    <div className='container-insert'>
      <Fragment>
        <HeaderNoSearch />
      </Fragment>
      <div className="container-insert-content">
        <>
          <header>
            <p>TABELA SELECIONADA: {table}</p>
          </header>

          <section id="sectionBackground">

            <nav>
              {/* botao anterior de exemplo para o layout:  
              <button className="btnImportar">Importar</button> */}

              <Uploader {...instanceUploader} />
              {/* <Upload {...props}> <Button className="btnImportar">Importar</Button> </Upload> */}
            </nav>
            <article>
              <hr></hr>
              <div className="titleFields">
                <p><span>Campos da Tabela:</span><a>Selecione o Campo:</a></p>
              </div>

              <hr></hr>
              {dbtColNames.map(dbtColName => (
                <section className="selectionFields">
                  <p>
                    <span>{dbtColName}</span>

                    <a>
                      <div class="select-wrapper">
                        <select id={dbtColName} name="teste" title="teste">
                          <>
                            <option></option><div class="arrow"></div>

                            {shpColNames.map(shpColName => <option key={shpColName} value={shpColName}> {shpColName} </option>)}

                          </>
                        </select>
                      </div>
                    </a>
                  </p>
                  <hr></hr>
                </section>
              ))}

            </article>
          </section>

          <footer>
            {/* botao anterior de exemplo para o layout
            <button className="btnInserir">Inserir</button> */}
            <button className="btnInserir" onClick={requestInsert}>Inserir</button>
          </footer>
        </>
      </div>
    </div>
  );

}


