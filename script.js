//CRIAR AS TORRES
const principal = document.getElementById("main");
// COLUNAS
const torreStart = document.createElement("div");
torreStart.id="torreStart"
torreStart.className="torre"
const torreOffSet = document.createElement("div");
torreOffSet.id="torreOffSet"
torreOffSet.className="torre"
const torreEnd = document.createElement("div");
torreEnd.id="torreEnd"
torreEnd.className="torre"
// BARRAS
const barra25 = document.createElement("div");
const barra50 = document.createElement("div");
const barra75 = document.createElement("div");
const barra100 = document.createElement("div");
console.log(barra100);
// ESTILOS
//TORRE START


principal.appendChild(torreStart);

// TORRE OFF SET

principal.appendChild(torreOffSet);

//TORRE END


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
     const tr= document.addEventListener('click',()=>{
                
        })
        console.log(e.target.id)
      
};
function addDisco(e){
         
         
};


torreStart.addEventListener('click', selecionar);
torreOffSet.addEventListener('click', selecionar);
torreEnd.addEventListener('click', selecionar);
