const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllCategorias = async () => {
  return await prisma.categoria.findMany({ include: { productos: true } });
};

exports.createCategoria = async (nombre) => {
  return await prisma.categoria.create({ data: { nombre } });
};

exports.getCategoriaById = async (id) => {
  return await prisma.categoria.findUnique({
    where: { id },
    include: { productos: true },
  });
};

exports.updateCategoria = async (id, nombre) => {
  return await prisma.categoria.update({
    where: { id },
    data: { nombre },
  });
};

exports.deleteCategoria = async (id) => {
  return await prisma.categoria.delete({
    where: { id },
  });
};