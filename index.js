const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// Importa as rotas
const TaskRouter = require("./src/routes/task.routes");

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();

// Middleware para habilitar CORS e parsing de JSON
app.use(cors());
app.use(express.json());

// Rota para tasks
app.use("/tasks", TaskRouter);

// Porta padrão ou 8000 se não estiver definida
const port = process.env.PORT || 8000;

// Inicializa o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}!`);
});
