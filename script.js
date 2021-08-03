//CRIAR AS TORRES
const principal = document.getElementById("main");
// COLUNAS
const torreStart = document.createElement("div");
const torreOffSet = document.createElement("div");
const torreEnd = document.createElement("div");
// BARRAS
const barra25 = document.createElement("div");
const barra50 = document.createElement("div");
const barra75 = document.createElement("div");
const barra100 = document.createElement("div");

// ESTILOS
//TORRE START
torreStart.className = "torre";

principal.appendChild(torreStart);

// TORRE OFF SET
torreOffSet.className = "torre";

principal.appendChild(torreOffSet);

//TORRE END
torreEnd.className = "torre";

principal.appendChild(torreEnd);

//ADD BARRAS DO JOGO

barra25.className = "barra";
barra25.id = "barra25"        

torreStart.appendChild(barra25);

barra50.id = "barra50";
barra50.className = "barra";
        
torreStart.appendChild(barra50);

barra75.id = "barra75";
barra75.className = "barra";        

torreStart.appendChild(barra75);

barra100.id = "barra100";
barra100.className = "barra";       

torreStart.appendChild(barra100);

//LOGICA DO JOGO
let num1 = 0
let num2 = 0
let dad = '' 
const selecionar = (e) => {
    if(num1 !== 0){
        alert("Já tem uma barra selecionada!")
    }
    num1 = e.target
};

function addDisco(e){

dad = e.target
num2 = dad.firstChild
dad.appendChild(num1)
num1 = 0
};

torreStart.addEventListener('click', selecionar);
// torreStart.addEventListener('click', addDisco);
// torreOffSet.addEventListener('click', selecionar);
torreOffSet.addEventListener('click', addDisco);
torreEnd.addEventListener('click', selecionar);
// torreEnd.addEventListener('click', addDisco);
