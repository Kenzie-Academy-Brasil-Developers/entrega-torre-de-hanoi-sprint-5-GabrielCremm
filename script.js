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
// CLICKS E RESULTADO
const placar = document.getElementById("placar");
const clicks = document.createElement("p");
const win = document.createElement("p");
// ESTILOS
//TORRE START
torreStart.className = "torre";
torreStart.id = "winner";

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
let n2,bar,torre,idWin,clas
let status = true;
let click = 0;

    //PLACAR

    const selecionar = (e) => {
    idWin = e.target.id;
    clas = e.target.className
    placar.appendChild(clicks);

    torre = e.target
    if(torre.lastChild === null && status){
        console.log("Click em alguma torre com alguma barra");
    }
    else if(torre !== undefined && status && clas === "torre"){
        win.innerHTML= '';
        e.target.style.border = 'none';
        bar = torre.lastChild;
        bar.style.border= "2px solid lightGreen";
        n2 = bar.clientWidth;
        status = false;
    }
    else{
        if(torre.lastChild === null && clas === "torre"){
            torre.appendChild(bar);
            bar.style.border= "1px solid black";
            status =true;
            click++
            // if(e.target.children.length === 4 && idWin !== "winner"){
            //     console.log("Voce Ganhou Garotinho!!");
            // }        
        }
        else if(torre.lastChild.clientWidth > n2 && clas === "torre"){
            torre.appendChild(bar)
            bar.style.border= "1px solid black"
            status =true
            click++
            if(e.target.children.length === 4 && click >=15){
                placar.appendChild(win)
                e.target.style.border= "5px solid lightGreen"
                win.innerText=`GANHOU! ${click}`
                click = 0
                win.classList = 'win'
                
            }
        }else if(torre.lastChild.clientWidth === n2){
            torre = '';
            bar.style.border= "1px solid black";
            status = true;
        }

    clicks.innerText= "QUANTIDADE DE CLICKS "+click;
    }
};

torreStart.addEventListener('click', selecionar);
torreOffSet.addEventListener('click', selecionar);
torreEnd.addEventListener('click', selecionar);
