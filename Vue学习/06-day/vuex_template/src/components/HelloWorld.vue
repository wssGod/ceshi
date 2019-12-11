<template>
  <div>
    <h2>{{ $store.state.counter }}</h2>
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

<style scoped lang="scss">

</style>
