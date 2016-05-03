<script>

  import VcCervejaria from './card.vue'
  import VcModal from '../modal.vue'

  export default {
    components: {
      VcCervejaria,
      VcModal
    },
    data () {
      return {
        cervejarias: [],
        cervejaria: {}
      }
    },
    ready () {
      this.$http.get('/cervejarias.json').then(
        (req) => this.cervejarias = req.data)
    },
    methods: {
      showDetails (cervejaria) {
        this.cervejaria = cervejaria.dados
      }
    }
  }
</script>

<template>
  <vc-modal
    :name="cervejaria.name"
    :descript="cervejaria.descript">
  </vc-modal>
  <h3>Compoente de cervejarias!</h3>
  <vc-cervejaria
    v-for="cervejaria in cervejarias"
    v-bind:dados="cervejaria"
    v-on:details="showDetails"
    ></vc-cervejaria>

</template>

<style>
</style>
