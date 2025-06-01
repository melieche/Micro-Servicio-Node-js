const productoService = require('../services/productoService');

exports.getAllProductos = async (req, res) => {
  try {
    const productos = await productoService.getAllProductos();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createProducto = async (req, res) => {
  try {
    const { nombre, descripcion, precio, stock, categoriaId } = req.body;
    const producto = await productoService.createProducto({ nombre, descripcion, precio, stock, categoriaId });
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProductoById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const producto = await productoService.getProductoById(id);
    if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProducto = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { nombre, descripcion, precio, stock, categoriaId } = req.body;
    const producto = await productoService.updateProducto(id, { nombre, descripcion, precio, stock, categoriaId });
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteProducto = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await productoService.deleteProducto(id);
    res.json({ mensaje: 'Producto eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

