import Router from './routes.js'
import { backgroundChange } from './backgroundChange.js'

const navStyle1 = document.querySelector('nav :nth-child(2)')
const navStyle2 = document.querySelector('nav :nth-child(3)')
const navStyle3 = document.querySelector('nav :nth-child(4)')
const bodyPage = document.querySelector('body')

const router = new Router()
const backgroundChanges = backgroundChange({ bodyPage })

router.add('/', './SPA-Universe/pages/home.html')
router.add('/home', './SPA-Universe/pages/home.html')
router.add('/universe', './SPA-Universe/pages/universe.html')
router.add('/explore', './SPA-Universe/pages/explore.html')
router.add(404, './SPA-Universe/pages/404.html')

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()

navStyle1.addEventListener('click', backgroundChanges.home)
navStyle2.addEventListener('click', backgroundChanges.universe)
navStyle3.addEventListener('click', backgroundChanges.exploration)
