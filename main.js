var nodemailer = require("nodemailer");
var express = require("express");
var app = express();

app.post("/send-email", (req, res) => {
    //NUEVA RAMA
    //Servidor SMTP
    var transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: "golda.bosco37@ethereal.email",
            pass: "Ys9fjWBKRhHhYkVhBC",
        },
    });

    //Email opciones
    var mailOptions = {
        from: "Remitente",
        to: "victorm96hernandez@gmail.com",
        subject: "Enviado desde nodemailer",
        text: "Bienvenido"
    }

    //Validación
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send(error.message)
        } else {
            console.log('Enviado');
            res.status(200).jsonp(req.body)
        }
    });
});

app.listen(3000, () => {
    console.log('Servidor == > http://localhost:3000');
});