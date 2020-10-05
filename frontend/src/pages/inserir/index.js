import React, { useState, Fragment, useEffect } from 'react';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './style.css';
import api from '../../services/api';

export default function Inserir(){
    
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
    
    
    return(
    
      
    <div className='container-principal'>
        <>
        <Upload {...props}>
         <Button icon={<UploadOutlined />}>Selecio os arquivos: </Button>
       </Upload>
        <h1>Colunas</h1>
        {coldatabase.map(col => (
          <section>
            <span>
              {col}
            </span>              
            
            <select
              id={col}
              name="teste"
              title="teste"
            >
              <>
                <option>
                  
                </option>
                {colshp.map(item =>
                  <option key={item} value={item}>
                    {item}
                  </option>
                )}
              </>
            </select>
          </section>
        ))}
      </>
      <button onClick={handleSend}>Enviar campos</button>
    </div> 
    
    );

}


