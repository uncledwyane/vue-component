import Vue from 'vue'
import App from './App.vue'

var vm = new Vue({
    el: "#app",
    data: {
        msg: 'Hello, Vue'
    },
    render: c => c(App)
})