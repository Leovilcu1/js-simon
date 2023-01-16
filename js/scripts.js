const numeri = [];
const numeriIndividuati= [];

for(let i = 0 ; i < 5 ; i++){
    const numeriRandom = numeriCasuali(1,100);
    numeri.push(numeriRandom);
    setTimeout(() => numeriInPagina.innerHTML="" , 3000);
    
    setTimeout( function(){
        let numeroInserito = parseInt (prompt("inserisci il tuo numero"));
        console.log(numeroInserito);

        if(numeroInserito == numeri[i]){
            numeriIndividuati.push(numeroInserito);
            console.log(numeri[i]);
        }
        numeriInPagina.innerHTML = "numeri individuati " + numeriIndividuati.length + " numeri<br>";
        numeriInPagina.innerHTML += "Quali numeri " + numeriIndividuati;
    },3100);
}

let numeriInPagina = document.getElementById("numeri");
numeriInPagina.innerHTML = numeri;
console.log(numeri);











function numeriCasuali(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

