import os
import shapefile
from psycopg2 import sql, connect


class Jumbo():


    def __init__(self):
        self.conectado = False
        pass


    # funcao para conectar-se ao banco
    def conectar(self, host, porta, usuario, database, senha):
        try:
            print("Iniciando a conexão")
            self.conn = connect(user="%s" % (usuario),
                                password="%s" % (senha),
                                host="%s" % (host),
                                port="%s" % (porta),
                                database="%s" % (database))
            self.conectado = True
            return True
        except:
            return False


    # funcao para inserir shapefile no banco
    def inserir(self, parametrizar, host, usuario, database, senha, arquivo_shp_end, arquivo_shp, tabela):
        print("Inserido os dados na tabela selecionada")
        programa = r"C:\Program Files\QGIS 3.10\bin\ogr2ogr.exe"
        # command = r'start cmd /c ""%s" -f "PostgreSQL" -nlt MULTIPOINT -append -fieldmap %s PG:"host=%s user=%s dbname=%s password=%s" "%s""' % (programa, parametrizar, host, usuario, database, senha, arquivo_shp)
        command = r'start cmd /c ""%s" -f "PostgreSQL" -nlt MULTIPOINT -sql "%s from %s" PG:"host=%s user=%s dbname=%s password=%s" "%s" -nln %s"' % (
            programa, parametrizar, arquivo_shp[:-4], host, usuario, database, senha, arquivo_shp_end, tabela)
        print(command)
        return os.system(command,)


    # funcao para capturar tabelas existentes no banco
    def get_tables(self):
        print("Lendo nomes das tabelas do banco")
        self.tables = []
        conn = self.conn
        tab_cursor = conn.cursor()
        tab_cursor.execute("""SELECT table_name FROM information_schema.tables
        WHERE table_schema = 'public'""")
        tab_names = (tab_cursor.fetchall())
        for tup in tab_names:
            self.tables += [tup[0]]
        # tab_cursor.close()
        return self.tables[3:]


    # funcao para capturar nome das colunas do banco
    def get_col_names_db(self, tabela):
        print("Lendo nomes das colunas da tabela selecionada")
        columns = []
        conn = self.conn
        col_cursor = conn.cursor()
        col_names_str = r"SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = '%s';" % (
            tabela)
        col_cursor.execute(col_names_str)
        col_names = (col_cursor.fetchall())
        for tup in col_names:
            columns += [tup[0]]
        # col_cursor.close()
        return columns[1:-1]


    # funcao para capturar nome das colunas do shapefile
    def get_col_names_shp(self, arquivo_shp_end):
        print("Lendo nomes das colunas do arquivo shapefile")
        sf = shapefile.Reader(arquivo_shp_end)
        file = list(field[0] for field in sf.fields)
        return file[1:]


    # funcao para capturar selecao feita pelo usuario
    def parametrizar(self, colunas_selecionadas, colunas_tabela):
        print("Tratando a parametrização")
        select_sql_string = 'SELECT'
        as_sql_string = ' as'
        for x in range((len(colunas_selecionadas))):
            if colunas_selecionadas[x] != '':
                select_sql_string += ' %s' % (colunas_tabela[x])
                as_sql_string += ' %s' % (colunas_selecionadas[x])
                if x < (len(colunas_selecionadas) - 1):
                    select_sql_string += ','
                    as_sql_string += ','
        if select_sql_string[-1] == ',':
            select_sql_string = select_sql_string.replace(',','')
        if as_sql_string[-1] == ',':
            as_sql_string = as_sql_string.replace(',','')
        select_sql_string += as_sql_string
        print (select_sql_string)
        return select_sql_string


    def close(self):
        self.conn = None
        self.conectado = False
