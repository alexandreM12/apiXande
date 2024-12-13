const Produto = require("../models/produtoModel");

exports.getAllProdutos = async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.status(200).json(produtos);
  } catch (err) {
    res.status(500).json({ mensagem: "Erro ao listar produtos", error: err });
  }
};

exports.createProduto = async (req, res) => {
  const { nome, descricao, quantidade, foto } = req.body;

  try {
    const novoProduto = new Produto({ nome, descricao, quantidade, foto });
    const produtoSalvo = await novoProduto.save();
    res.status(201).json(produtoSalvo);
  } catch (err) {
    res.status(500).json({ mensagem: "Erro ao criar produto", error: err });
  }
};


exports.updateProduto = async (req, res) => {
  const { id } = req.params;
  const { nome, descricao, quantidade, foto } = req.body;

  try {
    const produtoAtualizado = await Produto.findByIdAndUpdate(
      id,
      { nome, descricao, quantidade, foto },
      { new: true }
    );

    if (!produtoAtualizado) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    res.status(200).json(produtoAtualizado);
  } catch (err) {
    res.status(500).json({ mensagem: "Erro ao atualizar produto", error: err });
  }
};


exports.deleteProduto = async (req, res) => {
  const { id } = req.params;

  try {
    const produtoDeletado = await Produto.findByIdAndDelete(id);

    if (!produtoDeletado) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    res.status(200).json({ mensagem: "Produto deletado com sucesso!" });
  } catch (err) {
    res.status(500).json({ mensagem: "Erro ao deletar produto", error: err });
  }
};
