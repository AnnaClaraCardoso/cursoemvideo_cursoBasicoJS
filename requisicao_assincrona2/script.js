// Função inicial, que carrega a função que adiciona eventos aos botões
function loadPage() {
    this.addEvent();
}
// Função que adiciona eventos de clique aos botões "carregar" e "limpar"
function addEvent() {
    document.getElementById("carregar").addEventListener("click", mostraDados);
    document.getElementById("limpar").addEventListener("click", limpaDados);
}
//Função que busca os dados no arquivo JSON e mostra na página HTML
function mostraDados() {
    var request, dados, container;
    limpaDados();
    //Criando referências para a DIV que mostra os dados e para o objeto XMLHttpRequest criado
    container = getContainer();
        
    //Método que monitora as mudanças de estado do processamento da requisição e executa a function anônima quando identifica alguma alteração de estado
    request.onreadystatechange = function () {
        //Validação do estado da requisição (código 4) e o código de resposta HTTP (200)
        if (request.readyState === 4 && request.status === 200) {
            // parse() : Transformando as strings de objetos JSON em um vetor de objetos 
            dados = JSON.parse(request.responseText);
            // Percorrendo o vetor e tratando os dados
            for (var i in dados) { // i = índice  do objeto
                //console.log(i)
                container.innerHTML += '<br/>';
                //Acessando cada objeto JSON e suas propriedades
                for (var propriedade in dados[i]) { // propriedades dentro do objeto selecionado
                    console.log(propriedade)
                    container.innerHTML += propriedade + ' = ';
                    //Verificando se a propriedade do objeto JSON é não é um novo objeto (vetor)
                    /*
                    if (typeof dados[i][propriedade] !== 'object') { 
                        console.log(dados[i][propriedade]) // para selecionar um valor de uma chave de um objeto
                        container.innerHTML += dados[i][propriedade] + '<br>';
                    } else {
                        //Percorrendo o vetor interno do objeto JSON
                        for (var j in dados[i][propriedade]) {
                            console.log(dados[i][propriedade][j]) // selecionando o valor de uma chave de um objeto dentro de outro objeto :')
                            container.innerHTML += (j == 0) ? "":", ";
                            container.innerHTML += dados[i][propriedade][j];
                        }
                    }
                    */
                }
                container.innerHTML += '<hr/>';
            }
        }
    };
    //Abertura da conexão, com método GET. O parâmetro TRUE (3º parâmetro) indica requisição assíncrona
    request.open("GET", "dados.json", true);
    //Envio da requisição HTTP. Quando o status da requisição muda, a rotina de callback é executada (onreadystatechange)
    request.send();
}
//Função que limpa os dados da DIV "mostraDados"
function limpaDados() {
    getContainer().innerHTML = "";
    console.clear();
}
//Função que cria e retorna um objeto de requisição HTTP compatível com todos navegadores (XMLHttpRequest ou activeXObject)
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
//Função que retorna uma referência para a DIV "mostraDados"
function getContainer() {
    return document.getElementById("mostraDados");
}
//Quando o evento load for concluído, chama-se a função loadPage que inicia o código
window.onload = loadPage();