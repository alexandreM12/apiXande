const express = require("express");
const router = express.Router();
const produtoController = require("../controller/produtoController");

router.get("/produto", produtoController.getAllProdutos);

router.post("/produto", produtoController.createProduto);

router.put("/produto/:id", produtoController.updateProduto);

router.delete("/produto/:id", produtoController.deleteProduto);

module.exports = router;
