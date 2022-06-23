//O módulo express retorna uma função que instancia o express
const express = require("express")

//A função express cria uma instância de todo o framework express em app
const app = express()

const porta = 3001
app.listen(porta, function () {
    console.log(`Servidor rodando na porta ${porta}`);
})

app.get("/Hora", function (req, resp) {
    let date = new Date()
    let hora = date.getHours() + ":" + date.getMinutes()
    resp.send(
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Agora são ${hora} horas </h1>
                </body>
            </html>
        `
    )

})