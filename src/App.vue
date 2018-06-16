<template>
  <div id="app">
    <div class="filter-nav">
      <b-container>
        <b-row>
          <b-col cols="4">
            <div class="filter-nav-brand">
              <a href="#">HaveFun</a>
            </div>
          </b-col>
          <b-col cols="8">
            <div class="filter-search-box">
              <i class="fas fa-search"></i>
              <b-form-input id="filter-search" type="text" placeholder="Explore your own activities"></b-form-input>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
  components: {}
}
</script>
