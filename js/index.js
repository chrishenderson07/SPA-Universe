import Router from './routes.js'
import { backgroundChange } from './backgroundChange.js'

const navStyle1 = document.querySelector('nav :nth-child(2)')
const navStyle2 = document.querySelector('nav :nth-child(3)')
const navStyle3 = document.querySelector('nav :nth-child(4)')
const bodyPage = document.querySelector('body')

const router = new Router()
const backgroundChanges = backgroundChange({ bodyPage })

router.add('/', './home.html')
router.add('/pages/home', './home.html')
router.add('/pages/universe', './universe.html')
router.add('/pages/explore', './explore.html')
router.add(404, './404.html')

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()

navStyle1.addEventListener('click', backgroundChanges.home)
navStyle2.addEventListener('click', backgroundChanges.universe)
navStyle3.addEventListener('click', backgroundChanges.exploration)
