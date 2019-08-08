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
              <h2 class="p-32 mt-4">Forogt your password?</h2>
              <p class="p-20">Please enter your email in the form below.</p>
              <form class="ui form">
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
                </div>
                
                    <button class="btn btn-green px-5 mt-5 w-100">Reset My Password</button>
                
                <small>
                    Did you remember your password ? <a href="#" class="g-15">Login</a>
                </small>
              </form>
            </div>
          </div>
          <!-- <div id="sign-in"></div> -->
        </div>
        <div class="col-lg-5 col-xs-12"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  
};
</script>