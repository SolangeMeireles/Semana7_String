function createList(number, titulo) {
    for (let index = 0; index < number; index++) {;
        let cont = index + 1
        let node = document.createElement("li");
        if (titulo === "" || titulo === undefined) {
            let textNode = document.createTextNode("Text " + cont)
            node.appendChild(textNode)
        } else {
            let textNode = document.createTextNode(`${titulo} ${cont}`)
            node.appendChild(textNode)
        }
        
        document.querySelector("#list").appendChild(node)
        
    }
}

function gerarLista() {
    const quantidade = parseInt(document.querySelector("#inputNumber").value)
    const titulo = document.querySelector("#inputTitle").value

    createList(quantidade, titulo)
    document.querySelector("#btnGenerator").setAttribute('disabled', 'disabled')
}