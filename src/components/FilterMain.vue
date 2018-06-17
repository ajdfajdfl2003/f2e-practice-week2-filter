<template>
  <div class="filter-main">
    <div class="left">
      <div class="filter-section">
        <h3>景點所屬</h3>
        <b-dropdown id="location" text="Taiwan" variant="light" class="m-md-0">
          <b-dropdown-item>Other place</b-dropdown-item>
        </b-dropdown>
      </div>
      <div class="filter-section">
        <h3>開放時間</h3>
      </div>
      <div class="filter-section">
        <h3>古蹟分級</h3>
      </div>
    </div>
    <div class="right">
      <div class="total-result">
        Showing
        <span>{{totalRecord}}</span>
         results by…
      </div>
      <ul>
        <li class="item"
            v-for="record in records"
            :key="record.id">
          <img v-bind:src="record.Picture1"/>
          <div class="detail">
            <h4>{{record.Name}}</h4>
            <p class="card-text">
              {{record.Description}}
            </p>
            <div class="section">
              <div class="ticket-info">{{record.Ticketinfo}}</div>
              <div class="tel">{{record.Tel}}</div>
            </div>
            <div class="section">
              <i class="fas fa-map-marker-alt"></i>
              <div class="address">{{record.Add}}</div>
              <i class="far fa-calendar-alt"></i>
              <div class="open-time">{{record.Opentime}}</div>
            </div>
          </div>
        </li>
      </ul>
      <div class="filter-pagination">

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'FilterMain',
  data () {
    return {
      totalRecord: '',
      records: []
    }
  },
  methods: {
    getData ({resp}) {
      const vm = this
      if (resp.data.success) {
        const result = resp.data.result
        vm.totalRecord = result.total
        vm.records = result.records
      }
    }
  },
  created () {
    const vm = this
    axios.get('https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97&limit=5')
      .then(resp => vm.getData({resp}))
      .catch(error => console.error(error))
  }
}
</script>
