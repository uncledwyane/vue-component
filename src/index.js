import Vue from 'vue'
import App from './App.vue'

new Vue({
    el: "#app",
    data: {
        msg: 'Hello, Vue'
    },
    render: c => c(App)
})