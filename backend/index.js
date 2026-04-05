const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose')
const Quote = require('./models/Quote')
const PORT = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/nietzscheDB')
    .then(() => console.log("API conectada ao MongoDB"))
    .catch(err => console.error("Erro ao ligar ao banco:", err));

app.get('/api/nietzsche/quote',  async (req, res) => {
    try{
    const total = await Quote.countDocuments();
    if (total === 0) return res.status(404).send("Banco vazio.");

        const random = Math.floor(Math.random() * total);
        const quote = await Quote.findOne().skip(random);

    res.json ({
        id: quote.id,
        advice: quote.advice,
    });
} catch(erro) {
    res.status(500).json({ error: "Erro ao gerar a frase" });
}

});

app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
});