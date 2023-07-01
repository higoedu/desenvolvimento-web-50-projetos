var entrada_quantia = document.getElementById("valor-moeda-original");
var de_moeda = document.getElementById("de_moeda");
var para_moeda = document.getElementById("para_moeda");
var taxa_cambio = document.getElementById("taxa-cambio");
var cambio = document.getElementById("cambio");
var saida_quantia = document.getElementById("saida-texto");
var saida_de = document.getElementById("de");
var saida_para = document.getElementById("para");


cambio.addEventListener("click",()=>{
    [de_moeda.value, para_moeda.value] = [para_moeda.value, de_moeda.value];
    calcular();
})

var para_quantia = 0;
function calcular(){
    const de_valor_atual = de_moeda.value;
    const para_valor_atual = para_moeda.value;
    
    fetch(`https://api.exchangerate-api.com/v4/latest/${de_valor_atual}`)
    .then(res => res.json())
    .then(res => {
        const taxa = res.rates[para_valor_atual];
        taxa_cambio.value = `${taxa}`;
        para_quantia = (entrada_quantia.value * taxa).toFixed(3);
        saida_de.innerText= `${entrada_quantia.value} ${de_valor_atual}`;
        saida_para.innerText = `${para_quantia} ${para_valor_atual}`;
        saida_quantia.style.display="block";
    })
}


document.getElementById("exchange_button").addEventListener("click",()=>{
    calculate();
});
