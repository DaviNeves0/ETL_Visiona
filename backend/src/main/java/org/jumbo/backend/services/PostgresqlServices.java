package org.jumbo.backend.services;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class PostgresqlServices {

	public static Connection getConnection(String host, String port, String database, String user, String password)
			throws SQLException {
		System.out.println("\tIniciando a conexão");
		System.out.printf("\tParâmetros recebidos: %s, %s, %s, %s, %s\n", user, password, host, port, database);
		
		String url = String.format("jdbc:postgresql://%s:%s/%s", host, port, database);
		Connection con = DriverManager.getConnection(url, user, password);
		return con;
	}

	public static List<String> getTables(String host, String port, String database, String user, String password)
			throws Exception {		
		List<String> tabelas = new ArrayList<>();
		Connection con = getConnection(host, port, database, user, password);
		
		System.out.println("\tLendo nomes das tabelas do banco");
		
		Statement stmt = con.createStatement();
		ResultSet rs = stmt
				.executeQuery("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'");
		while (rs.next()) {
			tabelas.add(rs.getString(1));
		}
		stmt.close();
		tabelas = tabelas.subList(3, tabelas.size());
		tabelas = tabelas.stream().sorted().collect(Collectors.toList());
		
		System.out.println("\tTabelas existentes: " + tabelas);
		return tabelas;

	}

	public static List<String> getDbtColNames(String table, String host, String port, String database, String user,
			String password) throws SQLException {

		List<String> colunasDb = new ArrayList<>();
		List<String> chaves = new ArrayList<>();

		Connection con = getConnection(host, port, database, user, password);
		Statement stmt = con.createStatement();

		System.out.println("\tLendo nomes das colunas da table selecionada");
		System.out.println("\tTabela selecionada: " + table);

		String colNamesStr = String
				.format("SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = '%s';", table);
		String chvsPrimStr = String.format(
				"SELECT column_name" + " FROM information_schema.table_constraints"
						+ " JOIN information_schema.key_column_usage"
						+ " USING (constraint_catalog, constraint_schema, constraint_name, table_catalog, table_name)"
						+ " WHERE constraint_type = 'PRIMARY KEY' AND (table_name) = ('%s') ORDER BY ordinal_position;",
				table);

		ResultSet rsColNames = stmt.executeQuery(colNamesStr);
		ResultSet rsChvsPrim = stmt.executeQuery(chvsPrimStr);

		while (rsChvsPrim.next()) {

			chaves.add(rsChvsPrim.getString(1));
		}

		while (rsColNames.next()) {

			colunasDb.add(rsColNames.getString(1));
		}

		colunasDb.remove("geom");

		colunasDb.removeAll(chaves);

		stmt.close();
		
		System.out.println("\t" + colunasDb);

		return colunasDb;
	}

}
