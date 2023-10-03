
// página  inicial
let teste = document.getElementById("teste");
let endpoint = "https://hp-api.onrender.com/api/spells";
let i = 0;
let vetor = []

// Speels
fetch(endpoint)
.then(resposta => resposta.json())
.then(dados => {
console.log(dados);
    
    for (i = 0; i < 77; i++){
        vetor.push(dados[i].name)
        vetor.push(dados[i].description)
      }
      teste.innerHTML = vetor.join('<br><br>')

})