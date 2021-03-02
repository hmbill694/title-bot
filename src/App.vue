<template>
  <div class="main-screen">
    <ContentArea/>
    <Alert />
  </div>
</template>

<script>
import ContentArea from '@/components/ContentArea.vue'
import Alert from '@/components/alert.vue'
export default {
  name: 'App',
  components: {
    ContentArea,
    Alert
  }
}
</script>

<style>
.main-screen{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
