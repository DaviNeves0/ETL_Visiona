import React, { useState, Fragment, useEffect } from 'react';
import { Upload, message, Button } from 'antd';
import Header from './Header';
import { UploadOutlined } from '@ant-design/icons';
import '../../_style.css';

import api from '../../services/api';

export default function Inserir() {

  const [coldatabase, setColdatabase] = useState([]);
  const [tabname, setTabname] = useState([]);
  const [colshp, setColshp] = useState([]);


  async function handleSend() {
    const data = [];

    coldatabase.forEach(col => {
      const colshp = document.querySelector(`#${col}`);
      data.push(colshp.value)
    });

    try {
      await api.post('/inserir', { colunas_selecionadas: data });
      alert('Carregado com sucesso')
    } catch (a) {
      alert('Erro');
    }

  }

  useEffect(() => {
    api.get('get_col_names_db').then(response => {
      setColdatabase(response.data.colunas_db);
      setTabname(response.data.tabela_selecionada)
    });
  }, []);

  const props = {
    name: 'shp',
    multiple: true,
    action: 'http://localhost:5000/upload',
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
        api.get('get_col_names_shp').then(response => {
          setColshp(response.data.colunas_shp)
        })
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className='container-insert'>
      <Fragment>
        <Header />
      </Fragment>
      <div className="container-insert-content">
        <>
          <header>
            {/* <p>TABELA SELECIONADA:</p> */}
          </header>

          <section id="sectionBackground">
            <nav>
              {/* botao anterior de exemplo para o layout:  
              <button className="btnImportar">Importar</button> */}
              <Upload {...props}> <Button className="btnImportar">Importar</Button> </Upload>
            </nav>
            <article>
              <hr></hr>
              <div className="titleFields">
                <p><span>Campos da Tabela:</span><a>Selecione o Campo:</a></p>
              </div>

              <hr></hr>
              {coldatabase.map(col => (
                <section className="selectionFields">
                  <p>
                  <span>{col}</span>
                  
                  <a>
                  <select id={col} name="teste" title="teste">
                    <>
                      <option></option>
                    
                      {colshp.map(item => <option key={item} value={item}> {item} </option>)}
                      
                    </>
                  </select>
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
            <button className="btnInserir" onClick={handleSend}>Inserir</button>
          </footer>
        </>
      </div>
    </div>
  );

}


