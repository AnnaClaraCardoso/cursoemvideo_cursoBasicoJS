function loadPage() {
    this.addEvent();
}

window.onload = loadPage;

function addEvent() {
    document.getElementById("carregar").addEventListener("change", mostraDados);
    document.getElementById("limpar").addEventListener("change", limpaDados);
}

function getContainer() {
    return document.querySelector("#mostraDados");
}

function limpaDados() {
     getContainer().innerHTML = "";
     console.clear();
}

function verificaRequest() {
    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        return req = new XMLHttpRequest();
      } else if (window.ActiveXObject) { // IE
        try {
            return req = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
          try {
            return req = new ActiveXObject("Microsoft.XMLHTTP");
          }
          catch (e) { return false }
        }
      }
}

function mostraDados() {
	var request = verificaRequest();
	var lista = getContainer();
	var cursos;
	let item;

	limpaDados();

	request.onreadystatechange = function () {
		if (request.readyState === 4 && request.status === 200){
			cursos = JSON.parse(request.responseText);
				for (var i in cursos) {
				item = document.createElement('li');
                console.log(i)
                for (var propriedade in cursos[i]) {
                console.log(propriedade);
                console.log(cursos[i][propriedade])
                item.innerHTML += propriedade + ' = ' + cursos[i][propriedade] + '<br />';
                }
                lista.appendChild(item);
                item.innerHTML += '<hr />';
            }
		}
	}

	request.open("GET", "cursos.json", true);
	request.send();
}