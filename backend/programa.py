import jumbo
import shapefile
import psycopg2
import os

from flask import Flask, request, redirect, url_for, render_template, json, Response, jsonify
from werkzeug.utils import secure_filename
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

pasta_shp = os.path.join(os.getcwd(), 'shp')

arquivo_shp = None
arquivo_shp_end = None
tabela = None
colunas_selecionadas = None
colunas_tabela = None
lista_tabelas = None

usuario = None
senha = None
host = None
porta = None
database = None

conexao = jumbo.Jumbo()


@app.route('/login', methods=['GET', 'POST'])
def login():
    global conexao
    global usuario
    global senha
    global host
    global porta
    global database
    usuario = request.json["usuario"]
    senha = request.json["senha"]
    host = request.json["host"]
    porta = request.json["porta"]
    database = request.json["database"]
    try:
        conexao.conectar(host, porta, usuario, database, senha)
        return {"conexao": True}
    except:
        return {"conexao": False}


@app.route('/upload', methods=['GET', 'POST'])
def upload():
    global arquivo_shp
    global arquivo_shp_end
    arquivo = request.files['shp']
    arquivo_shp = arquivo.filename[:-4] + ".shp"
    caminho = os.path.join(pasta_shp, secure_filename(arquivo.filename))
    arquivo.save(caminho)
    arquivo_shp_end = arquivo.filename
    arquivo_shp_end = (caminho[:-4] + ".shp")
    return {'upload': True}


@app.route('/get_col_names_shp', methods=['GET'])
def get_col_names_shp():
    return {'colunas_shp': conexao.get_col_names_shp(arquivo_shp_end), "arquivo_importado": arquivo_shp_end}


@app.route('/get_col_names_db', methods=['GET'])
def get_col_names_db():
    global colunas_tabela
    colunas_tabela = conexao.get_col_names_db(tabela)
    return {'colunas_db': colunas_tabela, "tabela_selecionada": tabela}


@app.route('/get_tab_name', methods=['POST'])
def get_tab_name():
    global tabela
    tabela = request.json["tabela"]
    return {'get_tab_name': True}


@app.route('/get_tabelas', methods=['GET'])
def get_tabelas():
    global lista_tabelas
    lista_tabelas = conexao.get_tables()
    return {'tabelas': lista_tabelas}


@app.route('/inserir', methods=['GET', 'POST'])
def inserir():
    global colunas_selecionadas
    colunas_selecionadas = request.json["colunas_selecionadas"]
    try:
        parametrizar = conexao.parametrizar(
            colunas_selecionadas, colunas_tabela)
        conexao.inserir(parametrizar, host, usuario,
                        database, senha, arquivo_shp_end, arquivo_shp, tabela)
        return {'resultado': True}
    except:
        return {'resultado': False}
