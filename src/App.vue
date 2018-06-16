<template>
  <div id="app">
    <FilterNavbar />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import FilterNavbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    FilterNavbar
  }
}
</script>
