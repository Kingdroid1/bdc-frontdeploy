<template>
  <div>
    <nav class="fixed-top">
      <div class="topnav">
        <div class="container py-1">
          <div class="d-flex row pl-3">
            <router-link to="/" class="navbar-brand">
              <img src="../../public/img/toplogo.png" height="32px;" alt />
            </router-link>
            <ul class="list-unstyled d-flex ml-lg-auto justify-content-between">
              <!-- <li class="nav-item px-5 pt-3">
                <a class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="far fa-bell" style="font-size: 18px;"></i>
                  <span class="badge badge-pill badge-danger">5</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-right px-2 shadow mt-2 border-none">
                  <li>
                    <div class="d-flex flex-row justify-content-between" style="height:18px;">
                      <p class="p-15">APP NOTIFICATION</p>
                      <a href class="badge badge-note l-12">VIEW ALL</a>
                    </div>
                  </li>
                  <li class="dropdown-divider"></li>
                  <li class="notify">
                    <a href="#" class="top-text-block">
                      <div class="p-14">
                        You have
                        <b>3 new themes</b> trending
                      </div>
                      <div class="l-12">15 minutes ago</div>
                    </a>
                  </li>
                  <li class="dropdown-divider"></li>
                  <li class="notify">
                    <a href="#" class="top-text-block">
                      <div class="p-14">
                        New asset recommendations in
                        <b>Gaming Laptop</b>
                      </div>
                      <small class="l-12">2 hours ago</small>
                    </a>
                  </li>
                  <li class="dropdown-divider"></li>
                  <li class="notify">
                    <a href="#" class="top-text-block">
                      
                      <small class="l-12">4 hours ago</small>
                    </a>
                  </li>
                  <li class="dropdown-divider"></li>
                  <li class="notify">
                    <a href="#" class="top-text-block">
                      <div class="p-14">Assets specifications modified in themes</div>
                      <small class="l-12">4 hours ago</small>                      
                    </a>
                  </li>
                </ul>
              </li> -->
              <li class="nav-item px-2 text-right" v-if="!isLoggedIn">
                <b class="p-15">{{name}} {{last}}</b>
                <br />
                <small class="l-12">BDC {{role}}</small>
              </li>
              <li class="nav-item">
                <div class="dropdown">
                  <button
                    class="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fas fa-chevron-down"></i>
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item l-12" href="#" @click="logout">Logout</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <nav class="navbar-expand-md navbar-dark">
        <div class="greennav">
          <div class="container py-2">
            <button class="navbar-toggler" data-toggle="collapse" data-target="#naijanav">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="naijanav">
              <ul class="navbar-nav d-flex justify-content-between w-100">
                <li
                  class="nav-item pr-lg-4 mr-lg-2"
                  :class="{'active': $route.path == '/admin/newrate'}"
                >
                  <router-link to="/operator" class="nav-link">
                    <img src="../../public/img/rate.svg" alt class="aa" />
                    <img src="../../public/img/rate-w.svg" alt class="bb" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;New Input Rate
                  </router-link>
                </li>
                <li
                  class="nav-item px-lg-5"
                  :class="{'active': $route.path == '/admin/previousrate'}"
                >
                  <router-link to="/operator/previousrate" class="nav-link">
                    <img src="../../public/img/ratte.svg" alt class="aa" />
                    <img src="../../public/img/ratte-w.svg" alt class="bb" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Previous Rate
                  </router-link>
                </li>
                <li
                  class="nav-item pl-lg-4 ml-lg-2"
                  :class="{'active': $route.path == '/operator/settings'}"
                >
                  <router-link to="/operator/settings" class="nav-link">
                    <img src="../../public/img/settings.svg" alt class="aa" />
                    <img src="../../public/img/settings-w.svg" alt class="bb" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Settings
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    // name;
    // last;
    return {
//  user: {},
    name:"",
    last:"",
    role:"",
    isLoggedIn: false
    }
  },
  methods: {
    
    logout: function() {
          this.$store.dispatch("logout").then(() => {
            this.$router.push({ name: 'login' });
          });
        },
        async getUserId() {
          this.name = localStorage.user;
          this.last = localStorage.last;
          this.role = localStorage.role;
        }
  },
  mounted()  {
    this.getUserId()
  }
};
</script>
<style>
</style>