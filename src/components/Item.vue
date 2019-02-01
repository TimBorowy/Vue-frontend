<template>
  <li>
    <div class="collapsible-header">{{person.name}}</div>
    <div class="collapsible-body">
      <a class="waves-effect waves-light btn" v-on:click="deleteItem">Delete</a>
      <a class="waves-effect waves-light btn" v-on:click="editItem">Edit</a>
      <p>{{person.descr}}</p>
      <p>{{person.swagScore}}</p>
    </div>
  </li>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    person: {
      type: Object
    }
  },
  methods: {
    editItem: function () {
      let instance = M.Modal.getInstance(document.querySelector('#editModal'))
      instance.open()
      this.$store.state.currentSelectedId = this.person._id

      console.log(this.$store.state.currentSelectedId)
    },
    deleteItem: function () {
      if (
        confirm('Are you sure you want to delete "' + this.person.name + '"?')
      ) {
        this.$store.dispatch('DELETE_PERSON', this.person)
        /* axios.delete('http://164.132.226.87:8080/resource/' + this.person._id) */
      }
    }
  }
}
</script>

<style>
</style>
