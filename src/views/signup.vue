<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-7 col-xs-12 px-0 d-none d-md-block">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li
                style=" width: 58px; height: 10px;border-radius: 6px;background-color: #008752; border: none;"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div id="sign-in"></div>
              </div>
              <div class="carousel-item">
                <div id="sign-in-1"></div>
              </div>
            </div>
          </div>
          <!-- <div id="sign-in"></div> -->
        </div>
        <div class="col-lg-5 col-xs-12 px-0">
          <div class="sign-in-container h-100 py-5 px-lg-5 px-xs-2">
            <div class="container px-lg-5">
              <h2 class="p-32">Welcome</h2>
              <p class="p-24">Sign Up to Create Your Account</p>
              <form class="ui form" @submit.prevent="signup">
                <label for class="p-15 mt-4">Email Address</label>
                <div class="input-group login ii">
                  <input type="email" name="email" v-model="email" placeholder="Email" class="form-control" required />
                  
                </div>
                <label for class="p-15 mt-4">New Password</label>
                <div class="input-group login">
                  <input
                    type="password"
                    name="password"
                    v-model="password"
                    placeholder="Password"
                    class="form-control"
                    required
                  />
                  
                </div>

                <label for class="p-15 mt-4">Confirm Password</label>
                <div class="input-group login pp">
                  <input
                    type="password"
                    name="password"
                    v-model="password_confirmation"
                    placeholder="Password"
                    class="form-control"
                    required
                  />
                  
                </div>
                <br />
                <button class="btn btn-green px-5 mt-5">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { AuthService } from '../services/authservice';

  const authservice = new AuthService();


  export default {
    data() {
      return {        
        email: "",
        password: "",
        password_confirmation: ""
      }
    },
    methods: {
      signup() {

        if (this.password == this.password_confirmation && this.password.length > 0) {
            
          let user = {
            email: this.email,
            password: this.password,
            // returnSecureToken:true
          }

          authservice.signup(user)
            .then( response => {
              this.$router.push("/login");
            })
            .catch(error => {
              console.error(error.message);
            })
         this.$store.dispatch('CreatePassword', user).then(() => this.$router.push("/login")).catch(err => console.log(err));
        }  else {
          this.password = "";
          this.password_confirmation = "";
          this.email = "";

          return alert("Passwords do not match")
        }
      }
    }
  }
</script>

