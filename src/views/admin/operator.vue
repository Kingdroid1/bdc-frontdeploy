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
              <form>
              <div class="input-group operator">
                <div class="input-group-prepend px-2 pt-1">
                  <i class="icon ion-ios-search"></i>
                </div>
                <input type="text" class="form-control" placeholder="Search Operators" />
              </div>
              </form>
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
                    </thead>
                    <tbody>
                      <tr v-for="(operator, index) in operators" v-bind:key="operator._id">
                        <td>{{operator.name}}</td>
                        <td>{{operator.typeOfInstitution}}</td>
                        <td>{{operator.addressRegistered}}</td>
                        <td>{{operator.telephone}}</td>
                        <td>{{operator.dateRegistered}}</td>
                      
                        <td>
                          View &nbsp;&nbsp;
                          <a
                            style="color: rgba(37, 56, 88, 0.3);font-size: 18px;"
                            class="dropdown-toggle px-3"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="icon ion-md-more"></i>
                          </a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Deactivate</a>
                            <a class="dropdown-item" href="#">Edit</a>
                            <a class="dropdown-item" @click="remove(index)">Delete</a>
                          </div>
                        </td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
                <!-- <p class="text-center">
                  <paginate name="operators" ></paginate>
                </p> -->
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
                      <label for class="pl-14">Area</label>
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
      </div>
    </div>
  </div>
</template>

<script>
import { AuthService } from '../../services/authservice';

  const authservice = new AuthService();

  const API_URL = `https://naija-bdc.herokuapp.com/api/`

import axios from "axios";

export default {
  
  data() {
    return {
      user: {
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
      operators: []
      // searchQ: ''
    };
   },
  mounted() {
   this.getData();
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

        await axios.post(API_URL + `addoperator`, userDet).then(res => res.data);
        alert('Added BDC operator');
        window.location.reload();
      } catch (error) {
        throw error;
      }
    },

    getData() {
      const API_URL = 'https://naija-bdc.herokuapp.com/api/operators';
      axios.get(API_URL)
       .then(response => {
         this.operators = response;
         this.operators = this.operators.data.message;
        //  this.operators = this.operators.data.message.filter((operator) => {
        //   return operator.name.match(this.searchQ);
        //   });
        console.log('from server --->', this.operators); //log response from server
      }).catch(err => {
        console.log(err);
      });
    },

    remove(operators, id) {
      
      axios.delete('https://naija-bdc.herokuapp.com/api/operator' + id).then(response => this.operators.splice(index, 1));
    
      window.location.reload();
    
    },

    // edit(operators, id) {
    //  axios.put('http://localhost:5000/api/operator' + id).then(response => this.operators);
    
    //   window.location.reload();
    // }
    // computed: {
    //   filteredOperators: function() {
    //     return this.operators.filter((operator) => {
    //       return operator.name.match(this.searchQ);
    //     });
    //   }
    // }
    // nextPage(){
    //   this.pageNumber++;
    // },
    // prevPage(){
    //   this.pageNumber--;
    // }
    // clickCallback (pageNum){
    //   console.log(pageNum)
    // }
  },
  //  this.remove(){}
  //  this.edit();
  // computed: {
  //   pageCount(){
  //     let l = thisData.length,
  //     s = this.size;
  //     return Math.ceil(l/s);
  //   },
  //   paginatedData(){
  //     const start = this.pageNumber * this.size, 
  //     end = start + this.size;
  //     return this.listData.slice(start, end);
  //   }
  // }

  }
 //}
</script>
<style> </style>