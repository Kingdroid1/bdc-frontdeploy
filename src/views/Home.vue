<template>
  <div class="home">
    <section id="home" ref="home" >
      <div id="particles-js"></div>
      <div class="htome">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-8 col-xs-12">
              <h1 class="w-48" style="margin-top: +80px;">Daily exchange rate at your<br> fingertips</h1>
              <p class="w-17">Sign up for daily street market exchange rates</p>
              <div class="form-group row form-inline">
                <div class="col-lg-6 pr-0">
                  <input type="text" v-model="sub.email" name="email" class="form-control grey px-5 mt-2" />
                
                </div>
                <div class="col-lg-4 pl-0">
                  <button
                  v-on:click="checkForm()"
                  class="btn btn-green px-5 ml-lg-2 ml-xs-0 mt-2"
                >Sign Up</button>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-xs-12 mt-lg-3">
              <div
                id="carouselExampleIndicators"  
                class="hometop carousel mt-lg-5"
                data-ride="carousel"
              >
                <div class="carousel-inner w-100">
                  <template v-for="(image, index) in advertImages.landing">
                    <div :class="{'carousel-item': true, 'active': index == 0}" :key="index">
                      <div class="blackBox w-100" :style="`background-image: url(${image})`"></div>
                    </div>
                  </template>
                </div>

                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class>
        <div class="container" style></div>
      </div>
    </section>

    <section id="about" >
      <div class="container-fluid px-5 pt-5 pb-2">
        <div class="row">
          <div class="col-lg-9 col-xs-12">
            <div class="row">
              <div class="col-lg-6 col-xs-12">
                <p class="p-19">
                  Bureau De Change Fx Rates By Location
                  <br />
                  <small class="p-14">
                    <b style="color: #fa4f4f">*</b> buy / sell rate values
                  </small>
                </p>
              </div>
              
            </div>

              <tabs>
                  <tab v-for="(rate, index) in rates" :key="rate.id" v-bind:name="rate.location" :rate="rate" :selected="index===0">
                  </tab>           
              </tabs>

            
          </div>
          <div class="col-lg-3 col-xs-12">
            <h1 class="p-20 mb-3">Market News</h1>
            <p class="b-down w-40 mb-0"></p>
            <hr class="mt-0" />

            <a href="/news">
              <p class="p-14" v-for="post in newsPosts" v-bind:key="post._id">
                <b>{{post.title}}</b>
                <br />
                <small style="color: #979797;">{{post.createdAt}}</small>
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section id="mid" class="mb-4">
      <div class="container">
        <div class="mid">
          <div class="row">
            <div class="col-12 mb-4">
              <h1 class="w-24">
                Search for CBN licensed Bureau De Change Operators across Nigeria
                <br />
              </h1>
              <!-- <small class="w-14">
                <a
                  href="#"
                  class="w-14"
                >Click here to see list of accredited Bureau De Change agents in Nigeria.</a>
              </small> -->
            </div>
            <div class="col-lg-2"></div>
            <div class="col-lg-4 px-1 col-xs-12 mb-3">
              <vue-simple-suggest
                v-model="operatorName"
                :list="simpleSuggestionList"
                :filter-by-query="true"
                v-on:select="showOperator"
                placeholder="Search operator by name"
                class="search-operator"
              ></vue-simple-suggest>
            </div>
            <div>
              <b-modal
                ref="modal-1"
                id="modal-1"
                body-class="pt-0 px-0"
                hide-footer="true"
                hide-header="true"
              >
                <button class="btn-black" @click="$bvModal.hide('modal-1')">
                  <i class="fas fa-times"></i>
                </button>
                <h3 class="w-24 mohead px-3 py-3">Approved BDC Operator details</h3>
                <div class="modalcontent">
                  <div class="row pt-4 px-3">
                    <div class="col-10 m-auto">
                      <div class="table-responsive">
                        <table class="table">
                          <thead>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Location</th>
                            <th>State</th>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{{operator.name}}</td>
                              <td>{{operator.address}}</td>
                              <td>{{operator.location}}</td>
                              <td>{{operator.state}}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </b-modal>
            </div>
            <div class="col-lg-4 px-1 col-xs-12 mb-3">
              <vue-simple-suggest
                v-model="opsLocation"
                :list="simpleSuggestionList2"
                :filter-by-query="true"
                v-on:select="showOperator2"
                placeholder="Search operator by location"
                class="search-operator"
              ></vue-simple-suggest>
            </div>
            <div>
              <b-modal
                ref="modal-2"
                id="modal-2"
                body-class="pt-0 px-0"
                hide-footer="true"
                hide-header="true"
              >
                <button class="btn-black" @click="$bvModal.hide('modal-2')">
                  <i class="fas fa-times"></i>
                </button>
                <h3 class="w-24 mohead px-3 py-3">BDC Operator details</h3>

                <div class="modalcontent">
                  <div class="row pt-4 px-3">
                    <div class="col-10 m-auto">
                      <div class="table-responsive">
                        <table class="table">
                          <thead>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Location</th>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{{operator.name}}</td>
                              <td>{{operator.address}}</td>
                              <td>{{operator.location}}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </b-modal>
            </div>
           
            <div class="col-lg-1"></div>
          </div>
        </div>
      </div>
    </section>
    <section id="graph">
      <div class="container-fluid py-5 px-lg-5">
        <div class="row">
          <div class="col-lg-3 col-xs-12">
            <div id="carouselExampleSlidesOnly" class="carousel slide mb-4" data-ride="carousel">
              <div class="carousel-inner">
                <template v-for="(image, index) in advertImages.left">
                    <div :class="{'carousel-item': true, 'active': index == 0}" :key="index">
                      <div class="blackBox w-100" :style="`background-image: url(${image})`"></div>
                    </div>
                  </template>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xs-12">
            <div class="row">
              <div class="col-lg-6 col-xs-12">
                <p class="p-19">Rates Trend Data</p>
              </div>
              <div class="col-lg-6 col-xs-12 mb-3">
                <div class="d-flex">
                  <div class="input-group">
                    <select
                      v-model="selectedLocation"
                      @change="queryLocationCSV($event)"
                      class="lightform custom-select"
                    >
                      <option
                        v-for="location in locations"
                        v-bind:key="location.name"
                      >{{ location.name }}</option>
                    </select>
                  </div>
                  <div class="pt-3 px-2">
                    <div class="border" style="width: 40px;"></div>
                  </div>
                  <div class="input-group">
                    <select
                      v-model="baseCurrency"
                      @change="queryCurrencyCSV($event)"
                      class="lightform custom-select"
                    >
                      <option
                        v-for="currency in currencies"
                        v-bind:key="currency.name"
                      >{{ currency.name }}</option>
                    </select>
                  </div>
                 
                </div>
              </div>
            </div>

            <div id="chart-div" style="height: 360px; min-width: 310px; width: 100%;"></div>
          </div>
          <div class="col-lg-3 col-xs-12">
            <div id="carouselExampleSlidesOnly" class="carousel slide mb-4" data-ride="carousel">
              <div class="carousel-inner">
                <template v-for="(image, index) in advertImages.right">
                    <div :class="{'carousel-item': true, 'active': index == 0}" :key="index">
                      <div class="blackBox w-100" :style="`background-image: url(${image})`"></div>
                    </div>
                  </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="getapp">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              
              <div class="carousel-inner">
                <template v-for="(image, index) in advertImages.base">
                    <div :class="{'carousel-item': true, 'active': index == 0}" :key="index">
                      <div class="blackBox w-100" :style="`background-image: url(${image})`"></div>
                    </div>
                  </template>
              </div>
              <div class="maintextt">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-4 col-md-4 px-0 d-none d-md-block col-xs-12">
              <p class="text-right">
                <img
                  src="../../public/img/mobile@2x.png"
                  height="350px;"
                  style="margin-top: -20px; margin-right: -7px;"
                  alt
                />
              </p>
            </div>
            <div class="col-lg-8 col-md-8 px-0 col-xs-12 px-5 py-5 google">
              <p class="a-17 mt-lg-3">Get the Naija BDC app</p>
                <p class="g-24">No deal Brexit chills sends pounds to a five month low vs euro</p>
                <a href="#">
                  <img src="../../public/img/googleplay.png" height="50px;" alt />
                </a>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      
    </section>
    <section id="exchange" class="mt-5">
      <div class="container-fluid py-3 px-5">
        <div class="row">
          <div class="col-lg-4 col-xs-12 mb-4">
            <p class="p-18">WESTERN UNION (RECEIVING)</p>
            <div class="table-responsive-md">
              <table class="table table-striped exchange yel">
                <thead>
                  <th>
                    DATE                    
                  </th>
                  <th>Currency</th>
                  <th>Rate</th>
                </thead>
                <tbody v-for="western in westernrate" v-bind:key="western">
                  <tr>
                    <td>{{western.date | formatDate}}</td>
                    <td>
                      <img width="20" v-bind:src="`../../../img/${western.baseCurrency}.svg`" />
                      {{western.baseCurrency}}
                    </td>
                    <td>{{western.sellingRate}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-lg-4 col-xs-12 mb-4">
            <p class="p-18">CBN EXCHANGE RATES</p>
            <div class="table-responsive-md">
              <table class="table table-striped exchange red">
                <thead>
                  <th>
                    DATE
                    <img src="../../public/img/nigeria-1@2x.png" style="height:13px;" alt />
                  </th>
                  <th>
                    USD
                    <img src="../../public/img/usa.svg" style="height:13px;" alt />
                  </th>
                  <th>
                    GBP
                    <img src="../../public/img/gpb.svg" style="height:13px;" alt />
                  </th>
                  <th>
                    EURO
                    <img src="../../public/img/euro.png" style="height:13px;" alt />
                  </th>
                </thead>
                <tbody>
                  <tr v-for="item in cbnRates" v-bind:key="item.id">
                    <td>{{item[0].currencyDate}}</td>
                    <td >{{item[0].cbnRate}}</td>
                    <td >{{item[1].cbnRate}}</td>
                    <td >{{item[2].cbnRate}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-lg-4 col-xs-12 mb-4">
            <p class="p-18">BANK ATM RATES</p>
            <div class="table-responsive-md">
              <table class="table table-striped exchange green">
                <thead>
                  <th>
                    DATE
                    <!-- <img src="../../public/img/nigeria-1@2x.png" style="height:13px;" alt /> -->
                  </th>
                  <th>Bank</th>
                  <th>Currency</th>
                  <th>Rate</th>
                </thead>
                <tbody v-for="bankrate in bankrates" v-bind:key="bankrate">
                  <tr>
                    <td>{{bankrate.date | formatDate }}</td>
                    <td>{{bankrate.bankName}}</td>
                    <td>
                      <img width="20" v-bind:src="`../../../img/${bankrate.baseCurrency}.svg`" />
                      {{bankrate.baseCurrency}}
                    </td>
                    <td>₦{{bankrate.sellingRate}}</td>
                    <!-- <td>{{western.CAD}}</td> -->
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="signup">
      <div class="container-fluid px-5">
        <div class="row">
          <div class="col-lg-4 col-xs-12 py-4">
            <p class="p-17">Sign up for daily parallel market FX rates</p>
            <p class="w-14">We’ll not spam you. Promise!</p>
            <input
              type="email"
              v-model="sub.email"
              class="g form-control mb-3"
              placeholder="yourmail@email.com"
            />
            <button v-on:click="checkemail()" class="btn btn-green">Send Me Rates</button>
          </div>
          <div class="col-lg-4 col-xs-12 py-4">
            <p class="p-17">Contact Us</p>
            <div class="d-flex row">
              <div class="py-1 px-3">
                <i class="fas fa-user-tag" style="color: #008752;font-size: 18px;"></i>
              </div>
              <div class="py-1 px-3 w-14">
                Association of Bureau De Change<br> Operators of Nigeria.
              </div>
            </div>
            <div class="d-flex row">
              <div class="py-1 px-3">
                <i class="fas fa-map-marker-alt" style="color: #008752;font-size: 18px;"></i>
              </div>
              <div class="py-1 px-3 w-14">
                4, Oluwaleyimu Street, P.O.Box 15750,
                <br />Ikeja, Lagos, Nigeria.
              </div>
            </div>
            <div class="d-flex row">
              <div class="py-1 px-3">
                <i class="fas fa-phone-alt" style="color: #008752;font-size: 18px;"></i>
              </div>
              <div class="py-1 px-3 w-14">
                080-23202255, 081-3843 0600,
                <br />070-84009851, 080-34612197,
                <br />080-88981824
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-xs-12 py-4">
            <p class="p-17">Follow Us On</p>
            <div class="d-flex row px-2">
              <a href="https://web.facebook.com/Association-of-Bureaux-De-Change-Operators-of-Nigeria-ABCON-598654580172724/" target="_blank" class="p-2">
                <i class="fab fa-facebook-f" style="color: #fff;"></i>
              </a>
              <a href="https://twitter.com/NationalAbcon" target="_blank" class="p-2">
                <i class="fab fa-twitter" style="color: #fff;"></i>
              </a>
              <a href="#" target="_blank" class="p-2">
                <i class="fab fa-google-plus-g" style="color: #fff;"></i>
              </a>
              <a href="https://www.instagram.com/abcon4real/" target="_blank" class="p-2">
                <i class="fab fa-instagram" style="color: #fff;"></i>
              </a>
              <a href="#" target="_blank" class="p-2 w-14">
                <img src="../../public/img/youtube.svg" alt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="footer pt-3 pb-5 mb-4">
      <div class="container">
        <div class="row">
          <div class="col col-xs-12">
            <p class="p-14">© 2019 All right reserved.</p>
          </div>
          <div class="ml-auto col col-xs-12">
            <p class="p-14 text-right">
              Powered by ABCON
              <img
                src="../../public/img/abcon.png"
                class="mx-2"
                style="height: 30px;"
              />
              Technical Partners - SBSC:
              <a href="http://www.sbsc.com">
                <img src="../../public/img/sbsc.png" class="mx-2" style="height: 30px;" />
              </a>
              <!-- <img src="../../public/img/tech (2).jpg" class="mx-2" style="height: 30px;" /> -->
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="l_c_h">
      <div class="c_h">
        <div class="left_c">
          <div class="left right_c left_icons">
            <a href="#" class="mini" style="font-size:23px;">+</a>
          </div>
          <div class="pt-1 pl-5">
            <!--center_icons-->
            Currency Converter
          </div>
          <!--end center_icons-->
        </div>
        <div class="clear"></div>
      </div>
      <div class="chat_container" style="display: none;">
        <div class="bg-white">
          <div class="border mb-1">
            <div class="px-2 py-2">
              <div class="btn-group">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                  <img src="../../public/img/usa.svg" height="13px;" /> USD
                  <span class>
                    <i class="fas fa-caret-down"></i>
                  </span>
                </a>
                <span>
                  <input type="text" class="converter" name="amount" v-model="curr.amount" />
                </span>
                <ul class="dropdown-menu">
                  <li class="px-2 py-2 border-bottom">
                    <a href="javascript:void(0);" v-on:click="fromClicked('EUR')">
                      <img src="../../public/img/oval-copy-7.jpg" height="13px;" /> EURO
                    </a>
                  </li>
                  <li class="px-2 py-2 border-bottom">
                    <a href="javascript:void(0);" v-on:click="fromClicked('CAD')">
                      <img src="../../public/img/canada.svg" height="13px;" /> CAD
                    </a>
                  </li>
                  <li class="px-2 py-2 border-bottom">
                    <a href="javascript:void(0);" v-on:click="fromClicked('AED')">
                      <img src="../../public/img/drh.svg" height="13px;" /> AED
                    </a>
                  </li>
                  <li class="px-2 py-2 border-bottom">
                    <a href="javascript:void(0);" v-on:click="fromClicked('GBP')">
                      <img src="../../public/img/gpb.svg" height="13px;" /> GBP
                    </a>
                  </li>
                  <li class="px-2 py-2 border-bottom">
                    <a href="javascript:void(0);" v-on:click="fromClicked('USD')">
                      <img src="../../public/img/usa.svg" height="13px;" /> USD
                    </a>
                  </li>
                  <li class="px-2 py-2 border-bottom">
                    <a href="javascript:void(0);" v-on:click="fromClicked('NGN')">
                      <img src="../../public/img/NGN.svg" height="13px;" /> NGN
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="border-top px-2 py-2">
              <div class="btn-group">
                <a
                  class="dropdown-toggle d-inline"
                  v-on:click="toClicked('NGN')"
                  data-toggle="dropdown"
                  href="#"
                >
                  <img src="../../public/img/NGN.svg" height="13px;" /> NGN
                  <span class>
                    <i class="fas fa-caret-down"></i>
                  </span>
                </a>
                <span>
                  <input type="text" class="converter" id="converter2" v-bind:value="converted" />
                </span>
                <ul class="dropdown-menu">
                  <li class="px-2 py-2 border-bottom">
                    <a href="javascript:void(0);" v-on:click="toClicked('EUR')">
                      <img src="../../public/img/oval-copy-7.jpg" height="13px;" /> EURO
                    </a>
                  </li>
                  <li class="px-2 py-2 border-bottom">
                    <a href="javascript:void(0);" v-on:click="toClicked('CAD')">
                      <img src="../../public/img/canada.svg" height="13px;" /> CAD
                    </a>
                  </li>
                  <li class="px-2 py-2 border-bottom">
                    <a href="javascript:void(0);" v-on:click="toClicked('AED')">
                      <img src="../../public/img/drh.svg" height="13px;" /> AED
                    </a>
                  </li>
                  <li class="px-2 py-2 border-bottom">
                    <a href="javascript:void(0);" v-on:click="toClicked('GBP')">
                      <img src="../../public/img/gpb.svg" height="13px;" /> GBP
                    </a>
                  </li>
                  <li class="px-2 py-2 border-bottom">
                    <a href="javascript:void(0);" v-on:click="toClicked('USD')">
                      <img src="../../public/img/usa.svg" height="13px;" /> USD
                    </a>
                  </li>
                  <li class="px-2 py-2 border-bottom">
                    <a href="javascript:void(0);" v-on:click="toClicked('NGN')">
                      <img src="../../public/img/NGN.svg" height="13px;" /> NGN
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- <button class="btn btn-green w-100 mb-4">Convert Currency</button>

          <input type="text" class="grey form-control mb-3" />-->
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import particles from "particles.js";
import tab from "@/components/tab.vue";
import tabs from "@/components/tabs.vue";
import { RateService } from "../services/rateservice";
import { UserService } from "../services/userservices";
import { CBNService } from "../services/cbnrates";
import { constants } from "crypto";
import moment from "moment";
import Vue from "vue";
import VueSimpleSuggest from "vue-simple-suggest";
import { AdvertService } from "../services/advertservice";
import { mapState } from 'vuex';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/index.css';
Vue.use(VueToast);


const rateService = new RateService();
const cbnService = new CBNService();
const advertService = new AdvertService();
const userService = new UserService();

//Convert date format
Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("MM/DD/YYYY");
  }
});

