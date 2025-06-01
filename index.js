const express = require('express');
const app = express();

const categoriaRoutes = require('./src/routes/categoriaRoutes');
const productoRoutes = require('./src/routes/productoRoutes');

app.use(express.json());

app.use('/categorias', categoriaRoutes);
app.use('/productos', productoRoutes);

app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
