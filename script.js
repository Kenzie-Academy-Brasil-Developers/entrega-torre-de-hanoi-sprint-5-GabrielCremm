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
torreStart.style.alignItems= "center";
torreStart.style.justifyContent= "flex-end";
torreStart.style.display= "flex";
torreStart.style.flexDirection= "column";
torreStart.style.width = "15px";
torreStart.style.height = "15rem";
torreStart.style.background = "black";

principal.appendChild(torreStart);

// TORRE OFF SET
torreOffSet.style.alignItems= "center";
torreOffSet.style.justifyContent= "flex-end";
torreOffSet.style.display= "flex";
torreOffSet.style.flexDirection= "column";
torreOffSet.style.width = "15px";
torreOffSet.style.height = "15rem";
torreOffSet.style.background = "black";

principal.appendChild(torreOffSet);

//TORRE END
torreEnd.style.alignItems= "center";
torreEnd.style.justifyContent= "flex-end";
torreEnd.style.display= "flex";
torreEnd.style.flexDirection= "column";
torreEnd.style.width = "15px";
torreEnd.style.height = "15rem";
torreEnd.style.background = "black";

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

const selecionar = (e) => {        
        console.log(e.target.clientWidth);
};
function addDisco(e){
        console.log(e);
};

torreStart.addEventListener('click', selecionar);
torreOffSet.addEventListener('click', selecionar);
torreEnd.addEventListener('click', selecionar);
