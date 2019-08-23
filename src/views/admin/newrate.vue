<template>
  <div class="addmin py-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="p-24">New Input Rate</h1>
        </div>
        <div class="col-12">
          <ul class="nav nav-tabs ad_tabs" role="tablist">
            <li class="nav-item pr-3">
              <a
                class="nav-link active pb-3"
                href="#normalinputrate"
                role="tab"
                data-toggle="tab"
              >Normal Input Rate</a>
            </li>
            <li class="nav-item pr-3">
              <a
                class="nav-link pb-3"
                href="#unioninputrate"
                role="tab"
                data-toggle="tab"
              >Western Union Input Rate</a>
            </li>
            <li class="nav-item pr-3">
              <a
                class="nav-link pb-3"
                href="#atminputrate"
                role="tab"
                data-toggle="tab"
              >Bank Atm Input Rate</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="ad_rectangle">
        <div class="tab-content">
          <div role="tabpanel" class="tab-pane active" id="normalinputrate">
            <div class="row">
              <div class="col-12 mb-3">
                <b class="p-15">Normal Input Rate</b>
                <br />
                <small class="l-12">This feeds the normal input rates</small>
              </div>
              <div class="col-12 mb-5">
                <div class="ad_greyrec">
                  <div class="row">
                    <div class="col-lg-8 col-xs-12">
                      <!-- <div class="row"> -->
                      <form v-on:submit.prevent="onSubmit" class="row">
                        <div class="col-lg-6 col-xs-12 mb-4">
                          <b class="p-15">Select Currency</b>
                          <br />
                          <small
                            class="l-12"
                          >Please choose a currency you want to be traded on our platform</small>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                          <label for class="pl-14">Select Currency</label>
                          <select v-model="baseCurrency" class="lightform custom-select">
                            <option
                              v-for="currency in currencies"
                              v-bind:key="currency.name"
                            >{{ currency.name }}</option>
                          </select>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                          <b class="p-15">Enter Buy Rate</b>
                          <br />
                          <small class="l-12">Enter a price you want to purchase your currencies for</small>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                          <label for class="pl-14">Buy Rate</label>
                          <input
                            v-model.number="buyingRate"
                            type="text"
                            class="lightform form-control"
                          />
                        </div>

                        <div class="col-lg-6 col-xs-12 mb-4">
                          <b class="p-15">Enter Sell Rate</b>
                          <br />
                          <small class="l-12">Enter a price you want to sell your currencies for</small>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                          <label for class="pl-14">Sell Rate</label>
                          <input
                            v-model.number="sellingRate"
                            type="text"
                            class="lightform form-control"
                          />
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                          <b class="p-15">Select Location</b>
                          <br />
                          <small class="l-12">Select where you reside</small>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                          <label for class="pl-14">Select Location</label>
                          <select v-model="selectedLocation" class="lightform custom-select">
                            <option
                              v-for="location in locations"
                              v-bind:key="location.name"
                            >{{ location.name }}</option>
                          </select>
                        </div>
                        <div class="col-lg-6 col-xs-12"></div>
                        <div class="col-lg-6 col-xs-12">
                          <button class="btn btn-green px-5">Submit Rate</button>
                        </div>
                      </form>

                      <!-- </div> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div role="tabpanel" class="tab-pane" id="unioninputrate">
            <div class="row">
              <div class="col-12 mb-3">
                <b class="p-15">Western Union Input Rate</b>
                <br />
                <small class="l-12">This feeds the accepted western union rates</small>
              </div>
              <div class="col-12">
                <div class="ad_greyrec">
                  <div class="row">
                    <div class="col-lg-8 col-xs-12">
                      <!-- <div class="row"> -->
                      <form v-on:submit.prevent="westernRate" class="row">
                        <div class="col-lg-6 col-xs-12 mb-4">
                          <b class="p-15">Select Currency</b>
                          <br />
                          <small
                            class="l-12"
                          >Please choose a currency you want to be traded on our platform</small>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                          <label for class="pl-14">Select Currency</label>
                          <select v-model="baseCurrency" class="lightform custom-select">
                            <option
                              v-for="currency in currencies"
                              v-bind:key="currency.name"
                            >{{ currency.name }}</option>
                          </select>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                          <b class="p-15">Enter Buy Rate</b>
                          <br />
                          <small class="l-12">Enter a price you want to purchase your currencies for</small>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                          <label for class="pl-14">Buy Rate</label>
                          <input
                            v-model.number="buyingRate"
                            type="text"
                            class="lightform form-control"
                          />
                        </div>

                        <div class="col-lg-6 col-xs-12 mb-4">
                          <b class="p-15">Enter Sell Rate</b>
                          <br />
                          <small class="l-12">Enter a price you want to sell your currencies for</small>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                          <label for class="pl-14">Sell Rate</label>
                          <input
                            v-model.number="sellingRate"
                            type="text"
                            class="lightform form-control"
                          />
                        </div>

                        <div class="col-lg-6 col-xs-12"></div>
                        <div class="col-lg-6 col-xs-12">
                          <button class="btn btn-green px-5">Submit Rate</button>
                        </div>
                      </form>

                      <!-- </div> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div role="tabpanel" class="tab-pane" id="atminputrate">
            <div class="row">
              <div class="col-12 mb-3">
                <b class="p-15">Bank Atm Input Rate</b>
                <br />
                <small class="l-12">This feeds the accepted Bank rates</small>
              </div>
              <div class="col-12">
                <div class="ad_greyrec">
                  <div class="row">
                    <div class="col-lg-8 col-xs-12">
                      <!-- <div class="row"> -->
                      <form v-on:submit.prevent="atmRate" class="row">
                        <div class="col-lg-6 col-xs-12 mb-4">
                          <b class="p-15">Select Currency</b>
                          <br />
                          <small
                            class="l-12"
                          >Please choose a currency you want to be traded on our platform</small>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                          <label for class="pl-14">Select Currency</label>
                          <select v-model="baseCurrency" class="lightform custom-select">
                            <option
                              v-for="currency in currencies"
                              v-bind:key="currency.name"
                            >{{ currency.name }}</option>
                          </select>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                          <b class="p-15">Enter Bank Name</b>
                          <br />
                          <small class="l-12">Enter bank name to upload your currencies</small>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                          <label for class="pl-14">Bank Name</label>
                          <input
                            v-model.number="bankName"
                            type="text"
                            class="lightform form-control"
                          />
                        </div>

                        <div class="col-lg-6 col-xs-12 mb-4">
                          <b class="p-15">Enter Rate Price</b>
                          <br />
                          <small class="l-12">Enter a price you want to sell your currencies for</small>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                          <label for class="pl-14">Sell Rate</label>
                          <input
                            v-model.number="sellingRate"
                            type="text"
                            class="lightform form-control"
                          />
                        </div>

                        <div class="col-lg-6 col-xs-12"></div>
                        <div class="col-lg-6 col-xs-12">
                          <button class="btn btn-green px-5">Submit Rate</button>
                        </div>
                      </form>

                      <!-- </div> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { RateService } from '../../services/rateservice';
  import Vue from 'vue';
  import VueToast from 'vue-toast-notification';
  import 'vue-toast-notification/dist/index.css';

  const rateService = new RateService();
  Vue.use(VueToast);

  export default {

    data() {
      return {
        currencies: [],
        locations: [],
        selectedLocation: '',
        baseCurrency: '',
        buyingRate: '',
        sellingRate: '',
        time: '',
        user_id: '',
        bankName:''
      };
    },

    methods: {
      getLocations() {
        rateService.getLocations()
          .then(data => {
            this.locations = data;
          })
          .catch(error => {
            console.log(error)
          });
      },

      getCurrencies() {
        rateService.getCurrencies()
          .then(data => {
            this.currencies = data.result;
          })
          .catch(error => {
            console.log(error)
          });
      },

      onSubmit: function () {
        
        let d = new Date();

        let rate = {
          location: this.selectedLocation,
          baseCurrency: this.baseCurrency,
          buyingRate: this.buyingRate,
          sellingRate: this.sellingRate,
          time: d.getHours(),
          user_id: '5d384433850f0a49d8bd4af1'
        }

        rateService.createRate(rate)
          .then(data => {
            
              Vue.$toast.success('rate submitted successfully', {
                // optional options Object
                position: 'top',
                duration:3000,
                dismissible:true
              })
          })
          .catch(error => {
             Vue.$toast.error('Something went wrong, rate not submitted', {
                // optional options Object
                position: 'top',
                duration:3000,
                dismissible:true
              })
          });


          this.selectedLocation = '';
          this.baseCurrency = '';
          this.buyingRate = '';
          this.sellingRate = '';
      },

      

      westernRate: function () {
        
        let d = new Date();

        let rate = {
          
          baseCurrency: this.baseCurrency,
          buyingRate: this.buyingRate,
          sellingRate: this.sellingRate,
          date: d,
          
        }

        rateService.createWesternRate(rate)
          .then(data => {
            
              Vue.$toast.success('Western rate submitted successfully', {
                // optional options Object
                position: 'top',
                duration:3000,
                dismissible:true
              })
          })
          .catch(error => {
             Vue.$toast.error('Something went wrong, rate not submitted', {
                // optional options Object
                position: 'top',
                duration:3000,
                dismissible:true
              })
          });


          
          this.baseCurrency = '';
          this.buyingRate = '';
          this.sellingRate = '';
      },

      atmRate: function () {
        
        let d = new Date();

        let rate = {
          
          baseCurrency: this.baseCurrency,
          bankName: this.bankName,
          sellingRate: this.sellingRate,
          date: d,
          
        }

        rateService.createBankRate(rate)
          .then(data => {
            
              Vue.$toast.success('Bankrate submitted successfully', {
                // optional options Object
                position: 'top',
                duration:3000,
                dismissible:true
              })
          })
          .catch(error => {
             Vue.$toast.error('Something went wrong, rate not submitted', {
                // optional options Object
                position: 'top',
                duration:3000,
                dismissible:true
              })
          });

          
          this.baseCurrency = '';
          this.bankName = '';
          this.sellingRate = '';
      }



    },

    mounted() {
      this.getLocations();
      this.getCurrencies();
    },
  }
</script>
<style>
</style>