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
import { cond, equals, always, curry, pipe, complement, T } from 'ramda'
import { mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data: () => ({
    url: ''
  }),
  methods: {
    ...mapActions([
      'getTitle',
      'toggleAlert',
      'changeAlertType',
      'changeAlertMessage'
    ]),
    onSubmit (event) {
      event.preventDefault()
      if (!this.urlValidity.isValid) {
        this.changeAlertType('danger')
        this.changeAlertMessage(this.urlValidity.message)
        this.toggleAlert()
        return
      }

      this.getTitle(this.url)
      this.url = ''
    },
    onReset () {
      this.url = ''
    }
  },
  computed: {
    urlValidity () {
      const createResponse = (isValid, message) => ({
        isValid,
        message
      })

      // create function that will search for invalid strings
      const search = curry((targetString, searchString) => searchString.search(targetString))
      const searchForInvalid = (target, invalidValue) => pipe(search(target), equals(invalidValue))

      // functions to check validity of URL
      const containsHTTP = complement(searchForInvalid('http', -1))

      // a function that will check the url against each case
      // and return the appropriate response for each type of
      // invalid
      const validator = cond([
        [containsHTTP, always(createResponse(false, 'Your URL contains http'))],
        [T, always(createResponse(true, 'valid URL'))]
      ])

      return validator(this.url)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
