const fs = require('fs')
const moongose = require('mongoose')
const Quote = require('./models/Quote')

async function importAdvices() {

    try {
        await moongose.connect('mongodb://127.0.0.1:27017/nietzscheDB');
  
        const content = fs.readFileSync('quotes.txt', 'utf-8');
        const lines = content.split('\n').filter(line => line.trim() !== '');

        await Quote.deleteMany({});

        const adviceToSave = lines.map((text, index) => {
            return {
                id: index + 1,
                advice: text.trim()
            };
        });

        await Quote.insertMany(adviceToSave);
        process.exit();

    } catch(erro) {
       console.error("Erro na importação:", erro);
        process.exit(1);
    }
 
}

importAdvices()