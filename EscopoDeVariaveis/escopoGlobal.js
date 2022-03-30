// Global: qualquer variável declarada fora de uma função, independentemente se for var ou let
var minhaVariavelGlobal = 10;
let minhaVariavelGlobal2 = 10;

function func1(v="Falhou!") {
  console.log(v);
}

function func2(v="Falhou!") {
  console.log(v);
}

function func3(v="Falhou!") {
  console.log(v);
}

func1(minhaVariavelGlobal)
func2(minhaVariavelGlobal)
func3(minhaVariavelGlobal)
console.log(minhaVariavelGlobal,"\n");
func1(minhaVariavelGlobal2)
func2(minhaVariavelGlobal2)
func3(minhaVariavelGlobal2)
console.log(minhaVariavelGlobal2);
