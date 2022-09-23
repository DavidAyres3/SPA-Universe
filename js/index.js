import { Router } from './router.js'

const router = new Router()
//mapeamento da rota, para conseguir acessar as mesmas
//puxa a função add da classe router, que recebe uma propriedade e um valor
// "/" < propriedade, "/pages/home.html" < valor 
router.add("/", "/pages/home.html")
router.add("/exploration", "/pages/exploration.html")
router.add("/universe", "/pages/universe.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
//O evento popstate é disparado quando a entrada do histórico ativa é alterado.
//Se o histórico de entrada a ser ativado for criado por uma chamada history.pushState()
//ou for afetada por uma chamada history.replaceState(), a propriedade dos eventos popstate
// contém uma cópia do histórico de entrada do objeto.
window.route = () => router.route()
//o evento route vai chamar a função route para receber o evento onclick