  <template>
  <div>
    <ul class="collapsible">
      <item v-for="(person,index) in persons" v-bind:person="person"></item>
    </ul>
  </div>
</template>

<script>
import Item from '@/components/Item';
import { mapState } from 'vuex';

export default {
  components: {
    Item
  },
  data () {
    return {
      jariIsVervelend: 'waarheid'
    }
  },
  methods: {},
  computed: mapState(['persons']),
  mounted: function () {
    this.$store.dispatch('LOAD_LIST')
  }
}
</script>

<style scoped>
</style>
