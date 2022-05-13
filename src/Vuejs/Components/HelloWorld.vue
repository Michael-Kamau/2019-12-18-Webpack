<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p class="button-red">Welcome</p>
    <img src="../../images/turkey.jpeg" />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
