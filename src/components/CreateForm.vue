<template>
  <div id="createModal" class="modal bottom-sheet modal-fixed-footer">
    <div class="modal-content">
      <h4>Add A New Person</h4>
      <div class="row">
        <div class="input-field col s12">
          <input id="name" type="text" class="validate" v-model="name">
          <label class="active" for="name">Name</label>
        </div>
        <div class="input-field col s12">
          <input id="descr" type="text" class="validate" v-model="descr">
          <label class="active" for="descr">Person Description</label>
        </div>
        <div class="input-field col s12">
          <input id="swagScore" type="text" class="validate" v-model="swagScore">
          <label class="active" for="swagScore">Cool Score</label>
        </div>
      </div>
    </div>
    <div class="modal-footer" style="text-align: center">
      <a class="modal-close waves-effect waves-green btn" v-on:click="submit">Create!</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      name: null,
      descr: null,
      swagScore: null
    }
  },
  methods: {
    submit () {
      console.log(this.name, this.descr, this.swagScore)

      this.$store.dispatch('ADD_PERSON', {
        name: this.name,
        descr: this.descr,
        swagScore: this.swagScore
      })
    }
  }
}
</script>

<style>
</style>
