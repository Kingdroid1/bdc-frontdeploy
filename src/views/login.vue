<template>
  <div id="sign-in-1">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 col-xs-12 py-5">
          <div class="sign-in-container col-lg-4 m-auto py-lg-5 py-5">
            <div class="container px-lg-5">
              <!-- <p class="text-center"> 
                <a href="/">
                  <img src="../../public/img/toplogo.png" alt height="35px" />
                </a>
              </p> -->
              <h2 class="p-32 mt-4">Welcome</h2>
              <p class="p-20">Sign Into your Account</p>
              <form class="ui form" @submit.prevent="login">
                <label for class="p-15 mt-5">Email Address</label>
                <div class="input-group login ii">
                  <input
                    type="email"
                    name="email"
                    v-model="email"
                    class="form-control pr-5"
                    placeholder="Email"
                    required
                  />
                  <!-- <div class="input-group-append pt-2 px-2">
                    <i class="icon ion-ios-contact"></i>
                  </div>-->
                </div>
                <label for class="p-15 mt-4">Password</label>
                <div class="input-group login pp">
                  <input
                    type="password"
                    name="password"
                    v-model="password"
                    placeholder="***********"
                    class="form-control pr-5"
                    required
                  />
                  <!-- <div class="input-group-append pt-2 px-2">
                    <i class="fas fa-shield-alt"></i>
                  </div>-->
                </div>
                <a href="/forgot-password" class="g-15">I forgot my password</a>
                <br />
                <button class="btn btn-green px-5 mt-5">Login</button>
              </form>
            </div>
          </div>
          <!-- <div id="sign-in"></div> -->
        </div>

        <button class="fluid ui primary button">LOG IN</button>

        <div class="ui hidden divider"></div>
        
        <div class="col-lg-5 col-xs-12"></div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      // user:{},
      email: "",
      password: ""
    };
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    login: function() {
      let email = this.email;
      let password = this.password;
      // let user = this.user;
      this.$store.dispatch('login', {email, password})
      .then((response) => {
        console.log('respons.......', response)
        this.$router.push('/admin', {params:{user: response.user}})
        })
      .catch(err => console.log(err))
    },
    }
  };

</script>