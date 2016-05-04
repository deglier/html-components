
const Vue = require('vue')

const VcCervejarias = require('./components/cervejarias/lista.vue')

const DaPosts = require('./components/posts/lista.vue')


Vue.use(require('vue-resource'))


jQuery = require('jquery')

require('bootstrap')

new Vue({
  components: {
    DaPosts: DaPosts
  },
  el: 'body'
})
