const express = require("express");
const cors = require('cors')

const db = require("./database")
const routes = require("./routes")

const app = express()

// Conexão com o banco
db.connect();

const allowedOrigins = [
    'http://127.0.0.1:5500'
]

// habilitando CORS
app.use(cors({
    origin: function(origin, callback){
        let allowed = true

        // mobile
        if(!origin) allowed = true

        if(!allowedOrigins.includes(origin)) allowed = false
        
        callback(null,allowed)
    }
}))

// Habilita server a receber json
app.use(express.json())

// Definindo as rotas
app.use("/api", routes)

// Executando o servidor
const port = process.env.port || 8080
app.listen(port, () => console.log(`Server listening to port ${port}`))