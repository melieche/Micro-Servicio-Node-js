const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllProductos = async () => {
  return await prisma.producto.findMany({ include: { categoria: true } });
};

exports.createProducto = async (data) => {
  return await prisma.producto.create({ data });
};

exports.getProductoById = async (id) => {
  return await prisma.producto.findUnique({ where: { id }, include: { categoria: true } });
};

exports.updateProducto = async (id, data) => {
  return await prisma.producto.update({ where: { id }, data });
};

exports.deleteProducto = async (id) => {
  return await prisma.producto.delete({ where: { id } });
};