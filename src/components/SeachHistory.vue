<template>
  <div>
    <b-list-group>
      <b-list-group-item v-for="(item, index) in titles" :key="index">
        <TitleEntry :title="item.title" :url="item.url" />
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TitleEntry from '@/components/TitleEntry'
export default {
  components: {
    TitleEntry
  },
  computed: {
    ...mapGetters([
      'titles'
    ])
  }
}
</script>

<style>

</style>
