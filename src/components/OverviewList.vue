  <template>
  <div v-if="active">
    <ul class="collapsible">
      <item v-for="(person,index) in persons" v-bind:person="person"></item>
    </ul>
  </div>
</template>

<script>
import Item from '@/components/Item';
import axios from 'axios';
import { mapState } from 'vuex';

export default {
  components: {
    Item
  },
  data () {
    return {
      jariIsVervelend: 'waarheid',
      active: true
    }
  },
  methods: {},
  computed: mapState(['persons']),
  mounted: function () {
    this.$root.$on('hide', text => {
      // here you need to use the arrow function
      this.active = false
    })

    this.$root.$on('show', text => {
      // here you need to use the arrow function
      this.active = true
    })

    this.$store.dispatch('LOAD_LIST')
    console.log(this.$store.state)
    /* axios.get('http://164.132.226.87:8080/resource').then(res => {
      this.persons = res.data.items
      console.log(this.persons)
    }) */
  }
}
</script>

<style scoped>
/* div {
  display: none;
} */
</style>
