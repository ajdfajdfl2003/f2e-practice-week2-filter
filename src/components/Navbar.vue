<template>
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
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
