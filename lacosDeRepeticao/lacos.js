let pesos = [70,74,77,72,71];

pesos.forEach(peso => {
    console.log(`Peso = ${peso}`);
});

pesos.forEach(function(peso,indice){
    console.log(`Peso ${indice} = ${peso}`);
});

