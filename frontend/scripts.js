const textDisplay = document.getElementById('quote-text');
const idDisplay = document.getElementById('advice-id');
const btn = document.getElementById('get-advice-btn');

async function loadQuote() {
    try{
    const response = await fetch('http://localhost:3000/api/nietzsche/quote')

    const data = await response.json()
    console.log(data);
    idDisplay.innerText = `ADVICE #${data.id}`;
    textDisplay.innerText = `"${data.advice}"`;
    }
    catch(erro) {
        console.error("Erro ao carregar os dados:", erro);
    }
}

btn.addEventListener('click', loadQuote);

loadQuote();