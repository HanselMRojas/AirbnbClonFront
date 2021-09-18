import { mapActions, mapState } from 'vuex'

export default {
  beforeCreate () {
    console.log('1.')
  },
  created () {
    console.log('2.')
  },
  beforeMount () {
    console.log('3.')
  },
  mounted () {
    console.log('4.')
  },
  computed: {
    ...mapState({
      ui: (state) => state.ui
    })
  },
  methods: {
    ...mapActions('ui', [
      'cambiarEstadoDrawer',
      'cambiarEstadoCorazon'
    ])
  }
}
