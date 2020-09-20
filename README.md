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
![](https://i.imgur.com/8NKygdO.png)

# Requisitos

### Requisitos Funcionais
**[RF001] Acessar plataforma mini-ETL**  
O usuário deve ser capaz de acessar através de seu navegador padrão página para interagir com banco específico de dados georreferenciados. A conexão com o banco deve ser de forma automática e sem necessidade de entrada de login e senha pelo usuário.

**[RF002] Realizar upload de arquivos Shapefile**  
O usuário deve ser capaz de selecionar arquivos de seu dispositivo de acesso para serem carregados para o sistema. 

**[RF003] Converter upload para formato PostGIS**  
Ao realizar o upload e selecionar as configurações, o sistema fará a conversão para PostGIS e os dados serão gravados no banco.

**[RF004] Escolher configurações de upload**  
Ao realizar o upload, o sistema informa os campos existentes e o usuário escolhe o campo desejado para o campo de destino ou deixa em branco para não adicionar.

**[RF005] Registar metadados de upload**  
Preencher metadados ao selecionar opção de importação: Nome do arquivo, Nome do Autor do Upload, Categoria do Dado, e armazenar Data e Hora de Upload.

**[RF006] Listar dados disponíveis no banco**  
Acessar página que liste automaticamente todos os dados disponíveis no banco.

**[RF007] Fazer download de dados em formato Shapefile**  
O usuário deve ser capaz de fazer download dos dados disponíveis diretamente no formato Shapefile.

**[RF008] Busca por dado no banco**  
Possibilitar a busca por nome, categoria ou data.

**[RF009] Alterar metadados do banco**  
O usuário deve ser capaz de alterar dados disponíveis no banco: Nome do arquivo, Nome do Autor do Upload, Categoria do Dado.

**[RF010] Excluir dados do banco**  
O usuário deve ser capaz de excluir dados disponíveis no banco.

**[RF011] Visualizar dados disponíveis no banco**  
O usuário deve ser capaz de visualizar no formato mapa, os dados disponíveis no banco.

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

| Requisitos                                                 | Sprint (de 1 a 6) | Prioridade | Complexidade (de 1 a 5) |
| ---------------------------------------------------------- | ----------------- | ---------- | ----------------------- |
| **[RF001] Acessar plataforma mini-ETL**                    | 1, 2              | Essencial  | 2                       |
| **[RF002] Realizar upload de arquivos Shapefile no banco** | 1                 | Essencial  | 3                       |
| **[RF003] Converter upload para formato PostGIS**          | 3                 | Essencial  | 5                       |
| **[RF004] Escolher configurações de upload**               | 3                 | Essencial  | 5                       |
| **[RF005] Registar metadados de upload**                   | 2                 | Desejável  | 2                       |
| **[RF006] Listar dados disponíveis no banco**              | 2                 | Essencial  | 2                       |
| **[RF007] Fazer download de dados em formato Shapefile**   | 4                 | Essencial  | 5                       |
| **[RF008] Busca por dado no banco**                        | 5                 | Desejável  | 2                       |
| **[RF009] Alterar metadados do banco**                     | 5                 | Desejável  | 2                       |
| **[RF010] Excluir dados do banco**                         | 5                 | Importante | 2                       |
| **[RF011] Visualizar dados disponíveis no banco**          | 6                 | Desejável  | 5                       |
| **[NF001] Banco de Dados Geográficos PostgreSQL**          | 2, 3, 4, 5, 6     | Essencial  | 2                       |
| **[NF002] Plataforma Web**                                 | Todas             | Essencial  | 3                       |
| **[NF003] Usabilidade**                                    | Todas             | Desejável  | 3                       |
| **[NF004] Disponibilidade**                                | Todas             | Importante | 5                       |


