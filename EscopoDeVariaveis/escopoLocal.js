// Consegue manipular a variável victor
function func1(){
    var victor = "Lima";

    console.log(victor);
}
  
// NÃO Consegue manipular a variável victor
function func2(){
  console.log(victor);
}

// NÃO Consegue manipular a variável victor
function func3(){
  console.log(victor);
}

func1()
func2()
func3()