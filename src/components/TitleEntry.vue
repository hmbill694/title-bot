<template>
  <div class="w-100 justify-between items-center">
    <h5>{{title}}</h5>
    <h6>{{url}}</h6>
  </div>
</template>

<script>
export default {
  name: 'title-entry',
  props: {
    url: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
</style>
