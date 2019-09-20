<template>
  <div class="addmin py-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="p-24">Bdc Operators</h1>
        </div>

        <div class="col-12">
          <ul class="nav nav-tabs ad_tabs" role="tablist">
            <li class="nav-item pr-3">
              <a
                class="nav-link active pb-3"
                href="#alloperators"
                role="tab"
                data-toggle="tab"
              >All Bdc Operators</a>
            </li>
            <li class="nav-item pr-3">
              <a
                class="nav-link pb-3"
                href="#addoperators"
                role="tab"
                data-toggle="tab"
              >Add Bdc Operators</a>
            </li>
            <li class="ml-auto">
              <div class="input-group operator">
                <div class="input-group-prepend px-2 pt-1">
                  <i class="icon ion-ios-search"></i>
                </div>
                <input
                  type="text"
                  class="form-control"
                  v-model="searchQ"
                  placeholder="Search Operators"
                />
              </div>
            </li>
          </ul>
        </div>
        <div class="col-12">
          <div class="ad_rectangle">
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="alloperators">
                <div class="table-responsive-md">
                  <table class="table table-striped ad_table">
                    <thead>
                      <th>FULL NAME</th>
                      <th>TYPE OF INSTITUTION</th>
                      <th>ADDRESS</th>
                      <th>PHONE</th>
                      <th>DATE REGISTERED</th>
                      <th>ACTION</th>
                      <th></th>
                    </thead>
                    <tbody>
                      <tr v-for="(operator) in displayedOperators" v-bind:key="operator._id">
                        <td>{{operator.name}}</td>
                        <td>{{operator.typeOfInstitution}}</td>
                        <td>{{operator.addressRegistered}}</td>
                        <td>{{operator.telephone}}</td>
                        <td>{{operator.dateRegistered}}</td>

                        <td>
                          <span data-toggle="modal" data-target="#exampleModal">
                            <button
                              class="btn btn-edit"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Edit Operator"
                              @click="getOperatorById(operator._id)"
                            >
                              <i class="far fa-edit"></i>
                            </button>
                          </span>
                        </td>
                        <td>
                          <button
                            class="btn btn-delete"
                            @click="removeById(operator._id)"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Delete Operator"
                          >
                            <i class="far fa-trash-alt"></i>
                          </button>
                        </td>
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

              <div role="tabpanel" class="tab-pane" id="addoperators">
                <div class="col-lg-8 col-xs-12">
                  <div class="row">
                    <div class="col-lg-6 col-xs-12 mb-4">
                      <b class="p-15">Full Name</b>
                      <br />
                      <small class="l-12">First and Last Name of BDC Operator</small>
                    </div>
                    <div class="col-lg-6 col-xs-12 mb-4">
                      <label for class="pl-14">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        v-model="user.name"
                        class="lightform form-control"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div class="col-lg-6 col-xs-12 mb-4">
                      <b class="p-15">Type of Institution</b>
                      <br />
                      <small class="l-12">Institution type od BDC operator</small>
                    </div>
                    <div class="col-lg-6 col-xs-12 mb-4">
                      <label for class="pl-14">Type of Institution</label>
                      <br />
                      <select
                        name="typeOfInstitution"
                        v-model="user.typeOfInstitution"
                        class="lightform form-control"
                      >
                        <option value="Bureau de change">Bureau de change</option>
                        <option value="Bank">Bank</option>
                      </select>
                    </div>
                    <div class="col-lg-6 col-xs-12 mb-4">
                      <b class="p-15">Date Registered</b>
                      <br />
                      <small class="l-12">Date of Registration</small>
                    </div>
                    <div class="col-lg-6 col-xs-12 mb-4">
                      <label for class="pl-14">Date</label>
                      <input
                        type="date"
                        name="dateRegistered"
                        v-model="user.dateRegistered"
                        class="lightform form-control"
                        placeholder="mm / dd / yyyy"
                        required
                      />
                    </div>
                    <div class="col-lg-6 col-xs-12 mb-4">
                      <b class="p-15">Street Address</b>
                      <br />
                      <small class="l-12">Address, City and Country of operation</small>
                    </div>
                    <div class="col-lg-6 col-xs-12 mb-4">
                      <label for class="pl-14">Street Address</label>
                      <input
                        type="text"
                        name="streetAddress"
                        v-model="user.streetAddress"
                        class="lightform form-control"
                        placeholder="47 Ignacio Ramp Apt. 631"
                      />
                      <label for class="pl-14">Area</label>
                      <input
                        type="text"
                        name="area"
                        v-model="user.area"
                        class="lightform form-control"
                        placeholder="Portharcourt"
                      />
                      <label for class="pl-14">State</label>
                      <input
                        type="text"
                        name="state"
                        v-model="user.state"
                        class="lightform form-control"
                        placeholder="Lagos State"
                      />
                      <label for class="pl-14">Country</label>
                      <input
                        type="text"
                        name="country"
                        v-model="user.country"
                        class="lightform form-control"
                        placeholder="Nigeria"
                      />
                    </div>
                    <div class="col-lg-6 col-xs-12 mb-4">
                      <b class="p-15">Telephone</b>
                      <br />
                      <small class="l-12">Current phone number of BDC operator</small>
                    </div>
                    <div class="col-lg-6 col-xs-12 mb-4">
                      <label for class="pl-14">Telephone</label>
                      <div class="input-group lightform">
                        <div class="input-group-prepend pt-2 p-14 pl-3">234</div>
                        <input
                          type="text"
                          name="telephone"
                          v-model="user.telephone"
                          class="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-xs-12 mb-4">
                      <b class="p-15">Email</b>
                      <br />
                      <small class="l-12">Email address of BDC operator</small>
                    </div>
                    <div class="col-lg-6 col-xs-12 mb-4">
                      <label for class="pl-14">Email</label>
                      <input
                        type="text"
                        name="email"
                        v-model="user.email"
                        class="lightform form-control"
                        required
                      />
                    </div>

                    <div class="col-lg-6 col-xs-12 mb-5">
                      <b class="p-15">Ownership</b>
                      <br />
                      <small class="l-12">Select ownership type</small>
                    </div>
                    <div class="col-lg-6 col-xs-12 mb-5">
                      <label for class="pl-14">Ownership Type</label>
                      <select
                        name="ownershipType"
                        v-model="user.ownershipType"
                        class="lightform form-control"
                      >
                        <option value="Domestic">Domestic</option>
                        <option value="Corporate">Corporate</option>
                      </select>
                    </div>
                    <div class="col-lg-6 col-xs-12 mb-4">
                      <b class="p-15">Date of License</b>
                      <br />
                      <small class="l-12">Date of License</small>
                    </div>
                    <div class="col-lg-6 col-xs-12 mb-4">
                      <label for class="pl-14">Date</label>
                      <input
                        type="date"
                        name="dateLicensed"
                        v-model="user.dateLicensed"
                        class="lightform form-control"
                        placeholder="mm / dd / yyyy"
                        required
                      />
                    </div>
                    <div class="col-lg-6 col-xs-12"></div>
                    <div class="col-lg-6 col-xs-12">
                      <button class="btn btn-green px-5" @click="create">Create Operator</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content p-5">
                <h1 class="p-20">Edit Operator</h1>
                <hr />
                <label for class="p-14">Full Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  class="lightform form-control mb-4"
                  name="name"
                  v-model="operator.name"
                />
                <label for class="p-14">Type of Institution</label>
                <select class="lightform form-control mb-4" v-model="operator.typeOfInstitution">
                  <option value>Bank</option>
                  <option value>Bureau De Change</option>
                </select>

                <label for class="p-14">Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  class="lightform form-control mb-4"
                  name="streetAddress"
                  v-model="operator.streetAddress"
                />
                <label for class="p-14">Telephone</label>
                <input
                  type="tel"
                  placeholder="Telephone"
                  class="lightform form-control mb-4"
                  name="telephone"
                  v-model="operator.telephone"
                />
                <!-- <label for class="pl-14">Date</label>
                <input
                  type="date"
                  name="dateLicensed" 
                  v-model="operator.dateLicensed"
                  class="lightform form-control mb-4"
                  placeholder="mm / dd / yyyy"
                  required
                />-->
                <button
                  class="btn btn-green px-4"
                  data-dismiss="modal"
                  @click="updateOperator(operator._id)"
                >Update Operator</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const API_URL = `https://naija-bdc.herokuapp.com/api/operators/`;

