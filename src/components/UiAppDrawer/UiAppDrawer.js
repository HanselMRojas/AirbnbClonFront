import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      ui: (state) => state.ui
    })
  }
}
