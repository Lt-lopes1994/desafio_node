const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3000;

const connection = mysql.createConnection({
	host: "db",
	user: "root",
	password: "root",
	database: "nodedb",
});

const nomesAleatorios = ["Alice", "Bob", "Charlie", "David", "Eve"];

app.get("/nomes", (req, res) => {
	const nomeAleatorio =
		nomesAleatorios[Math.floor(Math.random() * nomesAleatorios.length)];

	connection.query(
		"INSERT INTO nomes (nome) VALUES (?)",
		[nomeAleatorio],
		(error) => {
			if (error) throw error;

			connection.query("SELECT nome FROM nomes", (error, results) => {
				if (error) throw error;

				let response = "<h1>Full Cycle Rocks!</h1>";
				response += "<ul>";
				for (const row of results) {
					response += `<li>${row.nome}</li>`;
				}
				response += "</ul>";

				res.send(response);
			});
		},
	);
});

app.listen(port, () => {
	console.log(`Servidor rodando em http://localhost:${port}`);
});