import axios from "axios";
import Vue from "vue";
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/index.css';
Vue.use(VueToast);

export default {
  data() {
    return {
      user: {
        _id: "",
        name: "",
        typeOfInstitution: "",
        dateRegistered: "",
        streetAddress: "",
        area: "",
        state: "",
        telephone: "",
        email: "",
        country: "",
        ownershipType: "",
        dateLicensed: ""
      },
      operators: [],
      operator: {},
      searchQ: "",
      index: Number,
      page: 1,
      perPage: 100,
      pages: []
    };
  },

  methods: {
    async create() {
      try {
        let userDet = {
          name: this.user.name,
          typeOfInstitution: this.user.typeOfInstitution,
          streetAddress: this.user.streetAddress,
          area: this.user.area,
          state: this.user.state,
          telephone: this.user.telephone,
          email: this.user.email,
          country: this.user.country,
          ownershipType: this.user.ownershipType,
          dateLicensed: this.user.dateLicensed
        };

        if(userDet.name !="" && userDet.typeOfInstitution !="" && userDet.streetAddress !="" && userDet.area !="" && userDet.state !=""  && userDet.telephone!="" && userDet.email !="" && userDet.country !="" && userDet.ownershipType !="" && userDet.dateLicensed !=""  ){
          console.log(userDet)
          await axios
          .post(API_URL + `addoperator`, userDet)
          .then(res => res.data);
            Vue.$toast.success(' Bdc Operator Successfully Saved', {
                  // optional options Object
                  position: 'top',
                  duration:3000,
                  dismissible:true
              })    
          window.location.reload();
        }

        else{
          Vue.$toast.error(' Please fill in all fields', {
                  // optional options Object
                  position: 'top',
                  duration:3000,
                  dismissible:true
              })    
        }

        
      } catch (error) {
        throw error;
      }
    },

   async getData() {
      const API_URL = "https://naija-bdc.herokuapp.com/api/operators/operators";
      await axios
        .get(API_URL)
        .then(response => {
          this.operators = response;
          this.operators = this.operators.data.message;
        })
        .catch(err => {
          console.log(err);
        });
    },

    async getOperatorById(_id) {
      console.log("get ops id", _id);
      const api_url = "https://naija-bdc.herokuapp.com/api/operators/operator/";
      await axios
        .get(api_url + `${_id}`)
        .then(data => {
          console.log("resp", data);
          this.operator = data.data.operator;
          // console.log('ops', this.operator);
        })
        .catch(error => {
          console.log(error);
        });
    },

    async updateOperator(_id) {
      console.log("operatoe id in update", _id);
      const api_url = "https://naija-bdc.herokuapp.com/api/operators/operator/";
      try {
        let opsUpdate = {
          _id: this.operator._id,
          name: this.operator.name,
          typeOfInstitution: this.operator.typeOfInstitution,
          streetAddress: this.operator.streetAddress,
          telephone: this.operator.telephone
        };

        await axios.put(api_url + `${_id}`, opsUpdate).then(res => res.data);
        alert("Updated BDC operator");
        console.log("update operator", opsUpdate);
        window.location.reload();
      } catch (error) {
        throw error;
      }
    },

    async removeById(_id) {
      console.log("operator id in remove", _id);
      const api_url = "https://naija-bdc.herokuapp.com/api/operators/operator/";
      try {
        let opsDelete = {
          id: this.operator._id
        };

        await axios.delete(api_url + `${_id}`, opsDelete).then(res => res.data);
        alert("You will lose BDC operator details if deleted!");
        window.location.reload();
      } catch (error) {
        throw error;
      }
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
    }
  },
  computed: {
    displayedOperators() {
      if (this.searchQ) {
        return this.operators.filter(item => {
          return item.name.startsWith(this.searchQ);
        });
      } else {
        return this.paginate(this.operators);
      }
    }
  },
  watch: {
    operators() {
      this.setPages();
    }
  },
  created() {
    this.getData();
  }
};
</script>
<style>
</style>