import os
import shapefile
import subprocess
from psycopg2 import sql, connect

class Jumbo():


    def __init__(self):
        pass


    # funcao para conectar-se ao banco
    def conectar(self, host, porta, usuario, database, senha):
        print("\tIniciando a conexão")
        print("\t%s %s %s %s %s" % (host, porta, usuario, database, senha))
        self.conn = connect(user="%s" % (usuario),
                                password="%s" % (senha),
                                host="%s" % (host),
                                port="%s" % (porta),
                                database="%s" % (database))
        return "\tConectado"


    # funcao para inserir shapefile no banco
    def inserir(self, parametrizar, host, usuario, database, senha, arquivo_shp_end, arquivo_shp, tabela):
        print("\tInserido os dados na tabela selecionada")
        print("\t%s" % (arquivo_shp_end))
        print("\t%s" % (arquivo_shp))
        print("\t%s" % (tabela))
        programa = r"C:\Program Files\QGIS 3.10\bin\ogr2ogr.exe"
        de_para = r"%s from %s" % (parametrizar, arquivo_shp[:-4])
        conexao = r"PG:host=%s user=%s dbname=%s password=%s" % (host, usuario, database, senha)
        sf = shapefile.Reader(arquivo_shp_end)
        tipo = sf.shapeTypeName 
        if tipo == "MULTIPOINT":
            print("\tTipo: %s" % (sf.shapeTypeName))
            command = [programa, "-f", "PostgreSQL", "-nlt", "MULTIPOINT", "-sql", de_para, conexao, arquivo_shp_end, "-nln", tabela]
            print("\t%s" % (command))
            subprocess.check_call(command)
            return "\tSucesso"
            # command = r'start cmd /c ""%s" -f "PostgreSQL" -nlt MULTIPOINT -sql "%s from %s" PG:"host=%s user=%s dbname=%s password=%s" "%s" -nln %s"' % (
            #     programa, parametrizar, arquivo_shp[:-4], host, usuario, database, senha, arquivo_shp_end, tabela)
            # print("\t%s" % (command))
            # print ("\tSucesso")
            # return os.system(command)
        elif tipo == "POLYLINE":
            print("\tTipo: %s" % (sf.shapeTypeName))
            command = [programa, "-f", "PostgreSQL", "-nlt", "MULTILINESTRING", "-sql", de_para, conexao, arquivo_shp_end, "-nln", tabela]
            print("\t%s" % (command))
            subprocess.check_call(command)
            return "\tSucesso"
        elif tipo == "POLYGON":
            print("\tTipo: %s" % (sf.shapeTypeName))
            command = [programa, "-f", "PostgreSQL", "-nlt", "MULTIPOLYGON", "-sql", de_para, conexao, arquivo_shp_end, "-nln", tabela]
            print("\t%s" % (command))
            subprocess.check_call(command)
            return "\tSucesso"
        return "\tTipo Incompatível: %s" % (sf.shapeTypeName)


    # funcao para capturar tabelas existentes no banco
    def get_tables(self):
        print("\tLendo nomes das tabelas do banco")
        tabelas = []
        conn = self.conn
        tab_cursor = conn.cursor()
        tab_cursor.execute(r"""SELECT table_name FROM information_schema.tables 
                               WHERE table_schema = 'public'""")
        tab_names = (tab_cursor.fetchall())
        for tup in tab_names:
            tabelas += [tup[0]]
        tabelas = tabelas[3:]
        tabelas = sorted(tabelas, key=str.casefold)
        print ("\t%s" % (tabelas))
        print ("\tSucesso")
        # tab_cursor.close()
        return tabelas


    # funcao para capturar nome das colunas do banco
    def get_col_names_db(self, tabela):
        print("\tLendo nomes das colunas da tabela selecionada")
        print("\t%s" % (tabela))
        colunas_db = []
        chaves = []
        conn = self.conn
        col_cursor = conn.cursor()
        col_names_str = r"""SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS 
                            WHERE table_name = '%s';""" % (tabela)
        chvs_prim_str = r"""SELECT column_name 
                            FROM information_schema.table_constraints 
                                JOIN information_schema.key_column_usage 
                                    USING (constraint_catalog, constraint_schema, 
                                           constraint_name, table_catalog, table_name) 
                            WHERE constraint_type = 'PRIMARY KEY' 
                            AND (table_name) = ('%s') 
                            ORDER BY ordinal_position;""" % (tabela)
        col_cursor.execute(col_names_str)
        col_names = (col_cursor.fetchall())
        col_cursor.execute(chvs_prim_str)
        chvs_prim_str = (col_cursor.fetchall())
        for tup in chvs_prim_str:
            chaves += [tup[0]]
        for tup in col_names:
            if tup[0] != "geom" and tup[0] not in chaves:
                colunas_db += [tup[0]]
        # col_cursor.close()
        print("\t%s" % (colunas_db))
        print ("\tSucesso")
        return colunas_db


    # funcao para capturar nome das colunas do shapefile
    def get_col_names_shp(self, arquivo_shp_end):
        print("\tLendo nomes das colunas do arquivo shapefile")
        print("\t%s" % (arquivo_shp_end))
        sf = shapefile.Reader(arquivo_shp_end)
        colunas_shp = list(field[0] for field in sf.fields)
        print("\t%s" % (colunas_shp[1:]))
        print ("\tSucesso")
        return colunas_shp[1:]


    # funcao para capturar selecao feita pelo usuario
    def parametrizar(self, colunas_selecionadas, colunas_tabela):
        print("\tTratando a parametrização")
        print("\t%s" % (colunas_selecionadas))
        print("\t%s" % (colunas_tabela))
        select_sql_string = 'SELECT'
        for x in range((len(colunas_selecionadas))):
            if colunas_selecionadas[x] != '':
                select_sql_string += ' %s as %s,' % (colunas_selecionadas[x], colunas_tabela[x])
        if select_sql_string[-1] == ',':
            select_sql_string = select_sql_string[:-1]
        print ("\tSucesso")
        return select_sql_string


    def close(self):
        self.conn = None