<template>
  <div class="addmin py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-xs-12">
          <h1 class="p-24">Previous Rate</h1>
        </div>
        <div class="col-lg-6 col-xs-12"></div>
        <div class="col-12 mt-4">
          <div class="ad_shadowrec">
            <div class="table-responsive-md">
              <table class="table table-striped ad_table">
                <thead>
                  <th>DATE</th>
                  <th>SESSION</th>
                  <th>BUY</th>
                  <th>SELL</th>
                  <th>CURRENCY</th>
                  <th>TIME POSTED</th>
                </thead>
                <tbody>
                  <tr v-for="rate in rates" v-bind:key="rate">
                    <td>{{rate.createdAt}}</td>
                    <td>{{rate.time}}</td>
                    <td>{{rate.buyingRate}}</td>
                    <td>{{rate.sellingRate}}</td>
                    <td><img width="13" v-bind:src="`../../../img/${rate.baseCurrency}.svg`" /> {{rate.baseCurrency}}</td>
                    <td>{{rate.createdAt}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { RateService } from '../../services/rateservice';

  const rateService = new RateService();

  export default {

    data() {
      return {
        rates: []
      };
    },

    methods: {
      getListRates() {
        rateService.getListRates()
          .then(data => {
            this.rates = data.result;
           
          })
          .catch(error => {
            console.log(error)
          });
      },
    },

    mounted() {
      this.getListRates();
    }

  };
</script>
<style>
</style>