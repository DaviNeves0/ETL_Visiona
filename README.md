# Projeto Integrador 3o. ADS A - JumboETL

Projeto da faculdade FATEC com parceria da empresa Visiona Tecnologia Espacial S.A.

# Team
**Product Owner/Developer:** João Victor Marinho de Souza  
**Scrum Master/Developer:** Davi Silva Martins das Neves  
**Developer:** Diego Rodrigo da Silva  
**Developer:** Guilherme Oliveira Pontes Alvarenga  
**Developer:** Guilherme Madeira da Silveira  
**Developer:** Henrique Kenji Nawa  
**Developer:** João Pedro Rabello Brasil de Mecenas  
**Developer:** Pedro Cruz Oliveira Araújo  
**Developer:** Thalles Santos Torres  

# Sprints

| Sprint                                                              | Data de Entrega |
| ------------------------------------------------------------------- | --------------- |
| [Sprint 1](https://github.com/DaviNeves0/ETL_Visiona/tree/sprint-1) | 20 set 2020     |
| [Sprint 2](https://github.com/DaviNeves0/ETL_Visiona/tree/sprint-2) | 04 out 2020     |
| [Sprint 3](https://github.com/DaviNeves0/ETL_Visiona/tree/sprint-3) | 18 out 2020     |
| [Sprint 4](https://github.com/DaviNeves0/ETL_Visiona/tree/sprint-4) | 01 nov 2020     |
| [Sprint 5](https://github.com/DaviNeves0/ETL_Visiona/tree/sprint-5) | 15 nov 2020     |
| [Sprint 6](https://github.com/DaviNeves0/ETL_Visiona/tree/sprint-6) | 29 nov 2020     |

# Desafio
A empresa parceira enfrenta dificuldade de acessos mútuos de funcionários ao software que atualmente utiliza para trabalhar com dados georreferenciados, deste problema surge a ideia do projeto, a proposta de um sistema que faça a conversão de arquivos Shapefile e comunique-se com o banco para inserir ou recuperar esses dados, por meio de uma interface gráfica simples e intuitiva.

# Escopo do Produto
O sistema permite gerenciar os arquivos de dados georreferenciados no formato Shapefile, junto ao Banco de Dados. Ele utiliza a ferramenta de software ETL que compõem três etapas (extração, transformação e carregamento) e possui interface gráfica de usuário (GUI). Construído para interagir com dados georreferenciados (PostGIS/PostgreSQL), promete de maneira simples o usuário alimentar, manipular e recuperar arquivos no formato Shapefile desse banco. A aplicação oferece disponibilidade e a conveniência de rodar em qualquer dispositivo com suporte a navegadores web.

# Atores
**Analista GIS:** Possui acesso ao acervo de arquivos armazenados e pode armazenar arquivos.

# Casos de Uso
![](https://imgur.com/3UwyV6f.png)

# Requisitos

### Requisitos Funcionais
**[RF001] Conectar com o banco**  
A configuração para a conexão com o banco deve ser de forma simples e intuitiva.

**[RF002] Listar dados disponíveis no banco**  
Acessar página que liste automaticamente todos os dados disponíveis no banco.

**[RF003] Selecionar tabela do banco para inserção de dados**  
Usuário deve ser capaz de escolher tabela específica do banco que receberá os dados carregados do arquivo Shapefile.

**[RF004] Realizar upload de arquivos Shapefile**  
O usuário deve ser capaz de selecionar arquivos de seu dispositivo de acesso para serem carregados para o sistema, sendo o mesmo capaz de manipular dados em ponto, linhas, polígonos e arquivos extras.

**[RF005] Configurar parametrização de inserção**  
Ao realizar o upload, o sistema informa os campos existentes e o usuário pode configurar as correspondências das colunas do dado (configuração DE-PARA).

**[RF006] Converter para formato PostGIS**  
Ao realizar o upload e selecionar as configurações, o sistema fará a conversão para PostGIS e os dados serão gravados no banco.

**[RF007] Selecionar tabela do banco para inserção de dados**  
Usuário deve ser capaz de escolher tabela específica do banco que extrairá os dados para o arquivo Shapefile.

**[RF008] Configurar parametrização de extração**  
O usuário pode configurar quais colunas deseja extrair para o arquivo Shapefile (configuração DE-PARA).

**[RF009] Realizar download de dados em formato Shapefile**  
O usuário deve ser capaz de fazer download dos dados disponíveis diretamente no formato Shapefile.

**[RF010] Buscar por dado no banco**  
Possibilitar a busca por tabela.

###	Requisitos Não-Funcionais

**[NF001] Banco de Dados Geográficos PostgreSQL**  
Sistema deve estar integrado com o formato PostGIS em banco de dados PostgresSQL

**[NF002] Plataforma Web**  
Sistema acessível por navegadores.

**[NF003] Usabilidade**  
Sistema deve possuir interface objetiva e fácil de utilizar.

**[NF004] Disponibilidade**  
Sistema deve possibilitar múltiplos acessos.

# Backlog

| Sprint     | O que será entregue | Valor  | 
| ---------- |  -----------------  |  ----  | 
|  1         | **Backlog <br/>Protótipo <br/>[RF004] Realizar upload de arquivos Shapefile**  | O usuário consegue carregar para o servidor arquivos Shapefile que serão posteriormente lidos pelo sistema.  | 
|  2         | **[RF001] Conectar com o banco <br/>[RF002] Listar dados disponíveis no banco <br/>[RF003] Selecionar tabela do banco para inserção de dados <br/>[RF004] Realizar upload de arquivos Shapefile <br/>[RF005] Configurar parametrização de inserção <br/>[RF006] Converter para formato PostGIS <br/>[NF001] Banco de Dados Geográficos PostgreSQL <br/>[NF002] Plataforma Web <br/>[NF003] Usabilidade <br/>[NF004] Disponibilidade <br/>**  | O usuário consegue inserir dados de arquivos Shapefile do tipo Ponto. | | 
|  3         | **[RF003] Selecionar tabela do banco para inserção de dados <br/>[RF004] Realizar upload de arquivos Shapefile <br/>[RF005] Configurar parametrização de inserção<br/>[RF006] Converter para formato PostGIS <br/>[NF001] Banco de Dados Geográficos PostgreSQL <br/>[NF002] Plataforma Web <br/>[NF003] Usabilidade <br/>[NF004] Disponibilidade <br/>**    | O usuário consegue inserir dados de arquivos Shapefile do tipo Linha.    | 
|  4         | **[RF003] Selecionar tabela do banco para inserção de dados<br/>[RF004] Realizar upload de arquivos Shapefile <br/>[RF005] Configurar parametrização de inserção <br/>[RF006] Converter para formato PostGIS <br/>[NF001] Banco de Dados Geográficos PostgreSQL <br/>[NF002] Plataforma Web <br/>[NF003] Usabilidade <br/>[NF004] Disponibilidade <br/>** | O usuário consegue inserir dados de arquivos Shapefile do tipo Polígono.|
|  5         | **[RF007] Selecionar tabela do banco para inserção de dados <br/>[RF009] Realizar download de dados em formato Shapefile <br/>[NF001] Banco de Dados Geográficos PostgreSQL <br/>[NF002] Plataforma Web <br/>[NF003] Usabilidade <br/>[NF004] Disponibilidade <br/>**  | O usuário consegue extrair dados do banco para download no formato de arquivo Shapefile (sem parametrização).  | 
|  6         | **[RF007] Selecionar tabela do banco para inserção de dados <br/>[RF008] Configurar parametrização de extração <br/>[RF009] Realizar download de dados em formato Shapefile <br/>[RF010] Buscar por dado no banco <br/>[NF001] Banco de Dados Geográficos PostgreSQL <br/>[NF002] Plataforma Web <br/>[NF003] Usabilidade <br/>[NF004]Disponibilidade <br/>**   | O usuário consegue extrair dados do banco para download no formato de arquivo Shapefile (com parametrização).<br/>O usuário consegue buscar por tabela específica no banco. | 

# Protótipo do sistema JumboETL

https://www.figma.com/proto/GncjZvh6OUpswEQtNUTe2t/JumboETL?node-id=216%3A0&scaling=contain

![](https://imgur.com/HR5dlrr.gif)




