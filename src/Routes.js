import AccueilApp from './components/AccueilApp'
import Page1App from './components/Page1App'
import Page2App from './components/Page2App'
import PosteApp from './components/PosteApp'

export default [
    {path: '/', component: AccueilApp},
    {path: '/page1', component: Page1App},
    {path: '/page2', component: Page2App},
    {path: '/poste/:id', component: PosteApp},
]