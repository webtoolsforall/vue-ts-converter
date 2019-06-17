
const Vue = require('vue');
const router = require('../../source/src/router/index');
export default class ParseWithVue {
   vueRouters: Array<object> = []

    constructor (){
        const vm = new Vue({
            router
        })
        this.vueRouters =  vm.$router && vm.$router.options && vm.$router.options.routes
    }

    getRoutes (): Array<object> {
        return this.vueRouters
    }
}