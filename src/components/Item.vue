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
      console.log(this.project._id, 'edit item')
    },
    deleteItem: function () {}
  }
}
</script>

<style>
</style>
