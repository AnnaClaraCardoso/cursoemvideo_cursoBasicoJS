var varGLobal = 10
let letGlobal = 15
const constGlobal = 20

function funcVariaveis() {
    let letLocal = 16
    const constLocal = 21
    var varLocal = 11
    console.log(varGLobal)
    console.log(varLocal)
    console.log(letGlobal)
    console.log(letLocal)
    console.log(constGlobal)
    console.log.apply.call(constLocal)
} 

funcVariaveis()