export default {
  name: "home",

  components: {
    tab,tabs,
    VueSimpleSuggest
  },

  data() {
    return {
      advertImage: "",

      advertImages: {
        left: [
          "/advertImagesLeft/1566297003625-buysell.jpg",
          "/advertImagesLeft/1566297023517-calculate.jpg",
          "/advertImagesLeft/1566297042807-exchange.jpg",
        ],
        base: [
          "/advertImagesBase/1566297042807-exchange.jpg",
          "/advertImagesBase/1566297042807-exchange.jpg",
          "/advertImagesBase/1566297042807-exchange.jpg",
        ],
        right: [
          "/advertImagesRight/nikee.jpg",
          "/advertImagesRight/1567680517268-off-white.jpg",
          "/advertImagesRight/1566306795882-1566297003625-buysell.jpg",
        ],
        landing: [
          "advertImages/1567680517268-off-white.jpg",
          // "/advertImages/1566296937264-graph.jpg",
          "advertImages/1567174349607-22 (1).jpg",
          "advertImages/1567174356806-dribble-post.png"

        ],
      },

      currencies: [],
      locations: [],
      baseCurrency: "USD",
      selectedLocation: "Lagos",
        newsPosts: [],
        operators: [],
        operatorName: "",
        operator: "",
        opsLocation: "",
        newrates: [],
        cbnRates: [],
        cbnDate: String,
        westerns: [],
        westernrate: [],
        bankrate: [],
        bankrates: [],
        bankdate: [],
        // rates: [],
        sub: {
          email:""
        },
        converted: "",
        fromCurrency: "USD",
        toCurrency: "USD",
        curr: {
          amount: ""
        },
      advertImage: "",
      
      advert: [],
      advert1: "/advertImages/1566908941999-ab627000ef8745410e0e8c513e33dcbf.jpg",
      advert2: "/advertImages/1566908966668-download.jpg",
      advert3: "/advertImages/1566909052667-Rose-Koech_kenya.jpg",
      advert4: "/advertImagesLeft/1567079965476-forex1.png",
      advert5: "/advertImagesLeft/1567080002107-taking stock.jpg",
      advert6: "/advertImagesLeft/1567080033880-PIX1.jpg",
      advert7: "/advertImagesRight/1567083729245-pound-dollar.jpg",
      advert8: "/advertImagesRight/1567089892903-exchange-rate.jpg",
      advert9: "/advertImagesRight/1567083729245-pound-dollar.jpg",
      advert10: "/advertImagesBase/1567163043719-analytics.jpg",
      advert11: "/advertImagesBase/1567163098509-exchange-rate.jpg",
      advert12: "/advertImagesBase/1567163173099-file.jpg",

      bgc1: {
        backgroundImage: 'url(/advertImages/1567618881220-1567176116063-22 (1).jpg)'
      },
      bgc2: {
        backgroundImage: 'url(/advertImages/1567621167211-1567618647072-1567176178249-off-white.jpg)'
      },
      bgc3: {
        backgroundImage: 'url(/advertImages/1567621189240-1567616614450-0_f3Ypmy-26_j_bU33_.jpg)'
      },
      bgc4: {
        backgroundImage: 'url(/advertImages/1567680517268-off-white.jpg)'
      },
      bgc5: {
        backgroundImage: 'url(/advertImages/1567680162760-nike.png)'
      },
      bgc6: {
        backgroundImage: 'url(advertImages/1567680517268-off-white.jpg)'
      },
        bgc7: {
        backgroundImage: 'url(/advertImagesRight/nikee.jpg)'
      },
      bgc8: {
        backgroundImage: 'url(/advertImagesRight/1566306795882-1566297003625-buysell.jpg)'
      },
      bgc9: {
        backgroundImage: 'url(/advertImagesRight/1567680517268-off-white.jpg)'
      },
      bgc10: {
        backgroundImage: 'url(/advertImagesBase/1567680808107-nikee.jpg)'
      },
      bgc11: {
        backgroundImage: 'url(/advertImagesBase/1567682088170-Nike-Earnings.jpg)'
      },
      bgc12: {
        backgroundImage: 'url(/advertImagesBase/1567682146161-off-white.jpg)'
      }
    };
  },
  
  watch: {
    advert1() {
      console.log("watch", this.advert1);
      //this.getAdvertOne();
      this.bgc1.backgroundImage = 'url("' + this.advert1 + '")';
    },
    advert2() {
      console.log("watch", this.advert2);
      //this.getAdvertOne();
      this.bgc2.backgroundImage = 'url("' + this.advert2 + '")';
    },
    advert3() {
      console.log("watch", this.advert3);
      //this.getAdvertOne();
      this.bgc3.backgroundImage = 'url("' + this.advert3 + '")';
    },
    advert4() {
      console.log("watch", this.advert4);
      //this.getAdvertOne();
      this.bgc4.backgroundImage = 'url("' + this.advert4 + '")';
    },
    advert5() {
      console.log("watch", this.advert5);
      //this.getAdvertOne();
      this.bgc5.backgroundImage = 'url("' + this.advert5 + '")';
    },
    advert6() {
      console.log("watch", this.advert6);
      this.bgc6.backgroundImage = 'url("' + this.advert6 + '")';
    },
    advert7() {
      console.log("watch", this.advert7);
      this.bgc7.backgroundImage = 'url("' + this.advert7 + '")';
    },
    advert8() {
      console.log("watch", this.advert8);
      this.bgc8.backgroundImage = 'url("' + this.advert8 + '")';
    },
    advert9() {
      console.log("watch", this.advert9);
      this.bgc9.backgroundImage = 'url("' + this.advert9 + '")';
    },
    advert10() {
      console.log("watch", this.advert10);
      this.bgc11.backgroundImage = 'url("' + this.advert11 + '")';
    },
    advert12() {
      console.log("watch", this.advert12);
      //this.getAdvertOne();
      this.bgc12.backgroundImage = 'url("' + this.advert12 + '")';
    }

  },

  computed: {
    rates(){
      return this.$store.state.rates;
    }

  },

  methods: {

    async getAdverts(type) {
      const { data } = await advertService.getAdverts(type);
      
      const images = data.adverts.map(advert => advert.advertImage);

      // console.log(images);

      this.advertImages[type] = images;

    },

    fromClicked: function(currency) {
      // `this` inside methods points to the Vue instance
      console.log(currency);

      this.fromCurrency = currency;
      console.log("this.curr.amount", this.curr.amount);
      if (this.curr.amount) {
        this.convertCurr(this.curr.amount, this.fromCurrency, this.toCurrency);
      }
    },
    toClicked: function(currency) {
      // `this` inside methods points to the Vue instance
      console.log(currency);
      this.toCurrency = currency;
      console.log("this.curr.amount", this.curr.amount);
      this.convertCurr(this.curr.amount, this.fromCurrency, this.toCurrency);
    },

    getCBNRate() {
      cbnService
        .cbnRates()
        .then(data => {
          this.cbnRates = data.result;          
        })
        .catch(error => {
          console.log(error);
        });
    },

    getWesternRates() {
      rateService
        .getWesternRate()
        .then(data => {
          this.westernrate = data.data.result;
          console.log("westernrate", this.westernrate);
        })
        .catch(error => {
          console.log(error);
        });
    },

    queryLocationCSV(event) {
      this.selectedLocation = event.target.value;
      this.plotGraph();
    },

    queryCurrencyCSV(event) {
      this.baseCurrency = event.target.value;
      this.plotGraph();
    },

    getLocations() {
      rateService
        .getLocations()
        .then(data => {
          this.locations = data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    getCurrencies() {
      rateService
        .getCurrencies()
        .then(data => {
          this.currencies = data.result;
        })
        .catch(error => {
          console.log(error);
        });
    },


    getBankRates() {
      rateService
        .getBankRate()
        .then(data => {
          this.bankrates = data.data.result;
          this.bankdate = this.bankrates;
        })
        .catch(error => {
          console.log(error);
        });
    },

    getAllAdverts() {
      console.log('hello world');
      advertService
      .getAdverts()
      .then(response => {
        console.log("response", response)
        this.adverts = response.data.advert
        console.log("data from home vue", this.adverts);
        
         this.bgc1.backgroundImage="url(/advertImages/"+this.adverts[0].advertImage+")";
         this.bgc2.backgroundImage="url(/advertImages/"+this.adverts[1].advertImage+")";
         this.bgc3.backgroundImage="url(/advertImages/"+this.adverts[2].advertImage+")";

      })
      .catch(err => console.log("Error in getAllAdverts in Home.vue", err))
    },

    getAllAdvertsLeft() {
      console.log('hello world');
      advertService
      .getAdvertsLeft()
      .then(response => {
        this.adverts = response.data.advert
        console.log("left side adverts", this.adverts);
        
         this.bgc4.backgroundImage="url(/advertImagesLeft/"+this.adverts[0].advertImage+")";
         this.bgc5.backgroundImage="url(/advertImagesLeft/"+this.adverts[1].advertImage+")";
         this.bgc6.backgroundImage="url(/advertImagesLeft/"+this.adverts[2].advertImage+")";
        
      })
      .catch(err => console.log("Error in getAllAdvertsLeft in Home.vue", err))
    },

    getAllAdvertsRight() {
      console.log('hello world');
      advertService
      .getAdvertsRight()
      .then(response => {
        console.log("response", response)
        this.adverts = response.data.advert
        console.log("data from home vue", this.adverts);
      
         this.bgc7.backgroundImage="url(/advertImagesRight/"+this.adverts[0].advertImage+")";
         this.bgc8.backgroundImage="url(/advertImagesRight/"+this.adverts[1].advertImage+")";
         this.bgc9.backgroundImage="url(/advertImagesRight/"+this.adverts[2].advertImage+")";

      })
      .catch(err => console.log("Error in getAllAdvertsRight in Home.vue", err))
    },

    getAllAdvertsBase() {
      console.log('hello world');
      advertService
      .getAdvertsBase()
      .then(response => {
        console.log("response", response)
        this.adverts = response.data.advert
        console.log("data from home vue", this.adverts);
        
         this.bgc10.backgroundImage="url(/advertImagesBase/"+this.adverts[0].advertImage+")";
         this.bgc11.backgroundImage="url(/advertImagesBase/"+this.adverts[1].advertImage+")";
         this.bgc12.backgroundImage="url(/advertImagesBase/"+this.adverts[2].advertImage+")";
      })
      .catch(err => console.log("Error in getAllAdvertsBase in Home.vue", err))
    },

    plotGraph() {
      Highcharts.chart("chart-div", {
        chart: {
          scrollablePlotArea: {
            minWidth: 500
          }
        },

        data: {
          csvURL: `https://naija-bdc.herokuapp.com/api/rates/csv?location=${this.selectedLocation}&currency=${this.baseCurrency}`,
          beforeParse: function(csv) {
            return csv.replace(/\n\n/g, "\n");
          }
        },

        title: {
          text: ""
        },

        xAxis: {
          tickInterval: 7 * 24 * 3600 * 1000, // one week
          tickWidth: 0,
          gridLineWidth: 1,
          labels: {
            align: "left",
            x: 3,
            y: -3
          }
        },

        yAxis: [
          {
            // left y axis
            title: {
              text: null
            },
            labels: {
              align: "left",
              x: 3,
              y: 16,
              format: "{value:.,0f}"
            },
            showFirstLabel: false
          },
          {
            // right y axis
            linkedTo: 0,
            gridLineWidth: 0,
            opposite: true,
            title: {
              text: null
            },
            labels: {
              align: "right",
              x: -3,
              y: 16,
              format: "{value:.,0f}"
            },
            showFirstLabel: false
          }
        ],

        legend: {
          align: "left",
          verticalAlign: "top",
          borderWidth: 0,
          enabled: false
        },
        exporting: {
          enabled: false
        },
        credits: {
          enabled: false
        },

        tooltip: {
          shared: true,
          crosshairs: true
        },

        plotOptions: {
          series: {
            cursor: "pointer",
            point: {
              events: {
                click: function(e) {
                  hs.htmlExpand(null, {
                    pageOrigin: {
                      x: e.pageX || e.clientX,
                      y: e.pageY || e.clientY
                    },
                    headingText: this.series.name,
                    maincontentText:
                      Highcharts.dateFormat("%A, %b %e, %Y", this.x) +
                      ":<br/> " +
                      this.y +
                      " sessions",
                    width: 200
                  });
                }
              }
            },
            marker: {
              lineWidth: 1,
              enabled: false
            }
          }
        },

        series: [
          {
            name: "Buying",
            lineWidth: 1,
            color: "#008752",
            marker: {
              radius: 2
            }
          },
          {
            name: "Selling",
            color: "#f9b100"
          }
        ]
      });
    },

    //check if email is valid
    checkForm:function(email) {
        email = this.sub.email;
    
       if(!this.validEmail(this.sub.email)) {
             Vue.$toast.error(' Valid Email required', {
                  // optional options Object
                  position: 'top',
                  duration:3000,
                  dismissible:true
              })    
      }

      else{
        this.checkemail();
      }
      
    },

    // check with regex if email field is valid
    validEmail:function(email) {
      email = this.sub.email;
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;
      return re.test(email);
    },

    // subscription function
    async checkemail(email) {
      
      email= this.sub.email;
        
      const API_URL = "https://naija-bdc.herokuapp.com/api/suscribe/"+email;
        
      await axios
        .get(API_URL,email)
        .then(res => {
              this.data = res.data.status;
              if (this.data == true){
                   Vue.$toast.error('User already suscribed', {
                  // optional options Object
                  position: 'top',
                  duration:3000,
                  dismissible:true
                })
              }
              else{
                let sub = {
                  email:this.sub.email
                };
                userService.suscribe(sub)
                  .then(res =>{
                    Vue.$toast.success('Subscription successful', {
                    // optional options Object
                    position: 'top',
                    duration:3000,
                    dismissible:true
                  })
                  })
              }
          
        })
        .catch(err => {
          throw err;
        });
    },

   
    //Currency converter api integration
    convertCurr(amount = 1, fromCurrency = "USD", toCurrency = "NGN") {
      //const amount=10, fromCurrency='USD', toCurrency='PHP';

      let anotherConversion = 0;
      // console.log(this);
      let that = this;
      rateService.convertCurrency(amount, fromCurrency, toCurrency, function(
        err,
        converted
      ) {
        console.log("amount", converted);
        that.converted = converted;
        console.log(that.converted);
      });
    },

    //fetch news to display
    async getNews() {
      const API_URL = "https://naija-bdc.herokuapp.com/api/news";

      await axios
        .get(API_URL)
        .then(data => {
          this.newsPosts = data;
          this.newsPosts = this.newsPosts.data.message;
          // console.log("from NewsPost server --->", this.newsPosts);
        })
        .catch(err => {
          throw err;
        });
    },

    // search bdc operator by name 
    simpleSuggestionList() {
      let arr = this.operators.map(item => {
        return item.name;
        
      });
      return arr;

    },

    // search bdc operator by location 
    simpleSuggestionList2() {
      let arr = this.operators.map(item => {
        return item.location;
      });
      return arr;
    },

    showOperator2(e) {
      let item = this.operators.find(element => element.location == e);

      this.operator = item;
      this.showModal2(e);
    },

    showModal2() {
      this.$refs["modal-2"].show();
    },

    showOperator(e) {
      
      let item = this.operators.find(element => element.name == e);
     
      this.operator = item;
      this.showModal(e);
    },
    showModal() {
      this.$refs["modal-1"].show();
    },

    getAllAdverts() {
      console.log('hello world');
      advertService
      .getAdverts()
      .then(response => {
        console.log("response", response)
        this.adverts = response.data.advert
        console.log("data from home vue", this.adverts);
        
         this.bgc1.backgroundImage="url(/advertImages/"+this.adverts[0].advertImage+")";
         this.bgc2.backgroundImage= "url(/advertImages/"+this.adverts[1].advertImage+")";
         this.bgc3.backgroundImage="url(/advertImages/"+this.adverts[2].advertImage+")";
       
      })
      .catch(err => console.log("Error in getAllAdverts in Home.vue", err))
    },

    getAllAdvertsLeft() {
      console.log('hello world');
      advertService
      .getAdvertsLeft()
      .then(response => {
        console.log("response", response)
        this.adverts = response.data.advert
        console.log("left side adverts", this.adverts);
        
        
         this.bgc4.backgroundImage="url(/advertImagesLeft/"+this.adverts[0].advertImage+")";
         this.bgc5.backgroundImage="url(/advertImagesLeft/"+this.adverts[1].advertImage+")";
         this.bgc6.backgroundImage="url(/advertImagesLeft/"+this.adverts[2].advertImage+")";
        
      })
      .catch(err => console.log("Error in getAllAdvertsLeft in Home.vue", err))
    },

    getAllAdvertsRight() {
      console.log('hello world');
      advertService
      .getAdvertsRight()
      .then(response => {
        console.log("response", response)
        this.adverts = response.data.advert
        console.log("data from home vue", this.adverts);
        
       
         this.bgc7.backgroundImage="url(/advertImagesRight/"+this.adverts[0].advertImage+")";
         this.bgc8.backgroundImage="url(/advertImagesRight/"+this.adverts[1].advertImage+")";
         this.bgc9.backgroundImage="url(/advertImagesRight/"+this.adverts[2].advertImage+")";
       
      })
      .catch(err => console.log("Error in getAllAdvertsRight in Home.vue", err))
    },

    getAllAdvertsBase() {
      console.log('hello world');
      advertService
      .getAdvertsBase()
      .then(response => {
        console.log("response", response)
        this.adverts = response.data.advert
        console.log("data from home vue", this.adverts);
        
        
         this.bgc10.backgroundImage="url(/advertImagesBase/"+this.adverts[0].advertImage+")";
         this.bgc11.backgroundImage="url(/advertImagesBase/"+this.adverts[1].advertImage+")";
         this.bgc12.backgroundImage="url(/advertImagesBase/"+this.adverts[2].advertImage+")";
      })
      .catch(err => console.log("Error in getAllAdvertsBase in Home.vue", err))
    },
  },

  mounted() {
    this.getAdverts('landing');
    this.getAdverts('left');
    this.getAdverts('right');
    this.getAdverts('base');




    // this.getAllAdverts();
    // this.getAllAdvertsLeft();
    // this.getAllAdvertsRight();
    // this.getAllAdvertsBase();
    $(function() {
      $(".c_h").click(function(e) {
        if ($(".chat_container").is(":visible")) {
          $(".c_h .right_c .mini").text("+");
        } else {
          $(".c_h .right_c .mini").text("-");
        }
        $(".chat_container").slideToggle("slow");
        return false;
      });
    });
    const API_URL = "https://naija-bdc.herokuapp.com/api/operators/operators";
    axios
      .get(API_URL)
      .then(response => {
        console.log("it works");
        let arrayOps = response.data.message;
        let arr = [];
        arrayOps.forEach(item => {
          arr.push({
            name: item.name,
            address: item.streetAddress,
            location: item.area
          });
        });
        this.operators = arr;
        // console.log('another ops ===>', this.operators);
      })
      .catch(err => {
        throw err;
      });

    $(".dropdown-menu li a").click(function() {
      var selText = $(this).text();
      var imgSource = $(this)
        .find("img")
        .attr("src");
      var img = '<img src="' + imgSource + '" height="13px"/>';
      $(this)
        .parents(".btn-group")
        .find(".dropdown-toggle")
        .html(
          img +
            " " +
            selText +
            ' <span><i class="fas fa-caret-down"></i></span>'
        );
    });

    particlesJS("home", {
      particles: {
        number: {
          value: 140,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 4,
            size_min: 0.3,
            sync: true
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 600
          }
        }
      },
      interactivity: {
        detect_on: "window  ",
        events: {
          onhover: {
            enable: true,
            mode: "bubble"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              // "enabled" : false,
              opacity: 0
            }
          },
          bubble: {
            distance: 400,
            size: 2,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });


    this.getWesternRates();
    this.getBankRates();
    this.convertCurr();
    this.getCBNRate();
    this.getNews();
    this.getAdverts();
    this.plotGraph();
    this.getCurrencies();
    this.getLocations();
    this.getAllAdverts();
    this.getAllAdvertsLeft();
    this.getAllAdvertsRight();
    this.getAllAdvertsBase();
    this.$store.dispatch('fetchRatesApi'); 
  }
};
</script>