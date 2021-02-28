<template>
  <div>
    <b-list-group>
      <b-list-group-item v-for="(item, index) in titles" :key="index">{{item.title}}</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'titles'
    ])
  }
}
</script>

<style>

</style>
