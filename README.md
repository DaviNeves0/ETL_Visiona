# Sistema web JumboETL
![](https://i.imgur.com/pmG7ERF.png)
Projeto da faculdade FATEC com parceria da empresa Visiona Tecnologia Espacial S.A.

# Sprint 2
![](https://i.imgur.com/eiujiX8.png)


# Demonstração do Sistema JumboETL em funcionamento
Link : https://www.youtube.com/watch?v=O3-_uzux-_U

<a align="center" href="https://www.youtube.com/watch?v=O3-_uzux-_U">
<img border="0" src="http://img.youtube.com/vi/O3-_uzux-_U/0.jpg" width="100%" >
</a>


# Burndown Chart
![](https://i.imgur.com/b5Yyi81.png)


<ul>
  <li><b>Tarefas</b></li>
    1. Desenvolver elementos visuais de design<br/>
    2. Configurar Flask<br/>
    3. Programar função conectar<br/>
    4. Programar função inserir -> ponto<br/>
    5. Programar função inserir -> linha<br/>
    6. Programar função inserir -> poligono<br/>
    7. Programar função get_tables<br/>
    8. Programar função get_col_names_db<br/>
    9. Programar função get_col_names_shp<br/>
    10. Programar função parametrizar<br/>
    11. Configurar React<br/>
    12. Progamar página login<br/>
    13. Progamar página lista<br/>
    14. Progamar página inserir<br/>
    15. Testes<br/>
    16. Documentação do Github<br/>
    17. Preparar apresentacao
</ul>

# Tecnologias
![](https://i.imgur.com/w3jtxBV.jpg)

<ul>
  <li><b>Front-End</b></li>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
          - Bibliotecas: React, Axios, Ant Design
    </ul>
  
  <li><b>Back-End</b></li>
    <ul>
      <li>Python 3</li>
          - Bibliotecas: Flask, pyshp, psycopg2, flask-cors, python-dotenv
      <li>GDAL</li>
          - Utilitário: ogr2ogr
      <li>PostgreSQL</li>
          - Extensão: PostGIS   
    </ul>
</ul>

# Backlog
![](https://i.imgur.com/W6hY6KK.png)

# Instruções de instalação



<ul>
  <li><b>Python 3</b></li>
    <ul>
    <li><b>Windows</b></li> Realizar o download na página abaixo.<br/>https://www.python.org/downloads/
    <li><b>Linux</b></li> Executar o comando.<br/>

```bash
$ sudo apt install pip3
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
  <li><b>Virtualenv</b></li>
  <ul>
    <li><b>Windows</b></li> Executar o comando.<br/>
   
```bash
> pip install virtualenv
```

   <li><b>Linux</b></li>Executar o comando.<br/>  
 
```bash
# Debian, Ubuntu
$ sudo apt-get install python-virtualenv

# CentOS, Fedora
$ sudo yum install python-virtualenv

# Arch
$ sudo pacman -S python-virtualenv
```

  </ul>  
</ul>
 
<ul>

<li><b>Criação do ambiente virtual</b></li>

<ul>

<li><b>Windows</b></li>

```bash
> py -m venv env
> .\env\Scripts\activate
```

   Instalar as bibliotecas no virtualenv
```bash
> pip install -r requirements.txt
```

<li><b>Linux</b></li>

```bash
$ python3 -m venv env
$ source env/bin/activate
```

   Instalar as bibliotecas no virtualenv
```bash
$ pip3 install -r requirements.txt
```

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


