import jumbo_func
from flask import Flask, request, redirect, url_for, render_template, json, Response, jsonify
import shapefile
import psycopg2
from werkzeug.utils import secure_filename
import os
import time


programa = r"C:\Program Files\QGIS 3.10\bin\ogr2ogr.exe"
usuario = "postgres"
senha = "postgres"
host = "127.0.0.1"
porta = "5432"
database = "meuteste"
arquivo_shp = r"D:\geoft_bho_2017_ponto_drenagem.shp"
tabela = "geoft_bho_2017_ponto_drenagem"
colunas_selecionadas = ['', 'idponto', '', '', '', 'dsversao']

conn = jumbo_func.conectar (host, porta, usuario, database, senha)


#funcao para listar tabelas do servidor
print (jumbo_func.get_tables(conn))


#funcao para capturar nome das colunas do banco
print (jumbo_func.get_col_names_db(conn, tabela))


#funcao para capturar nome das colunas do shapefile
colunas_tabela = jumbo_func.get_col_names_shp (arquivo_shp)
print (colunas_tabela)


#funcao para capturar selecao feita pelo usuario
parametrizar = jumbo_func.parametrizar (colunas_selecionadas, colunas_tabela)
print (parametrizar)


#funcao para inserir shapefile no banco
#jumbo_func.inserir (programa, parametrizar, host, usuario, database, senha, arquivo_shp)


