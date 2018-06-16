<template>
  <div id="app">
    <FilterNavbar />
    <main-filter />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import FilterNavbar from './components/Navbar'
import MainFilter from './components/FilterMain'

export default {
  name: 'App',
  components: {
    FilterNavbar,
    MainFilter
  }
}
</script>
