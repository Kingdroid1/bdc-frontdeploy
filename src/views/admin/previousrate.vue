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
                    <td>{{rate.createdAt | formatDate}}</td>
                    <td>{{rate.time}}</td>
                    <td>{{rate.buyingRate}}</td>
                    <td>{{rate.sellingRate}}</td>
                    <td><img width="13" v-bind:src="`../../../img/${rate.baseCurrency}.svg`" /> {{rate.baseCurrency}}</td>
                    <td>{{rate.createdAt | formatTime}}</td>
                  </tr>
                </tbody>
                <div class="btn-group mt-5">
                      <button
                        type="button"
                        v-if="page != 1"
                        @click="page--"
                        class="btn btn-sm btn-outline-secondary"
                      >prev</button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        v-for="pageNumber in pages.slice(page-1, page+5)"
                        v-bind:key="pageNumber"
                        @click="page = pageNumber"
                      >{{pageNumber}}</button>
                      <button
                        type="button"
                        @click="page++"
                        v-if="page < pages.length"
                        class="btn btn-sm btn-outline-secondary"
                      >next</button>
                    </div>
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
  import moment from "moment";
  import Vue from "vue";

  const rateService = new RateService();

  //Convert date format
  Vue.filter("formatDate", function(value) {
    if (value) {
      return moment(String(value)).format("MM/DD/YYYY");
    }
  });

  //Convert date format
  Vue.filter("formatTime", function(value) {
    if (value) {
      return moment(String(value)).format("hh:mm:ss");
    }
  });

  export default {

    data() {
      return {
        rates: [],
        page: 1,
        perPage: 5,
        pages: []
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

    setPages() {
      let numberOfPages = Math.ceil(this.operators.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(operators) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return operators.slice(from, to);
    },

    watch: {
    operators() {
      this.setPages();
    }
   },

    computed: {
      disoperators(){
       return this.paginate(this.operators)
       
      }
    },

    mounted() {
      this.getListRates();
    }

  };
</script>
<style>
</style>