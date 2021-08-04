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
let num1,bar,torre
let status = true

const selecionar = (e) => {
    torre = e.target
    if(torre.firstChild === null && status){
        console.log("Click em alguma torre com alguma barra");
    }
    else if(torre !== undefined && status){
        console.log("algo selecionado!")
        bar = torre.firstChild
        status = false
        console.log("selecione destino",bar)
    }
    else{
        torre.appendChild(bar)
        status=true
    }
};

torreStart.addEventListener('click', selecionar);
torreOffSet.addEventListener('click', selecionar);
torreEnd.addEventListener('click', selecionar);
