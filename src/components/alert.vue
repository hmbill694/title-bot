<template>
  <b-alert
      :show="showAlert"
      v-model="showAlert"
      :variant="alertType"
      dismissible
    >
      {{alertMessage}}
    </b-alert>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'alert',
  methods: {

  },
  computed: {
    ...mapGetters([
      'showAlert',
      'alertType',
      'alertMessage'
    ])
  }
}
</script>

<style>

</style>
