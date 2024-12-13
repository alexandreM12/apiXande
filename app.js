const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const produtoRoutes = require("./routes/produtoRoutes");


dotenv.config();

const app = express();

DB = process.env.DB_URL;

mongoose.connect(DB)  
  .then(() => console.log("Conectado ao Banco de Dados"))
  .catch(err => console.log("Erro ao Conectar ao Banco de dados", err));

app.use(helmet());  
app.use(cors());
app.use(bodyParser.json());

app.use("/api", produtoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});