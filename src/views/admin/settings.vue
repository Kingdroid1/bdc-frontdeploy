// eslint-disable
<template>
  <div class="addmin py-5" v-if="isLoggedIn">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-lg-10">
          <h1 class="p-24">Settings</h1>
        </div>
        <div class="col-xs-12 col-lg-2">
          <button
            class="btn btn-green w-100"
            data-toggle="modal"
            data-target="#exampleModal"
          >Add User</button>
        </div>
        <div class="col-12">
          <ul class="nav nav-tabs ad_tabs" role="tablist">
            <li class="nav-item pr-3">
              <a
                class="nav-link active"
                href="#usermanagement"
                role="tab"
                data-toggle="tab"
              >User Management</a>
            </li>
            <li class="nav-item pr-3">
              <a class="nav-link" href="#settings" role="tab" data-toggle="tab">Settings</a>
            </li>
          </ul>
        </div>
        <div class="col-12">
          <div class="ad_rectangle">
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="usermanagement">
                <div class="row">
                  <div class="col-12">
                    <!-- <span v-if="isLoggedIn">  <a @click="logout">Logout</a></span>
                    <span v-else> | <router-link to="/login">Login</router-link></span>-->
                    <h5 class="g-17">User Management</h5>
                    <hr />
                  </div>
                  <div class="col-12">
                    <div class="table-responsive-md">
                      <table class="table table-striped ad_table">
                        <thead>
                          <th>FULL NAME</th>
                          <th>EMAIL ADDRESS</th>
                          <th>ROLE</th>
                          <th>STATUS</th>
                          <th>ACTION</th>
                        </thead>
                        <tbody>
                          <tr v-for="user in users" v-bind:key="user.users">
                            <td>{{user.firstname}} {{user.lastname}}</td>
                            <td>{{user.email}}</td>
                            <td>{{user.role}}</td>
                            <td>Active</td>
                            <td>
                              <span
                                data-toggle="modal"
                                data-target="#exampleModalEdit"
                                @click="getUserId(user._id)"
                              >
                                <button
                                  class="btn btn-edit mr-lg-3"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Edit User"
                                >
                                  <i class="far fa-edit"></i>
                                </button>
                              </span>
                              <button
                                class="btn btn-delete"
                                @click="deleteUser(user._id)"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Delete User"
                              >
                                <i class="far fa-trash-alt"></i>
                              </button>
                              <!-- <a
                                style="color: rgba(37, 56, 88, 0.3);font-size: 18px;"
                                class="dropdown-toggle px-3"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i class="icon ion-md-more"></i>
                              </a>
                              <div class="dropdown-menu">
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#exampleModalEdit"
                                  @click="getUserId(user._id)"
                                >Edit</a>
                                
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  @click="deleteUser(user._id)"
                                >Delete</a>
                              </div> -->
                            </td>
                          </tr>
                          <!-- <tr>
                            <td>Samuel Ode</td>
                            <td>Ode@bdc.com</td>
                            <td>operator</td>
                            <td>Active</td>
                            <td>
                              <a style="color: rgba(37, 56, 88, 0.3);font-size: 18px;" class="dropdown-toggle px-3"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="icon ion-md-more"></i>
                              </a>
                              <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Edit</a>
                                <a class="dropdown-item" href="#">Delete</a>
                              </div>
                            </td>
                          </tr>-->
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="settings">
                <div class="row">
                  <div class="col-12">
                    <h5 class="g-17">Settings</h5>
                    <hr />
                  </div>
                  <div class="col-lg-8 col-xs-12">
                    <div class="row">
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <b class="p-15">Old Password</b>
                        <br />
                        <small class="l-12">Enter the current passord which you want to change</small>
                      </div>
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <label for class="pl-14">Old Password</label>
                        <input
                          type="text"
                          name="password"
                          v-model="user.password"
                          class="lightform form-control"
                          placeholder="Old Password"
                        />
                      </div>

                      <div class="col-lg-6 col-xs-12 mb-4">
                        <b class="p-15">New Password</b>
                        <br />
                        <small
                          class="l-12"
                        >Now enter a new password, Make sure this remains confidential</small>
                      </div>
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <label for class="pl-14">New Password</label>
                        <input
                          type="text"
                          name="newpassword"
                          v-model="user.newpassword"
                          class="lightform form-control"
                          placeholder="New Password"
                        />
                      </div>
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <b class="p-15">Confirm password</b>
                        <br />
                        <small class="l-12">Confirm the new password</small>
                      </div>
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <label for class="pl-14">Confirm password</label>
                        <input
                          type="text"
                          name="confirmpassword"
                          v-model="user.confirmpassword"
                          class="lightform form-control"
                          placeholder="Confirm Password"
                        />
                        <!-- <div vif ="nomatch">{{nomatch}} </div> -->
                      </div>
                      <div class="col-lg-6 col-xs-12"></div>
                      <div class="col-lg-6 col-xs-12">
                        <button class="btn btn-green px-5" @click="comparepassword">Submit Password</button>
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
          <h1 class="p-20">Add New User</h1>
          <hr />
          <label for class="p-14">First Name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            v-model="user.firstname"
            placeholder="First Name"
            class="lightform form-control mb-4"
          />
          <label for class="p-14">Last Name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            v-model="user.lastname"
            placeholder="Last Name"
            class="lightform form-control mb-4"
          />

          <label for class="p-14">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            v-model="user.email"
            placeholder="Email Address"
            class="lightform form-control mb-4"
          />
          <label for class="p-14">Location</label>
          <select v-model="user.location_id" class="lightform custom-select">
            <option
              v-for="location in locations"
              v-bind:value="location._id"
              v-bind:key="location"
            >{{ location.name }}</option>
          </select>
          <br />

          <label for="basic-dropdown" class="p-14">Role</label>
          <select name id v-model="user.role" class="lightform custom-select">
            <option
              v-for="role in roles"
              v-bind:key="role"
              class="lightform form-control mb-4"
            >{{ role }}</option>
          </select>
          <br />
          <button class="btn btn-green px-4" data-dismiss="modal" @click="adduser">Add User</button>
        </div>
      </div>
    </div>

    <!-- Another modal for Editing A User -->

    <div
      class="modal fade"
      id="exampleModalEdit"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content p-5">
          <h1 class="p-20">Edit User</h1>
          <hr />
          <label for class="p-14">First Name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            v-model="user.firstname"
            placeholder="First Name"
            class="lightform form-control mb-4"
          />
          <label for class="p-14">Last Name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            v-model="user.lastname"
            placeholder="Last Name"
            class="lightform form-control mb-4"
          />

          <label for class="p-14">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            v-model="user.email"
            placeholder="Email Address"
            class="lightform form-control mb-4"
          />
          <label for class="p-14">Location</label>
          <select v-model="user.location_id" class="lightform custom-select">
            <option
              v-for="location in locations"
              v-bind:value="location._id"
              v-bind:key="location"
            >{{ location.name }}</option>
          </select>
          <br />

          <label for="basic-dropdown" class="p-14">Role</label>
          <select name id v-model="user.role" class="lightform custom-select">
            <option
              v-for="(role, index) in roles"
              v-bind:key="index"
              class="lightform form-control mb-4"
            >{{ role }}</option>
          </select>
          <br />
          <button class="btn btn-green px-4" data-dismiss="modal" @click="editUser(user._id)">Update User</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { AuthService } from "../../services/authservice";
  import { RateService } from "../../services/rateservice";
  import { UserService } from "../../services/userservices";
  import axios from "axios";
  import { DataTable } from "v-datatable-light";
  import Vue from 'vue';
  import VueToast from 'vue-toast-notification';
  import 'vue-toast-notification/dist/index.css';

  let authservice = new AuthService();
  let rateService = new RateService();
  let userservice = new UserService();
  Vue.use(VueToast);

  export default {
    // name: Settings,
    data() {
      return {
        nomatch: "",
        locations: [],
        users: [],
        roles: ["admin", "operator"],
        user: {
          firstname: "",
          lastname: "",
          email: "",
          location_id: "",
          password: "",
          newpassword: "",
          confirmpassword: "",
          role: ""
        }
      };
    },
    components: {
      DataTable
    },
    computed: {
      // rows() {
      //   return this.items.length;
      // },
      isLoggedIn: function () {
        return this.$store.getters.isLoggedIn;
      },
      email() {
        return this.$store.getters.user.email;
      }
    },

    methods: {
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      async getLocations() {
        await rateService
          .getLocations()
          .then(data => {
            this.locations = data;
          })
          .catch(error => {
            console.log(error);
          });
      },

      async getUsers() {
        await userservice
          .getUsers()
          .then(data => {
            this.users = data.result;
          })
          .catch(error => {
            console.log(error);
          });
      },

      async comparepassword() {
        const password = this.user.password;

        await authservice.comparePassword(password).then(res => {
          res = res.data;

          if (res.status == true) {
               
                const password = this.user.password;
                const confirmpassword = this.user.confirmpassword;
                const newpassword = this.user.newpassword;

                if (newpassword == confirmpassword) {
                
                  authservice.updatePassword(newpassword).then(payload => {
                    console.log('pay',payload)
                    if (payload.data.status == true){
                      Vue.$toast.success('Password changed successfully', {
                      // optional options Object
                      position: 'top',
                      duration:5000,
                      dismissible:true
                    })
                     this.$router.push({ name: "login" });    
                    }
                    else{
                      Vue.$toast.error('Something went wrong, Please try again', {
                      // optional options Object
                      position: 'top',
                      duration:5000,
                      dismissible:true
                    })
                    }
             
                  });
                } 
                else {
                  Vue.$toast.error('Something went wrong, passwords do not match', {
                    // optional options Object
                    position: 'top',
                    duration:5000,
                    dismissible:true
                  })
                }
              
          } else {
            Vue.$toast.error('Incorrect existing password', {
                // optional options Object
                position: 'top',
                duration:5000,
                dismissible:true
              })
          }
        });
      },

    editUser(_id) {
      console.log("id from settings", _id)
      let userDet = {
        _id:this.user._id,
          firstname: this.user.firstname,
          lastname: this.user.lastname,
          email: this.user.email,
          location_id: this.user.location_id,
          role: this.user.role,
        }
        this.$store.dispatch("updateUser", userDet)
        .then(resp => {
          resp = resp.data.status;
              if (resp == true)
              {
                Vue.$toast.success('User details updated ', {
                      // optional options Object
                      position: 'top',
                      duration:5000,
                      dismissible:true
                })
                window.location.reload();
              }
              else {
                 Vue.$toast.error('Something went wrong,user not updated', {
                  // optional options Object
                  position: 'top',
                  duration:3000,
                  dismissible:true
                })
              }
        }).catch(error =>  
              Vue.$toast.error('Something went wrong', {
                // optional options Object
                position: 'top',
                duration:3000,
                dismissible:true
              }))
      },

     deleteUser(id) {
        axios.delete(`http://localhost:5000/api/users/${id}`)
        .then(result => {
          this.users.splice(this.users.indexOf(id), 1);
          Vue.$toast.success('User deleted', {
                // optional options Object
                position: 'top',
                duration:5000,
                dismissible:true
              })
          this.$router.push({name:'settings'})
    
        }).catch(err => 
              console.log("err", err),
              // Vue.$toast.error('Something went wrong', {
              //   // optional options Object
              //   position: 'top',
              //   duration:5000,
              //   dismissible:true
              // })
            )
      },


      adduser: function () {
        let data = {
          firstname: this.user.firstname,
          lastname: this.user.lastname,
          email: this.user.email,
          role: this.user.role,
          location_id: this.user.location_id
        };
        this.$store
          .dispatch("signup", data)
          .then(res =>{
             if(res.data.status==true){
               Vue.$toast.success('user added successfully', {
                // optional options Object
                position: 'top',
                duration:5000,
                dismissible:true
              })
              window.location.reload()
            }
            else{
              Vue.$toast.error('Please ensure all fields are correct', {
                // optional options Object
                position: 'top',
                duration:5000,
                dismissible:true
              })
              window.location.reload()
            }
          })
        // window.location.reload()
        .catch(err => console.log(err));
      },

      getUserId(_id) {
      this.$store
      .dispatch("getUserId", _id)
      .then(resp => {
        this.user = resp.user
      }).catch(error => console.log("error from new getuserId", error))
    },
    },

    mounted() {
      this.getLocations();
      this.getUsers();
      // this.editUser();
    }
  };
</script>
<style>
</style>