
function recebeNumero(entry){
    let tela = document.getElementById('resultado').innerHTML;
    let lastInner = tela[tela.length -1];

    if(entry == '+' | entry == '-' | entry == '/' | entry == '*' && lastInner != '+' && lastInner != '-' && lastInner != '/' && lastInner != '*'){
        document.getElementById('resultado').innerHTML = tela + entry;
    } 
    if( typeof entry == 'string' && typeof lastInner != 'string' ){
        document.getElementById('resultado').innerHTML = tela + entry;
    }
    else if(entry <= 9){
        document.getElementById('resultado').innerHTML = tela + entry;
    }
    
}
function clean(){
    document.getElementById('resultado').innerHTML = "";
}
function cancelEntry(){
    let searchLastEntry = document.getElementById('resultado').innerHTML;
    let lastEntry = searchLastEntry.length -1;
    while (searchLastEntry[lastEntry] != '+' || searchLastEntry != '-' || searchLastEntry != '/' || searchLastEntry != '*') {
        if (lastEntry > 0) {
            lastEntry--
        }
        break;
    }
    document.getElementById('resultado').innerHTML = searchLastEntry.substring(0, lastEntry);
}
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else{
        document.getElementById('resultado').innerHTML = "0"
    }
}