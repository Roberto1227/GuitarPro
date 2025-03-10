const express = require("express");
const bodyParser = require("body-parser");
const twilio = require("twilio");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración de Twilio
const accountSid = "TU_ACCOUNT_SID"; // Reemplaza con tu SID de Twilio
const authToken = "TU_AUTH_TOKEN";   // Reemplaza con tu Auth Token de Twilio
const client = twilio(accountSid, authToken);

// Endpoint para manejar mensajes entrantes
app.post("/webhook", (req, res) => {
    const fromNumber = req.body.From; // Número del remitente
    const profileName = req.body.ProfileName || "¡amigo!"; // Nombre del remitente (si disponible)
    
    const autoReply = `¡Hola ${profileName}! ¿En qué podemos ayudarte?`;

    // Enviar el mensaje de respuesta
    client.messages
        .create({
            body: autoReply,
            from: "whatsapp:+TU_NUMERO_TWILIO", // Número de Twilio
            to: fromNumber, // Responder al remitente
        })
        .then((message) => console.log(`Mensaje enviado: ${message.sid}`))
        .catch((err) => console.error("Error al enviar el mensaje:", err));

    res.status(200).send("Mensaje procesado");
});

// Inicia el servidor
app.listen(3000, () => console.log("Servidor en el puerto 3000"));