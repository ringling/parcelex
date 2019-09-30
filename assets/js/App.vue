<template>
  <div>
    <Header header="Header"></Header>
    {{title}}
    <Footer footer="Footer"></Footer>
  </div>
</template>

<script>

  import Header from './components/Header'
  import Footer from './components/Footer'

  export default {
    name: 'app',
    data () {
      return {
        title: 'This is my App.vue!!'
      }
    },
    components: {
      Header,
      Footer
    }
  }
</script>

