
<template>
  <div class="addmin py-5">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-lg-10">
          <h1 class="p-24">Settings</h1>
        </div>

        </div>
        <div class="col-12">
          <ul class="nav nav-tabs ad_tabs" role="tablist">
            <li class="nav-item pr-3">
              <a class="nav-link active" href="#settings" role="tab" data-toggle="tab">Settings</a>
            </li>
          </ul>
        </div>
        <div class="col-12">
          <div class="ad_rectangle">
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="settings">
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
                        <input type="text" name ="password" v-model="user.password" class="lightform form-control" placeholder="Old Password"/>
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
                        <input type="text" name ="newpassword" v-model="user.newpassword" class="lightform form-control" placeholder="New Password"/>
                      </div>
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <b class="p-15">Confirm password</b>
                        <br />
                        <small class="l-12">Confirm the new password</small>
                      </div>
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <label for class="pl-14">Confirm password</label>
                        <input type="text" name="confirmpassword" v-model="user.confirmpassword" class="lightform form-control" placeholder="Confirm Password"/>
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
</template>
<script>
  import { AuthService } from "../../services/authservice"
  import Vue from 'vue';
  import VueToast from 'vue-toast-notification';
  import 'vue-toast-notification/dist/index.css';

  let authservice = new AuthService()
  Vue.use(VueToast);

  export default {
    data() {
      return {
        user: {
          password: "",
          newpassword:"",
          confirmpassword:""
        },
      }
    },

    methods: {
      async changePassword() {
        
        try {
          let passwordDetails = {
            password: this.user.password,
            newpassword: this.user.newpassword,
            confirmpassword: this.user.confirmpassword
          }
          await authservice.createPassword(passwordDetails).then((payload) => {
            this.password = this.newPassword = this.confirmPassword = ''
            this.$router.push({name: 'password'})
          })
        } catch(error){
          throw error;
        }
      },

      async comparepassword() {
        const password = this.user.password;

        await authservice.comparePassword(password).then(res => {
          res = res.data;
          console.log('dd',res);

          if (res.status == true) {
               
                const password = this.user.password;
                const confirmpassword = this.user.confirmpassword;
                const newpassword = this.user.newpassword;

                if ( newpassword !="" && confirmpassword !="" &&  (newpassword == confirmpassword)) {
                
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

      // async comparepassword() {
      //   const password = this.user.password;

      //   await authservice.comparePassword(password).then(res => {
      //     res = res.data;

      //     if (res.status == true) {
               
      //           const password = this.user.password;
      //           const confirmpassword = this.user.confirmpassword;
      //           const newpassword = this.user.newpassword;

      //           if (newpassword == confirmpassword) {
                
      //             authservice.updatePassword(newpassword).then(payload => {
      //               console.log('pay',payload)
      //               if (payload.data.status == true){
      //                 Vue.$toast.success('Password changed successfully', {
      //                 // optional options Object
      //                 position: 'top',
      //                 duration:5000,
      //                 dismissible:true
      //               })
      //                this.$router.push({ name: "login" });    
      //               }
      //               else{
      //                 Vue.$toast.error('Something went wrong, Please try again', {
      //                 // optional options Object
      //                 position: 'top',
      //                 duration:5000,
      //                 dismissible:true
      //               })
      //               }
             
      //             });
      //           } 
      //           else {
      //             Vue.$toast.error('Something went wrong, passwords do not match', {
      //               // optional options Object
      //               position: 'top',
      //               duration:5000,
      //               dismissible:true
      //             })
      //           }
              
      //     } else {
      //       Vue.$toast.error('Incorrect existing password', {
      //           // optional options Object
      //           position: 'top',
      //           duration:5000,
      //           dismissible:true
      //         })
      //     }
      //   });
      // },
    }
  }
</script>
<style>
</style>