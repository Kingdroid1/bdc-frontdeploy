<template>
  <div>
    
    <div class="about" style="margin-top: +60px;">
      <div class="top-head">
        <div class="container py-5">
          <p class="w-48 pt-5">Latest News</p>
          <b class="w-1p">Home&nbsp;&nbsp;</b>
          <b class="p-17">/&nbsp;&nbsp;News</b>
        </div>
      </div>
    
      <section id="latest">
        <div class="container py-5">
          
          <div class="row">
            <div v-for="post in newsPosts" :post="post" :key="post.items_id" class="col-lg-4 col-xs-12 py-lg-5 py-xs-1">
              <div class="card">
                <figure>  
                  <img v-bind:src="post.featured_image_url" class="card-img-top" />
                </figure>
                <div class="px-0 card-body pb-1">
                  <div class="card-title p-18">
                    <b>{{ post.title }}</b>
                    <br />
                    <!-- <small class="p-14" style="color: #979797;">{{ post.createdAt }}</small> -->
                  </div>
                  <div class="p-14">
                    <input type="checkbox" class="read-more-state" id="post-1" />
    
                    <p class="read-more-wrap">
                      {{ post.content }}
                      <span
                        class="read-more-target"
                      >
                        {{ post.content }}
                      </span>
                    </p>
    
                    <label for="post-1" class="read-more-trigger"></label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section id="signup">
        <div class="container mt-5">
          <div class="row">
            <div class="col-lg-4 col-xs-12 py-4">
              <p class="p-17">Sign up for daily parallel market FX rates</p>
              <p class="w-14">We’ll not spam you. Promise!</p>
              <input type="email" class="g form-control mb-3" placeholder="yourmail@email.com" />
              <button class="btn btn-green">Send Me Rates</button>
            </div>
            <div class="col-lg-4 col-xs-12 py-4">
              <p class="p-17">Contact Us</p>
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
                <img src="../../public/img/tech (2).jpg" class="mx-2" style="height: 30px;" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data (){
    return {
      newsPosts: []
    }
  },
  methods: {
    async getNewsData() {
      const API_URL = "http://localhost:5000/api/news";

    await axios.get(API_URL).then(post => {
        this.newsPosts = post;
        this.newsPosts = this.newsPosts.data.message;
      }).catch(err => {
        throw err
      })
    }
  },
  mounted() {
    this.getNewsData();
    }
};
</script>
<style>
</style>