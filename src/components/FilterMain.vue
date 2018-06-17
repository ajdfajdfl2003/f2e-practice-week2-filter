<template>
  <div class="filter-main">
    <div class="left">
      <div class="location">
        <h3>Location</h3>
        <b-dropdown id="location" text="Taiwan" variant="light" class="m-md-0">
          <b-dropdown-item>Other place</b-dropdown-item>
        </b-dropdown>
      </div>
      <div class="date">

      </div>
      <div class="category">

      </div>
    </div>
    <div class="right">
      <div class="total-result">
        Showing
        <span>{{totalRecord}}</span>
         results by…
      </div>
      <ul>
        <li class="item">
          <img src="https://picsum.photos/600/300/?image=25"/>
          <div class="detail">
            <h4>Kogi Cosby sweater.</h4>
            <p class="card-text">
              Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit
              est, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium. Aliquam erat volutpat.
              Integer ut tincidunt orci. Etiam tristique, elit ut consectetur iaculis, metus lectus mattis justo, vel
              mollis eros neque quis augue. Sed lobortis ultrices lacus, a placerat metus rutrum sit amet. Aenean ut
              suscipit justo.
            </p>
            <div class="section">
              <div class="ticket-info">Ethan Foster</div>
              <div class="tel">Entertainment</div>
            </div>
            <div class="section">
              <i class="fas fa-map-marker-alt"></i>
              <div class="address">Kaohsiung City</div>
              <i class="far fa-calendar-alt"></i>
              <div class="open-time">2018/5/24 - 2018/5/31</div>
            </div>
          </div>
        </li>
        <li class="item">
          <img src="https://picsum.photos/600/300/?image=25"/>
          <div class="detail">
            <h4>Kogi Cosby sweater.</h4>
            <p class="card-text">
              Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit
              est, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium. Aliquam erat volutpat.
              Integer ut tincidunt orci. Etiam tristique, elit ut consectetur iaculis, metus lectus mattis justo, vel
              mollis eros neque quis augue. Sed lobortis ultrices lacus, a placerat metus rutrum sit amet. Aenean ut
              suscipit justo.
            </p>
            <div class="section">
              <div class="ticket-info">Ethan Foster</div>
              <div class="tel">Entertainment</div>
            </div>
            <div class="section">
              <i class="fas fa-map-marker-alt"></i>
              <div class="address">Kaohsiung City</div>
              <i class="far fa-calendar-alt"></i>
              <div class="open-time">2018/5/24 - 2018/5/31</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'FilterMain',
  data () {
    return {
      totalRecord: ''
    }
  },
  methods: {
    getData ({resp}) {
      const vm = this
      if (resp.data.success) {
        const result = resp.data.result
        vm.totalRecord = result.total
        console.log(result)
      }
    }
  },
  created () {
    const vm = this
    axios.get('https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97')
      .then(resp => vm.getData({resp}))
      .catch(error => console.error(error))
  }
}
</script>
