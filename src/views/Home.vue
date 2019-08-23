<template>
  <div class="home">
    <section id="home" ref="home" :style="bgc1">
      <div id="particles-js"></div>
      <div class="htome">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-xs-12">
              <h1 class="w-48" style="margin-top: +80px;">Daily exchange rate at your fingertips</h1>
              <p class="w-17">Sign up for daily street market exchange rates</p>
              <div class="form-group form-inline">
                <input type="text" v-model="sub.email" class="form-control grey px-5 mt-2" />
                <button
                  v-on:click="checkemail()"
                  class="btn btn-green px-5 ml-lg-2 ml-xs-0 mt-2"
                >Sign Up</button>
              </div>
            </div>
            <div class="col-lg-4 col-xs-12 mt-lg-3">
              <div
                id="carouselExampleIndicators"
                
                class="hometop carousel slide mt-lg-5"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="blackBox w-100"></div>
                  </div>
                  <div class="carousel-item">
                    <div class="blackBox1 w-100"></div>
                  </div>
                  <div class="carousel-item">
                    <div class="blackBox2 w-100"></div>
                  </div>
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
      <div class="container pt-5 pb-2">
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
              <div class="col-lg-6 col-xs-12 mb-3">
                <div class="d-flex">
                  <div class="date input-group">
                    <div class="input-group-prepend px-2">
                      <img src="../../public/img/calendar.svg" />
                    </div>
                    <input type="date" class="date form-control" />
                  </div>
                  
                  <div class="date input-group">
                    <div class="input-group-prepend px-2">
                      <img src="../../public/img/calendar.svg" />
                    </div>
                    <input type="date" class="date form-control" />
                  </div>
                  <div>
                    <button class="btn btn-green" ><i class="fas fa-search-location"></i></button>
                  </div>
                </div>
              </div>
            </div>

            <ul class="nav nav-tabs ad_tabs" role="tablist">
              <li class="nav-item pr-3">
                <a
                  class="nav-link active pb-3"
                  href="#Abuja"
                  role="tab"
                  data-toggle="tab"
                >Abuja</a>
              </li>
              <li class="nav-item pr-3">
                <a
                  class="nav-link pb-3"
                  href="#Kano"
                  role="tab"
                  data-toggle="tab"
                >Kano</a>
              </li>
              <li class="nav-item pr-3">
                <a
                  class="nav-link pb-3"
                  href="#Lagos"
                  role="tab"
                  data-toggle="tab"
                >Lagos</a>
              </li>
              <li class="nav-item pr-3">
                <a
                  class="nav-link pb-3"
                  href="#Portharcourt"
                  role="tab"
                  data-toggle="tab"
                >Portharcourt</a>
              </li>
            </ul>
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="Abuja">
                <div class="table-responsive-md">
                  <table class="table red1">
                    <thead>
                      <th>Date</th>
                      <th>LOCATION</th>
                      <th>MORNING</th>
                      <th>MIDDAY</th>
                      <th>EVENING</th>
                      <th>CURRENCY</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </thead>
                    <tbody>
                      <tr v-for="(rate) in rates" v-bind:key="rate">
                        <td v-for="(value) in rate.rates" v-bind:key="value">{{value.date}}</td>
                        <td>
                          <input
                            type="checkbox"
                            class="checkbox-custom"
                            name="checkbox-1"
                            id="checkbox-1"
                          />
                          <label for="checkbox-1" class="checkbox-custom-label p-10"></label>
                          {{rate._id}}
                        </td>
                        <td
                          v-if="rate.rates[0].timeOfDay === 'morning'"
                        >{{rate.rates[0].buying}}/{{rate.rates[0].selling}}</td>
                        <td v-else></td>
                        <td
                          v-if="rate.rates[0].timeOfDay === 'afternoon'"
                        >{{rate.rates[0].buying}}/{{rate.rates[0].selling}}</td>
                        <td v-else></td>
                        <td
                          v-if="rate.rates[0].timeOfDay === 'evening'"
                        >{{rate.rates[0].buying}}/{{rate.rates[0].selling}}</td>
                        <td v-else></td>
                        <td>
                          <img width="13" v-bind:src="`../../../img/${rate.rates[0].currency}.svg`" />
                          {{rate.rates[0].currency}}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="Kano">
                <div class="table-responsive-md">
                  <table class="table red1">
                    <thead>
                      <th>Date</th>
                      <th>LOCATION</th>
                      <th>MORNING</th>
                      <th>MIDDAY</th>
                      <th>EVENING</th>
                      <th>CURRENCY</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </thead>
                    <tbody>
                      <tr v-for="(rate) in rates" v-bind:key="rate">
                        <td v-for="(value) in rate.rates" v-bind:key="value">{{value.date}}</td>
                        <td>
                          <input
                            type="checkbox"
                            class="checkbox-custom"
                            name="checkbox-1"
                            id="checkbox-1"
                          />
                          <label for="checkbox-1" class="checkbox-custom-label p-10"></label>
                          {{rate._id}}
                        </td>
                        <td
                          v-if="rate.rates[0].timeOfDay === 'morning'"
                        >{{rate.rates[0].buying}}/{{rate.rates[0].selling}}</td>
                        <td v-else></td>
                        <td
                          v-if="rate.rates[0].timeOfDay === 'afternoon'"
                        >{{rate.rates[0].buying}}/{{rate.rates[0].selling}}</td>
                        <td v-else></td>
                        <td
                          v-if="rate.rates[0].timeOfDay === 'evening'"
                        >{{rate.rates[0].buying}}/{{rate.rates[0].selling}}</td>
                        <td v-else></td>
                        <td>
                          <img width="13" v-bind:src="`../../../img/${rate.rates[0].currency}.svg`" />
                          {{rate.rates[0].currency}}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="Lagos">
                <div class="table-responsive-md">
                  <table class="table red1">
                    <thead>
                      <th>Date</th>
                      <th>LOCATION</th>
                      <th>MORNING</th>
                      <th>MIDDAY</th>
                      <th>EVENING</th>
                      <th>CURRENCY</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </thead>
                    <tbody>
                      <tr v-for="(rate) in rates" v-bind:key="rate">
                        <td v-for="(value) in rate.rates" v-bind:key="value">{{value.date}}</td>
                        <td>
                          <input
                            type="checkbox"
                            class="checkbox-custom"
                            name="checkbox-1"
                            id="checkbox-1"
                          />
                          <label for="checkbox-1" class="checkbox-custom-label p-10"></label>
                          {{rate._id}}
                        </td>
                        <td
                          v-if="rate.rates[0].timeOfDay === 'morning'"
                        >{{rate.rates[0].buying}}/{{rate.rates[0].selling}}</td>
                        <td v-else></td>
                        <td
                          v-if="rate.rates[0].timeOfDay === 'afternoon'"
                        >{{rate.rates[0].buying}}/{{rate.rates[0].selling}}</td>
                        <td v-else></td>
                        <td
                          v-if="rate.rates[0].timeOfDay === 'evening'"
                        >{{rate.rates[0].buying}}/{{rate.rates[0].selling}}</td>
                        <td v-else></td>
                        <td>
                          <img width="13" v-bind:src="`../../../img/${rate.rates[0].currency}.svg`" />
                          {{rate.rates[0].currency}}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="Portharcourt">
                <div class="table-responsive-md">
                  <table class="table red1">
                    <thead>
                      <th>Date</th>
                      <th>LOCATION</th>
                      <th>MORNING</th>
                      <th>MIDDAY</th>
                      <th>EVENING</th>
                      <th>CURRENCY</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </thead>
                    <tbody>
                      <tr v-for="(rate) in rates" v-bind:key="rate">
                        <td v-for="(value) in rate.rates" v-bind:key="value">{{value.date}}</td>
                        <td>
                          <input
                            type="checkbox"
                            class="checkbox-custom"
                            name="checkbox-1"
                            id="checkbox-1"
                          />
                          <label for="checkbox-1" class="checkbox-custom-label p-10"></label>
                          {{rate._id}}
                        </td>
                        <td
                          v-if="rate.rates[0].timeOfDay === 'morning'"
                        >{{rate.rates[0].buying}}/{{rate.rates[0].selling}}</td>
                        <td v-else></td>
                        <td
                          v-if="rate.rates[0].timeOfDay === 'afternoon'"
                        >{{rate.rates[0].buying}}/{{rate.rates[0].selling}}</td>
                        <td v-else></td>
                        <td
                          v-if="rate.rates[0].timeOfDay === 'evening'"
                        >{{rate.rates[0].buying}}/{{rate.rates[0].selling}}</td>
                        <td v-else></td>
                        <td>
                          <img width="13" v-bind:src="`../../../img/${rate.rates[0].currency}.svg`" />
                          {{rate.rates[0].currency}}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
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
                Search for approved BDC ’s operators across Nigeria
                <br />
              </h1>
              <small class="w-14">
                <a
                  href="#"
                  class="w-14"
                >Click here to see list of accredited Bureau De Change agents in Nigeria.</a>
              </small>
            </div>
            <div class="col-lg-1" ></div>
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
            <div class="col-lg-4 px-1 col-xs-12 mb-3">
              <vue-simple-suggest
                v-model="opsLocation"
                :list="simpleSuggestionList2"
                :filter-by-query="true"
                v-on:select="showOperator"
                placeholder="Search operator by location"
                class="search-operator"
              ></vue-simple-suggest>
            </div>
            <div class="col-lg-2 px-1 col-xs-12 mb-3">
              <button class="btn btn-dark-green w-100">Search Operator</button>
            </div>
            <div class="col-lg-1" ></div>

            <div>
              <b-modal ref="modal-1" id="modal-1"  hide-footer="true" body-class="pt-0 px-0" hide-header="true">
                <button class="btn-black" @click="$bvModal.hide('modal-1')" ><i class="fas fa-times"></i></button>
                <h3 class="w-24 mohead px-3 py-3" >BDC Operator details  </h3>
                
                <div class="row pt-4 px-3" >
                  
                  <div class="col-lg-3 col-xs-12" >
                    <p class="a-15" >Name:</p>
                  </div>
                  <div class="col-lg-9 col-xs-12" >
                    <p class="a-16" >{{operator.name}}</p>
                  </div>
                  <div class="col-lg-3 col-xs-12" >
                    <p class="a-15" >Address:</p>
                  </div>
                  <div class="col-lg-9 col-xs-12" >
                    <p class="a-16" >{{operator.address}}</p>
                  </div>
                  <div class="col-lg-3 col-xs-12" >
                    <p class="a-15" >Location:</p>
                  </div>
                  <div class="col-lg-9 col-xs-12" >
                    <p class="a-16" >{{operator.location}}</p>
                  </div>
                </div>
                <!-- <p class="my-4">name: {{operator.name}}</p> -->
                <!-- <p class="my-4">address:{{operator.address}}</p>
                <p class="my-4">location:{{operator.location}}</p> -->
              </b-modal>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="graph">
      <div class="container-fluid py-5 px-lg-5">
        <div class="row">
          <div class="col-lg-3 col-xs-12" >
            <div
              id="carouselExampleSlidesOnly"
              class="carousel slide mb-4"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="w-100 blackBox1s"></div>
                </div>
                <div class="carousel-item">
                  <div class="w-100 blackBox2s"></div>
                </div>
                <div class="carousel-item">
                  <div class="w-100 blackBoxs"></div>
                </div>
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
                  <div class="date input-group">
                    <div class="input-group-prepend px-2">
                      <img src="../../public/img/calendar.svg" alt />
                    </div>
                    <input type="text" placeholder="Location" class="date form-control" />
                  </div>
                  <div class="pt-3 px-2">
                    <div class="border" style="width: 40px;"></div>
                  </div>
                  <div class="date input-group">
                    <div class="input-group-prepend px-2">
                      <img src="../../public/img/calendar.svg" alt />
                    </div>
                    <input type="text" placeholder="Currency" class="date form-control" />
                  </div>
                </div>
              </div>
            </div>

            <div id="chartdiv" style="height: 400px; min-width: 310px; width: 100%;"></div>
            <div class="coveram" ></div>
          </div>
          <div class="col-lg-3 col-xs-12">
            <div id="carouselExampleSlidesOnly" class="carousel slide mb-4" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="w-100 blackBoxs"></div>
                </div>
                <div class="carousel-item">
                  <div class="w-100 blackBox1s"></div>
                </div>
                <div class="carousel-item">
                  <div class="w-100 blackBox2s"></div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
    <section id="getapp">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="slide1"></div>
                </div>
                <div class="carousel-item">
                  <div class="slide2"></div>
                </div>
                <div class="carousel-item">
                  <div class="slide3"></div>
                </div>
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
              <p class="a-17 mt-lg-3">Get the Naija bdc app</p>
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
                  <th>Buy/Sell</th>
                </thead>
                <tbody v-for="western in westernrate" v-bind:key="western">
                  <tr>
                    <td>{{western.date | formatDate}}</td>
                    <td>
                      <img width="20" v-bind:src="`../../../img/${western.baseCurrency}.svg`" />
                      {{western.baseCurrency}}
                    </td>
                    <td>{{western.buyingRate}}/{{western.sellingRate}}</td>
                    <!-- <td>{{western.CAD}}</td> -->
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
                    <!-- <img src="../../public/img/nigeria-1@2x.png" style="height:13px;" alt /> -->
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
                  <tr>
                    <!-- <td>{{cbnDate}}</td>
                    <td v-for="item in cbnRates" v-bind:key="item.id">{{item.cbnRate}}</td> -->
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
      <div class="container">
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
              <a href="#" class="p-2">
                <i class="fab fa-facebook-f" style="color: #fff;"></i>
              </a>
              <a href="#" class="p-2">
                <i class="fab fa-twitter" style="color: #fff;"></i>
              </a>
              <a href="#" class="p-2">
                <i class="fab fa-google-plus-g" style="color: #fff;"></i>
              </a>
              <a href="#" class="p-2">
                <i class="fab fa-instagram" style="color: #fff;"></i>
              </a>
              <a href="#" class="p-2 w-14">
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
              Technical Partners:
              <img
                src="../../public/img/sbsc.png"
                class="mx-2"
                style="height: 30px;"
              />
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
import HelloWorld from "@/components/HelloWorld.vue";
import { RateService } from "../services/rateservice";
import { UserService } from "../services/userservices";
import { CBNService } from "../services/cbnrates";
import { constants } from "crypto";
import moment from "moment";
import Vue from "vue";
import VueSimpleSuggest from "vue-simple-suggest";
import { AdvertService } from "../services/advertservice";

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
    HelloWorld,
    VueSimpleSuggest
  },

  data() {
    return {
      advertImage: "",
      advert: [],
      advert1: "/advertImages/1566296937264-graph.jpg",
      advert2: "/advertImages/1566296959796-analytics.jpg",
      advert3: "/advertImages/1566296975561-chart.jpg",
      advert4: "/advertImages/1566297003625-buysell.jpg",
      advert5: "/advertImages/1566297023517-calculate.jpg",
      advert6: "/advertImages/1566297042807-exchange.jpg",
        newsPosts: [],
        operators: [],
        operatorName: "",
        operator: "",
        opsLocation: "",
        rates: [],
        cbnRates: [],
        cbnDate: String,
        westerns: [],
        westernrate: [],
        bankrate: [],
        bankrates: [],
        bankdate: [],
        sub: {
          email:""
        },
        converted: "",
        fromCurrency: "USD",
        toCurrency: "USD",
        curr: {
          amount: ""
        },
        bgc1: {
          backgroundImage: 'url(/advertImages/home.png)'
        },
        bgc2: {
          backgroundImage: 'url(/advertImages/1566306758829-1566296959796-analytics.jpg)'
        },
        bgc3: {
          backgroundImage: 'url(/advertImages/1566306771733-1566296975561-chart.jpg)'
        },
        bgc4: {
          backgroundImage: 'url(/advertImages/1566306795882-1566297003625-buysell.jpg)'
        },
        bgc5: {
          backgroundImage: 'url(/advertImages/1566306805313-1566297023517-calculate.jpg)'
        },
        bgc6: {
          backgroundImage: 'url(advertImages/1566297042807-exchange.jpg)'
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
      //this.getAdvertOne();
      this.bgc6.backgroundImage = 'url("' + this.advert6 + '")';
    }
  },
  methods: {
    fromClicked: function(currency) {
      // `this` inside methods points to the Vue instance
      console.log(currency);

      this.fromCurrency = currency;
      console.log("this.curr.amount", this.curr.amount);
      if (this.curr.amount) {
        this.convertCurr(this.curr.amount, this.fromCurrency, this.toCurrency);
      }
      //let query = `${this.fromCurrency}_${$this.toCurrency}`;
    },
    toClicked: function(currency) {
      // `this` inside methods points to the Vue instance
      console.log(currency);
      this.toCurrency = currency;
      console.log("this.curr.amount", this.curr.amount);
      this.convertCurr(this.curr.amount, this.fromCurrency, this.toCurrency);
    },

    getRates() {
      rateService
        .getRates()
        .then(data => {
          this.rates = data.result;
          console.log(this.rates);
        })
        .catch(error => {
          console.log(error);
        });
    },

    getCBNRate() {
      cbnService
        .cbnRates()
        .then(data => {
          this.cbnRates = data.result.currencies;
          this.cbnDate = this.cbnRates[0].currencyDate;
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


    async checkemail(email) {

        email= this.sub.email;
      const API_URL = "https://naija-bdc.herokuapp.com/api/suscribe/"+email;
        
      await axios
        .get(API_URL,email)
        .then(res => {
              this.data = res.data.status;
              if (this.data == true){
                  alert('User already signed up')
              }
              else{
                let sub = {
                  email:this.sub.email
                };
                userService.suscribe(sub)
                  .then(res =>{
                    alert('Suscription successful')
                  })
              }
          
        })
        .catch(err => {
          throw err;
        });
    },

   

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

    simpleSuggestionList() {
      let arr = this.operators.map(item => {
        return item.name;
        
      });
      return arr;

    },

    simpleSuggestionList2() {
      let arr = this.operators.map(item => {
        
        return item.location;
        
      });
      return arr;
    },

    showOperator(e) {
      
      let item = this.operators.find(element => element.name == e);
     
      this.operator = item;
      this.showModal(e);
    },
    showModal() {
      this.$refs["modal-1"].show();
    },

    getAdverts() {
      advertService
        .getAdverts()
        .then(response => {
          console.log("response", response);
          this.adverts = response.data.advert;
          console.log("data from home vue", this.adverts);
          let that = this;
          setTimeout(function() {
            that.advert1 = that.adverts[0].advertImage;
            that.advert2 = that.adverts[1].advertImage;
            that.advert3 = that.adverts[2].advertImage;
            that.advert4 = that.adverts[3].advertImage;
            that.advert5 = that.adverts[4].advertImage;
            that.advert6 = that.adverts[5].advertImage;
            console.log("advert1", that.advert1);
            console.log("advert2", that.advert2);
            console.log("advert3", that.advert3);
            console.log("advert4", that.advert4);
            console.log("advert5", that.advert5);
            console.log("advert6", that.advert6);
          }, 1000000000);
        })
        .catch(err => console.log("Error in getAllAdverts in Home.vue", err));
    }
  },

  mounted() {
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

    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.paddingRight = 20;

    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;

    var series = chart.series.push(new am4charts.CandlestickSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "close";
    series.dataFields.openValueY = "open";
    series.dataFields.lowValueY = "low";
    series.dataFields.highValueY = "high";
    series.simplifiedProcessing = true;
    series.tooltipText =
      "Open:${openValueY.value}\nLow:${lowValueY.value}\nHigh:${highValueY.value}\nClose:${valueY.value}";

    chart.cursor = new am4charts.XYCursor();

    // a separate series for scrollbar
    var lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.dateX = "date";
    lineSeries.dataFields.valueY = "close";
    // need to set on default state, as initially series is "show"
    lineSeries.defaultState.properties.visible = false;

    // hide from legend too (in case there is one)
    lineSeries.hiddenInLegend = true;
    lineSeries.fillOpacity = 0.5;
    lineSeries.strokeOpacity = 0.5;

    var scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(lineSeries);
    chart.scrollbarX = scrollbarX;

    chart.data = [
      {
        date: "2011-08-01",
        open: "136.65",
        high: "136.96",
        low: "134.15",
        close: "136.49"
      },
      {
        date: "2011-08-02",
        open: "135.26",
        high: "135.95",
        low: "131.50",
        close: "131.85"
      },
      {
        date: "2011-08-05",
        open: "132.90",
        high: "135.27",
        low: "128.30",
        close: "135.25"
      },
      {
        date: "2011-08-06",
        open: "134.94",
        high: "137.24",
        low: "132.63",
        close: "135.03"
      },
      {
        date: "2011-08-07",
        open: "136.76",
        high: "136.86",
        low: "132.00",
        close: "134.01"
      },
      {
        date: "2011-08-08",
        open: "131.11",
        high: "133.00",
        low: "125.09",
        close: "126.39"
      },
      {
        date: "2011-08-09",
        open: "123.12",
        high: "127.75",
        low: "120.30",
        close: "125.00"
      },
      {
        date: "2011-08-12",
        open: "128.32",
        high: "129.35",
        low: "126.50",
        close: "127.79"
      },
      {
        date: "2011-08-13",
        open: "128.29",
        high: "128.30",
        low: "123.71",
        close: "124.03"
      },
      {
        date: "2011-08-14",
        open: "122.74",
        high: "124.86",
        low: "119.65",
        close: "119.90"
      },
      {
        date: "2011-08-15",
        open: "117.01",
        high: "118.50",
        low: "111.62",
        close: "117.05"
      },
      {
        date: "2011-08-16",
        open: "122.01",
        high: "123.50",
        low: "119.82",
        close: "122.06"
      },
      {
        date: "2011-08-19",
        open: "123.96",
        high: "124.50",
        low: "120.50",
        close: "122.22"
      },
      {
        date: "2011-08-20",
        open: "122.21",
        high: "128.96",
        low: "121.00",
        close: "127.57"
      },
      {
        date: "2011-08-21",
        open: "131.22",
        high: "132.75",
        low: "130.33",
        close: "132.51"
      },
      {
        date: "2011-08-22",
        open: "133.09",
        high: "133.34",
        low: "129.76",
        close: "131.07"
      },
      {
        date: "2011-08-23",
        open: "130.53",
        high: "135.37",
        low: "129.81",
        close: "135.30"
      },
      {
        date: "2011-08-26",
        open: "133.39",
        high: "134.66",
        low: "132.10",
        close: "132.25"
      },
      {
        date: "2011-08-27",
        open: "130.99",
        high: "132.41",
        low: "126.63",
        close: "126.82"
      },
      {
        date: "2011-08-28",
        open: "129.88",
        high: "134.18",
        low: "129.54",
        close: "134.08"
      },
      {
        date: "2011-08-29",
        open: "132.67",
        high: "138.25",
        low: "132.30",
        close: "136.25"
      },
      {
        date: "2011-08-30",
        open: "139.49",
        high: "139.65",
        low: "137.41",
        close: "138.48"
      },
      {
        date: "2011-09-03",
        open: "139.94",
        high: "145.73",
        low: "139.84",
        close: "144.16"
      },
      {
        date: "2011-09-04",
        open: "144.97",
        high: "145.84",
        low: "136.10",
        close: "136.76"
      },
      {
        date: "2011-09-05",
        open: "135.56",
        high: "137.57",
        low: "132.71",
        close: "135.01"
      },
      {
        date: "2011-09-06",
        open: "132.01",
        high: "132.30",
        low: "130.00",
        close: "131.77"
      },
      {
        date: "2011-09-09",
        open: "136.99",
        high: "138.04",
        low: "133.95",
        close: "136.71"
      },
      {
        date: "2011-09-10",
        open: "137.90",
        high: "138.30",
        low: "133.75",
        close: "135.49"
      },
      {
        date: "2011-09-11",
        open: "135.99",
        high: "139.40",
        low: "135.75",
        close: "136.85"
      },
      {
        date: "2011-09-12",
        open: "138.83",
        high: "139.00",
        low: "136.65",
        close: "137.20"
      },
      {
        date: "2011-09-13",
        open: "136.57",
        high: "138.98",
        low: "136.20",
        close: "138.81"
      },
      {
        date: "2011-09-16",
        open: "138.99",
        high: "140.59",
        low: "137.60",
        close: "138.41"
      },
      {
        date: "2011-09-17",
        open: "139.06",
        high: "142.85",
        low: "137.83",
        close: "140.92"
      },
      {
        date: "2011-09-18",
        open: "143.02",
        high: "143.16",
        low: "139.40",
        close: "140.77"
      },
      {
        date: "2011-09-19",
        open: "140.15",
        high: "141.79",
        low: "139.32",
        close: "140.31"
      },
      {
        date: "2011-09-20",
        open: "141.14",
        high: "144.65",
        low: "140.31",
        close: "144.15"
      },
      {
        date: "2011-09-23",
        open: "146.73",
        high: "149.85",
        low: "146.65",
        close: "148.28"
      },
      {
        date: "2011-09-24",
        open: "146.84",
        high: "153.22",
        low: "146.82",
        close: "153.18"
      },
      {
        date: "2011-09-25",
        open: "154.47",
        high: "155.00",
        low: "151.25",
        close: "152.77"
      },
      {
        date: "2011-09-26",
        open: "153.77",
        high: "154.52",
        low: "152.32",
        close: "154.50"
      },
      {
        date: "2011-09-27",
        open: "153.44",
        high: "154.60",
        low: "152.75",
        close: "153.47"
      },
      {
        date: "2011-09-30",
        open: "154.63",
        high: "157.41",
        low: "152.93",
        close: "156.34"
      },
      {
        date: "2011-10-01",
        open: "156.55",
        high: "158.59",
        low: "155.89",
        close: "158.45"
      },
      {
        date: "2011-10-02",
        open: "157.78",
        high: "159.18",
        low: "157.01",
        close: "157.92"
      },
      {
        date: "2011-10-03",
        open: "158.00",
        high: "158.08",
        low: "153.50",
        close: "156.24"
      },
      {
        date: "2011-10-04",
        open: "158.37",
        high: "161.58",
        low: "157.70",
        close: "161.45"
      },
      {
        date: "2011-10-07",
        open: "163.49",
        high: "167.91",
        low: "162.97",
        close: "167.91"
      },
      {
        date: "2011-10-08",
        open: "170.20",
        high: "171.11",
        low: "166.68",
        close: "167.86"
      },
      {
        date: "2011-10-09",
        open: "167.55",
        high: "167.88",
        low: "165.60",
        close: "166.79"
      },
      {
        date: "2011-10-10",
        open: "169.49",
        high: "171.88",
        low: "153.21",
        close: "162.23"
      },
      {
        date: "2011-10-11",
        open: "163.01",
        high: "167.28",
        low: "161.80",
        close: "167.25"
      },
      {
        date: "2011-10-14",
        open: "167.98",
        high: "169.57",
        low: "163.50",
        close: "166.98"
      },
      {
        date: "2011-10-15",
        open: "165.54",
        high: "170.18",
        low: "165.15",
        close: "169.58"
      },
      {
        date: "2011-10-16",
        open: "172.69",
        high: "173.04",
        low: "169.18",
        close: "172.75"
      }
    ];

    this.getRates();
    this.getWesternRates();
    this.getBankRates();
    this.convertCurr();
    this.getCBNRate();
    this.getNews();
    this.getAdverts();
    
  }
};
</script>