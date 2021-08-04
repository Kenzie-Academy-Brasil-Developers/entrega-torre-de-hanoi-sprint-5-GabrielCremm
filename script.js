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
win.className = "win"
win.innerText= "GANHOU!!"
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
let n2,bar,torre,idWin
let status = true;
let click = 0;

    //PLACAR

const selecionar = (e) => {
    idWin = e.target.id;
    clicks.innerText= "QUANTIDADE DE CLICKS "+click;
    placar.appendChild(clicks);

    torre = e.target
    if(torre.lastChild === null && status){
        console.log("Click em alguma torre com alguma barra");
    }
    else if(torre !== undefined && status){
        click++
        e.target.style.border = 'none'
        console.log("algo selecionado!")
        bar = torre.lastChild
        bar.style.border= "2px solid lightGreen"
        n2 = bar.clientWidth
        status = false
    }
    else{
        if(torre.lastChild === null){
            click++
            torre.appendChild(bar);
            bar.style.border= "1px solid black";
            status =true;
            // if(e.target.children.length === 4 && idWin !== "winner"){
            //     console.log("Voce Ganhou Garotinho!!");
            // }        
        }
        else if(torre.lastChild.clientWidth > n2){
            click++
            torre.appendChild(bar)
            bar.style.border= "1px solid black"
            status =true
            if(e.target.children.length === 4 && idWin !== "winner"){
                placar.appendChild(win)
                e.target.style.border= "5px solid lightGreen"
                console.log("Voce Ganhou Garotinho!!")
                click = 0
            }
        }else if(torre.lastChild.clientWidth === n2){
            click++
            console.log("Soltou a barra no msm lugar!")
            torre = ''
            bar.style.border= "1px solid black"
            status = true
        }
        else{
            click++
            console.log("movimento invalido, selecione Nova barra")
        }
    }
console.log(click + "isso")
};

torreStart.addEventListener('click', selecionar);
torreOffSet.addEventListener('click', selecionar);
torreEnd.addEventListener('click', selecionar);
