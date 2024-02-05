const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const PORT = process.env.PORT || 3001;


conn.sync({ force: false }).then(async () => {
  // Ejemplo de cómo agregar un nuevo Lead a la base de datos
  try {
/*     await Leads.bulkCreate(loteData, {
      order: [['createdAt', 'ASC']], // 'ASC' para obtener en orden ascendente (por fecha de creación)

    });
 */

    server.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error('Error al agregar datos a la base de datos:', error);
  }
});

/* conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
}); */
