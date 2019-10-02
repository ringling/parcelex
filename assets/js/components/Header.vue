<template>
  <div>
    <h1 class="header">{{header}}</h1>
  </div>
</template>
<script>
export default {
  props: ['header'],
  created: function () {
    console.log('a is: ' + this.a)
  }
}
</script>

<style lang="scss">
  $header-color: rgb(0, 124, 128);
  .header {
    color: $header-color;
  }
</style>
