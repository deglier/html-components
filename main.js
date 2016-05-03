
const Vue = require('vue')

const VcCervejarias = require('./components/cervejarias/lista.vue')
Vue.use(require('vue-resource'))


jQuery = require('jquery')

require('bootstrap')

new Vue({
  components: {
    VcCervejarias:VcCervejarias
  },
  el: 'body'
})
