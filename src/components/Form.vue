<template>
  <div class="">
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Desired URL:"
        label-for="input-1"
        prepend="http://"
      >
        <b-input-group
        prepend="http://"
        >
        <b-form-input
          id="input-1"
          v-model="url"
          type="text"
          placeholder="Enter the website"
          required
        ></b-form-input>
        </b-input-group>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    url: ''
  }),
  methods: {
    onSubmit (event) {
      event.preventDefault()
    },
    onReset () {
      this.url = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
