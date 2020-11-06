import jumbo
import shapefile
import psycopg2
import pathlib
import os
from flask import Flask, request, json
from flask_cors import CORS
from werkzeug.utils import secure_filename


app = Flask(__name__)
CORS(app)


@app.route('/login', methods=['GET', 'POST'])
def login():
    global usuario
    global senha
    global host
    global porta
    global database
    global jb
    usuario = request.json["usuario"]
    senha = request.json["senha"]
    host = request.json["host"]
    porta = request.json["porta"]
    database = request.json["database"]
    jb = jumbo.Jumbo()
    jb.conectar(host, porta, usuario, database, senha)
    print("OK")
    return {"conexao": True}


@app.route('/upload', methods=['GET', 'POST'])
def upload():
    global arquivo_shp
    global arquivo_shp_end
    jumbo_recebe = pathlib.Path("jumbo_recebe").absolute()
    arquivo = request.files['shp']
    caminho = os.path.join(jumbo_recebe, secure_filename(arquivo.filename))
    arquivo.save(caminho)
    arquivo_shp = arquivo.filename[:-4] + ".shp"
    arquivo_shp_end = (caminho[:-4] + ".shp")
    print (arquivo_shp)
    print (arquivo_shp_end)
    return {'upload': True}


@app.route('/get_col_names_shp', methods=['GET'])
def get_col_names_shp():
    return {'colunas_shp': jb.get_col_names_shp(arquivo_shp_end), "arquivo_importado": arquivo_shp_end}


@app.route('/get_col_names_db', methods=['GET'])
def get_col_names_db():
    global colunas_tabela
    colunas_tabela = jb.get_col_names_db(tabela)
    return {'colunas_db': colunas_tabela, "tabela_selecionada": tabela}


@app.route('/get_tab_name', methods=['POST'])
def get_tab_name():
    global tabela
    tabela = request.json["tabela"]
    return {'get_tab_name': True}


@app.route('/get_tabelas', methods=['GET'])
def get_tabelas():
    global lista_tabelas
    lista_tabelas = jb.get_tables()
    return {'tabelas': lista_tabelas}


@app.route('/inserir', methods=['GET', 'POST'])
def inserir():
    global colunas_selecionadas
    colunas_selecionadas = request.json["colunas_selecionadas"]
    parametrizar = jb.parametrizar(
        colunas_selecionadas, colunas_tabela)
    inserir = jb.inserir(parametrizar, host, usuario,
                    database, senha, arquivo_shp_end, arquivo_shp, tabela)
    return {'resultado': inserir}
