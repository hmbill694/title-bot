<template>
  <b-alert
      :show="showAlert"
      :variant="alertType"
      dismissible
      @dismissed="toggleAlert"
      fade
    >
      {{alertMessage}}
    </b-alert>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'alert',
  methods: {
    ...mapActions([
      'toggleAlert'
    ])
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
