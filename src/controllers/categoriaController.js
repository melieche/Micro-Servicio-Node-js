const categoriaService = require('../services/categoriaService');

exports.getAllCategorias = async (req, res) => {
  try {
    const categorias = await categoriaService.getAllCategorias();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createCategoria = async (req, res) => {
  try {
    const { nombre } = req.body;
    const categoria = await categoriaService.createCategoria(nombre);
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCategoriaById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const categoria = await categoriaService.getCategoriaById(id);
    if (!categoria) return res.status(404).json({ error: 'Categoría no encontrada' });
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCategoria = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { nombre } = req.body;
    const categoria = await categoriaService.updateCategoria(id, nombre);
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCategoria = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await categoriaService.deleteCategoria(id);
    res.json({ mensaje: 'Categoría eliminada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
