// Bloco é tudo aquilo que está entre chaves {}
// O mais restrito de todos os escopos

var condicao = true

if(condicao){
    let minhaVariavel = 11;
  
    // É possível manipular a let, pois ela foi declarada
  
    // neste bloco
  
    console.log(minhaVariavel);
}
  

if(condicao) {
    var minhaVariavel2 = 10;

    console.log(minhaVariavel2);
}

// Funciona com var, mas não com let, pois o escopo de bloco existe para let
function func1(v="Falhou!"){
    console.log(v);
}

// Funciona com var, mas não com let, pois o escopo de bloco existe para let
function func2(v="Falhou!"){
    console.log(v);
}

// Funciona com var, mas não com let, pois o escopo de bloco existe para let
function func3(v="Falhou!"){
    console.log(v);
}

// func1(minhaVariavel)
// func2(minhaVariavel)
// func3(minhaVariavel)
func1(minhaVariavel2)
func2(minhaVariavel2)
func3(minhaVariavel2)
