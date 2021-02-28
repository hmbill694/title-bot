<template>
  <div class="main-screen">
    <ContentArea/>
  </div>
</template>

<script>
import ContentArea from '@/components/ContentArea.vue'

export default {
  name: 'App',
  components: {
    ContentArea
  }
}
</script>

<style>
.main-screen{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
