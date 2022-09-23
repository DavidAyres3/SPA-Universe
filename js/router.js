//a classe serve para termos um molde, para poder reutilizar um código sem precisar re-escrever
//ou copiar
export class Router {
    routes = {}
    
    // o routeName será a página a ser acessada
    // ex.: "./exploration"
    // e o page, vai acessar o local da página 
    add(routeName, page) {
    // o add vai conter o routes do index
        this.routes[routeName] = page
        //o objeto routes tem a propriedade de valor routeName, e o page é o valor
    }
    //a função não recebe a palvra chave "function"
    route(event) {
        event = event || window.event
        event.preventDefault()
        //adiciona um histórico para salvar a mudança de página
        //o history toda vez que mudamos de href, muda o histórico
        //pushState vai empurrar um estado no histórico

        window.history.pushState({}, "", event.target.href)

        //após verificar se ocorreu um evento e adicionar um histórico ao href, chama a função handle
        // sempre que precisarmos utilizar uma função ou
        // uma propriedade, é necessário o this, para referenciar
        // algo dentro do par de chaves

        this.handle()
    }

    //função para chamar o nome do caminho dentro 
    //de uma localização
    handle() {
        const { pathname } = window.location
        //desestruturando o location, para pegar apenas o pathname dele
        //ao atribuir o pathname ao par de chaves, o resultado das variáveis voltará para o pathname

        const route = this.routes[pathname] || this.routes[404]
        //se tiver uma rota, o route vai puxá-la 
        //se não, vai mostrar o 404


        fetch(route).then(data => data.text()).then(html => {
            document.querySelector('#app').innerHTML = html
            //depois de mostrar os dados em texto,
            //o html interno do elemento "app", será o html selecionado
        })
        //o comando fetch, busca algo.
        //nesse caso, estamos pedindo para ele buscar a constante 
        //route, que vai receber o caminho puxado pela routes[pathname]
        //quando concluir a busca, o then(então) vai executar a função
        //data vai nos mostrar os dados em texto da função

        console.log(route)
    }
}
//a constante router está recebendo uma nova instância.
//a instância está recebendo o código pronto, o molde da classe.