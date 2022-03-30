let listFruit = ['pera', 'uva', 'maçã']
console.log(listFruit,'\n')

listFruit.pop() // remove o último item
console.log(listFruit,'\n')

listFruit.push('abacate') // adicona um item ao final
console.log(listFruit,'\n')

console.log(listFruit.indexOf('pera'),'\n') // retorna a posição do item

listFruit.reverse() // inverte a ordem dos itens
console.log(listFruit,'\n')

listFruit.shift() // remove o primeiro item
console.log(listFruit,'\n')

// Mostra todos os itens do array
listFruit.forEach(function(item, i){
	console.log(`listFruit[${i}] = ${item}`)
} )