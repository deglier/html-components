<script>
  export default {
    props: ['id', 'title', 'content'],

    watch: {
      title () {
        jQuery(this.$els.modal).modal('show')
      }
    },
    methods: {
      clearPost () {
        this.$dispatch('clear')
      }
    }
  }
</script>


<template>

  <div v-el:modal class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="clearPost"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" v-html="title"></h4>
        </div>
        <div class="modal-body" v-html="content">
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->


</template>
