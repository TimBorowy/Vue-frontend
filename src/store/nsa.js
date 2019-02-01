import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const NSA = new Vuex.Store({
  state: {
    persons: {},
    currentSelectedId: 0
  },
  actions: {
    LOAD_LIST: function ({
      commit
    }) {
      axios.get('http://164.132.226.87:8080/resource').then(res => {
          commit('SET_PERSON_LIST', {
            list: res.data.items
          })
        },
        err => {
          console.log(err)
        })
    },
    ADD_PERSON: function ({
      commit
    }, person) {
      console.log(person)
      axios.post('http://164.132.226.87:8080/resource',
        person
      ).then(res => {
          commit('ADD_PERSON_TO_LIST', {
            person: person
          })
        },
        err => {
          console.log(err)
        })
    },
    DELETE_PERSON: function ({
      commit
    }, person) {
      axios.delete('http://164.132.226.87:8080/resource/' + person._id).then(res => {
          commit('DELETE_PERSON_FROM_LIST', person)
        },
        err => {
          console.log(err)
        })
    },
    UPDATE_PERSON: function ({
      commit
    }, person) {
      axios.put('http://164.132.226.87:8080/resource/' + person._id, {
        name: person.name,
        descr: person.descr,
        swagScore: person.swagScore
      }).then(res => {
          commit('UPDATE_PERSON_ON_LIST', person)
        },
        err => {
          console.log(err)
        })
    }
  },
  mutations: {
    SET_PERSON_LIST: (state, {
      list
    }) => {
      state.persons = list
    },
    ADD_PERSON_TO_LIST: (state, {
      person
    }) => {
      state.persons.push(person)
    },
    DELETE_PERSON_FROM_LIST: (state, person) => {
      let deletePerson = state.persons
        .map(function (e) {
          return e._id
        })
        .indexOf(person._id)
      state.persons.splice(deletePerson, 1)
    },
    UPDATE_PERSON_ON_LIST: (state, person) => {
      let findPerson = state.persons
        .map(function (e) {
          return e._id
        })
        .indexOf(person._id)
      state.persons.splice(findPerson, 1, person)
    }
  },
  getters: {

  }
})

export default NSA
