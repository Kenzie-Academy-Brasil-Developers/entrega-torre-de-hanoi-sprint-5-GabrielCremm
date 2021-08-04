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

let n1,n2,bar,torre
let status = true

const selecionar = (e) => {
    torre = e.target
    if(torre.lastChild === null && status){
        console.log("Click em alguma torre com alguma barra");
    }
    else if(torre !== undefined && status){
        console.log("algo selecionado!")
        bar = torre.lastChild
        bar.style.border= "2px solid lightGreen"
        n2 = bar.clientWidth
        status = false
        console.log(`n2 ${n2}`)
    }
    else{
        if(torre.lastChild === null){
            torre.appendChild(bar)
            bar.style.border= "1px solid black"
            status =true
            if(e.target.children.length === 4){
                console.log("Voce Ganhou Garotinho!!")
            }        
        }
        else if(torre.lastChild.clientWidth > n2){
            torre.appendChild(bar)
            bar.style.border= "1px solid black"
            status =true
            if(e.target.children.length === 4){
                console.log("Voce Ganhou Garotinho!!")
            }
        }else{
            console.log("movimento invalido, selecione Nova barra")
            torre = ''
            bar.style.border= "1px solid black"
            status = true
        }
    }

};


torreStart.addEventListener('click', selecionar);
torreOffSet.addEventListener('click', selecionar);
torreEnd.addEventListener('click', selecionar);
