
### Projeto da faculdade FATEC com parceria da empresa Visiona Tecnologia Espacial S.A

<p align="center">
  <img src="https://i.ibb.co/7CQBMHN/icon.jpg" alt="drawing" width="250" />
</p>

## Team
<ul>
  <li><b>Scrum Master/Developer:</b> Davi Silva Martins das Neves</li>
  <li><b>Product Owner/Developer:</b> João Victor Marinho de Souza</li>
  <li><b>Developer:</b> Diego Rodrigo da Silva</li>
  <li><b>Developer:</b> Guilherme Oliveira Pontes Alvarenga</li>
  <li><b>Developer:</b> Guilherme Madeira da Silveira</li>
  <li><b>Developer:</b> Henrique Kenji Nawa</li>
  <li><b>Developer:</b> João Pedro Rabello Brasil de Mecenas</li>
  <li><b>Developer:</b> Pedro Cruz Oliveira Araújo</li>
  <li><b>Developer:</b> Thalles Santos Torres</li>
</ul>

## Sprint 2
O usuário consegue se conectar ao banco de dados PostgreSQL/PostGIS e enviar arquivos Shapefile do tipo ponto para ele. Assim como, visualizar os Shapefiles disponíveis e selecionar as colunas da tabela que gostaria de visualizar.

## Tecnologias

<ul>
  <li><b>Front-End</b></li>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>React</li>
      <li>Flask</li>
     </ul>
  
  <li><b>Back-End</b></li>
    <ul>
      <li>Python 3</li>
          - Bibliotecas: Flask, pyshp, psycopg2-binary
      <li>GDAL</li>
          - Utilitário: ogr2ogr
      <li>PostgreSQL</li>
          - Extensão: PostGIS
      <li>Node.js</li>
  </ul>
</ul>

## Instruções de instalação

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
    <li><b>Linux</b></li>Executar o comando. <br/>
    
```bash
$ sudo apt install nodejs
```    
  </ul>
</ul>  

<ul>
  <li><b>Virtualenv</b></li>
  <ul>
    <li><b>Windows</b></li> Executar o comando<br/>
   
```bash
$ pip3 install virtualenv
```

   <li><b>Linux</b></li>Executar o comando. <br/>  
 
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
    
   Criando um diretório para o ambiente.
    
```bash
$ mkdir myproject
$ cd myproject
$ python3 -m venv venv
```
  No Windows
```bash
$ py -3 -m venv venv
```

  Ativando o virtualenv
```bash
$ . venv/bin/activate
```

  No Windows
```bash
> venv\Scripts\activate
```

  Instalar as bibliotecas no virtualenv
```bash
pip3 install -r requirements.txt
```
  
</ul>

<ul>
  <li><b>PostgreSQL e PostGIS</b></li>
  &emsp;Realizar o download na página abaixo de acordo com o seu SO.<br/>
  https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
  
  **Observação:** Para a instalação da extensão PostGIS, é necessário marcar a opção de categoria <i>Spatial Extensions</i> e escolher a versão, conforme imagem abaixo.
  
  <img src  = "https://i.stack.imgur.com/FvTZm.png">
  
  
  
</ul>
    

## Demonstração
