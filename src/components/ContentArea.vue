<template>
  <div class="content-area">
    <Form/>
    <SearchHistory />
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
import SearchHistory from '@/components/SeachHistory.vue'
export default {
  name: 'content-area',
  components: {
    Form,
    SearchHistory
  }
}
</script>

<style>
.content-area{
  display: grid;
  grid-template-columns: 2fr 5fr;
  min-height: 35vh;
  gap: 3rem;
}
</style>
