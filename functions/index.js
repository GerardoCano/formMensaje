// Este texto se ejecuta en el servidor.
/** Se importa el objeto functions de la librería "firebase-functions". */
const functions = require('firebase-functions');

/* Se exporta la función sobre https llamada "mensaje". */
exports.mensaje = functions.https.onRequest(
  /** Código para la función mensaje.
   * @param {{query:Object}} request solicitud que recibe el servidor.
   * Corresponde a la librería Express.
   * @param {{send:(texto:string)=>void}} response respuesta que devuelve el
   * servidor. Corresponde a la librería Express. */
  (request, response) => {
    try {
      // verifica que el parámetro nombre recibido del navegador esté correcto.
      if (!request.query.nombre) {
        // Entra aquí si el nombre es null, undefined o ""
        throw new Error("Falta el nombre");
      } else if (!request.query.pasatiempo) {
        // Entra aquí si el pasatiempo es null, undefined o ""
        throw new Error("Falta el pasatiempo");
      }else if (!request.query.edad) {
        // Entra aquí si el edad es null, undefined o ""
        throw new Error("Falta la edad");
      }
      /* Solo se llega a esta parte si nombre1 y nombre 2 tienen un texto.
       * Devuelve un mensaje. */
      response.send(
        `A ${request.query.nombre} que tiene ${request.query.edad} y nacio entre (${2020-(request.query.edad)} y ${2019-(request.query.edad)}) le gusta ${request.query.pasatiempo}`);
    } catch (e) {
      // Devuelve un texto de error.
      response.send(e.message);
    }
  });