<script>
  import DaCardPost from './cardPost.vue'
  import VcModal from '../modal.vue'
  export default {

    components: {
      DaCardPost: DaCardPost,
      VcModal: VcModal
    },

    data () {
      return {
        posts: [],
        singlePost: {}
      }
    },

    ready () {
      this.$http.get('http://acerteaconta.com.br/wp-json/wp/v2/posts/')
      .then(function(req){
        this.posts = req.data
        jQuery(this.$els.loading).hide()
      })
    },

    methods: {
      showPost (post) {
        this.singlePost = post.dados
      },

      clear () {
        this.singlePost = {}
      }
    }
  }

</script>



<template>
  <p v-el:loading><img src="/loading.gif"></p>
  <vc-modal
    v-bind:id="singlePost.id"
    v-bind:title="singlePost.title.rendered"
    v-bind:content="singlePost.content.rendered"
    v-on:clear="clear">
  </vc-modal>
  <da-card-post
    v-for="post in posts"
    v-bind:dados="post"
    v-on:details="showPost">
    </da-card-post>

</template>



<style scoped>
  p {
    text-align: center;
  }
</style>
