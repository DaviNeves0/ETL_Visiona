# Sistema web JumboETL
![](https://i.imgur.com/pmG7ERF.png)
Projeto da faculdade FATEC com parceria da empresa Visiona Tecnologia Espacial S.A.

# Sprint 3
![](https://i.imgur.com/RLmVDsb.png)


# Demonstração do Sistema JumboETL em funcionamento
Link : https://youtu.be/zp9LMp5gkxw 

<p align="center" href="https://www.youtube.com/watch?v=zp9LMp5gkxw">
<img border="0" src="http://img.youtube.com/vi/zp9LMp5gkxw/0.jpg" width="100%" >
</p>




# Burndown Chart

![](https://i.imgur.com/r5FfnDz.png)



<ul>
  <li><b>Tarefas</b></li>
    1. Configurar Spring (backend)<br/>
    2. Transcrever função getConnection para Java<br/>
    3. Transcrever função getTables para Java<br/>
    4. Transcrever função getDBTColNames para Java<br/>
    5. Transcrever função getShpColNames para Java<br/>
    6. Transcrever função insertShpToDbt para Java<br/>
    7. Transcrever função writeSQLInsert para Java<br/>
    8. Transcerver função shpToDbt para Java<br/>
    9. Transcrever função getShpGeomType para Java<br/>
    10. Transcrever função pointType para Java<br/>
    11. Transcrever função lineType para Java<br/>
    12. Transcrever função polygonType para Java<br/>
    13. Programar função extractToShp em Java<br/>
    14. Programar função writeSQLInsert em Java<br/>
    15. Ajustar React (frontend)<br/>
    16. Implementar armazenamento local de variáveis do usuário<br/>
    17. Ajustar estilos visuais<br/>
    18. Programar página Extrair
    19. Testes<br/>
    20. Documentação do Github<br/>    
    21. Preparar apresentação         
</ul>
    

# Tecnologias
![](https://i.imgur.com/HSTNTz0.png)


<ul>
  <li><b>Front-End</b></li>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
          - Bibliotecas: React, Axios, React Suite
    </ul>
  
  <li><b>Back-End</b></li>
    <ul>
      <li>Java 15</li>
          - Bibliotecas: Maven, Spring, Tomcat, GeoTools
      <li>GDAL</li>
          - Utilitário: ogr2ogr
      <li>PostgreSQL</li>
          - Extensão: PostGIS   
    </ul>
</ul>

# Backlog
![](https://i.imgur.com/D63UCgD.png)


# Instruções de instalação



<ul>
  <li><b>Java Development Kit</b></li>
    <ul>
    <li><b>Windows</b></li> Realizar o download na página abaixo.<br/>https://www.oracle.com/java/technologies/javase-downloads.html
    <li><b>Linux</b></li> Executar o comando.<br/>

```bash
$ sudo apt install oracle-java15-installer
```
   </ul>
</ul>
 
<ul>
  <li><b>Node.js</b></li>
    <ul>
    <li><b>Windows</b></li> Realizar o download na página abaixo.<br/>https://nodejs.org/en/download/
    <li><b>Linux</b></li>Executar o comando.<br/>
    
```bash
$ sudo apt install nodejs
```    
  </ul>
</ul>

<ul>
  <li><b>IDE</b></li>
    <ul>
    <li>Ambiente de Desenvolvimento Integrado</b></li> É necessário o download e instalação de uma IDE, como Eclipse ou Visual Studio Code.<br/>https://code.visualstudio.com/download
    https://www.eclipse.org/downloads/
        
  </ul>
</ul>


<ul>
  <li><b>PostgreSQL e PostGIS</b></li>
  <ul>
  Realizar o download na página abaixo de acordo com o seu SO.<br/>
  https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
  
  <p></p>
  
  **Observação:** Para a instalação da extensão PostGIS, é necessário marcar a opção de categoria <i>Spatial Extensions</i> e escolher a versão, conforme imagem abaixo.
  </ul>
</ul>

<p align="center"><img src  = "https://i.stack.imgur.com/FvTZm.png"></center></p>


