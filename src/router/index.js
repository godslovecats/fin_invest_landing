import Vue from 'vue'
import Router from 'vue-router'
import ViewMain from '@/components/ViewMain'
import Home from '@/components/Home'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '',
        component: ViewMain,
        children: [{
            path: '',
            component: Home
        }]

    }]
})
