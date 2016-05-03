<script>
  export default {
    props: ['dados'],


    computed: {
      hasDescript () {
        return this.dados.descript != ''
      },
      location () {
        return this.dados.city + ' / ' + this.dados.state
      }
    },

    methods: {
      sendDetails () {
        if(this.hasDescript){
          this.$dispatch('details', {dados: this.dados})
        }
      }
    }
  }

</script>

<template>
  <div
    class="card"
    :class="{ 'has-descript': hasDescript }"
    @click="sendDetails">
    <img src="/link.png" class="link" v-if="hasDescript">
    <h3>{{ dados.name }}</h3>
    <p>{{ location }}</p>
  </div>

</template>


<style scoped>
.link {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 10px;
  top: 10px;
}
.card {
  position: relative;
  background-color: lightgray;
  padding: 15px;
  margin: 15px 5px;
  border-radius: 3px;
  border: 1px solid gray;
}
.has-descript {
  cursor: pointer;
}

</style>
