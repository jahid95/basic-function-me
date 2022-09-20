function bringSingara(taka){
    console.log('taka dese', taka);
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}
var money = 100;
var singara = bringSingara(100);
console.log('singara dese:', singara);