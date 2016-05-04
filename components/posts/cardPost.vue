<script>
  export default {
    props: ['dados'],

    methods: {
      sendDetails () {
        this.$dispatch('details', {dados: this.dados})
      }
    }
  }
</script>


<template>
  <div
    class="card"
    @click="sendDetails">

    <h3 v-html="dados.title.rendered"></h3>
    <div v-html="dados.excerpt.rendered"></div>
    {{ dados.id }}
  </div>
</template>
<style scoped>
  .card {
    float: left;
    width: 250px;
    background-color: #fafafa;
    padding: 15px;
    margin: 15px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px #ddd;
    border: 1px #ccc solid;
    cursor: pointer;
  }
</style>
