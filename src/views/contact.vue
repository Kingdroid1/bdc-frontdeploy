<template>
  <div>
    
    <div class="about" style="margin-top: +60px;">
      <div class="top-head">
        <div class="container py-5">
          <p class="w-48 pt-5">Contact Us</p>
          <div class="d-flex row px-2">
            <a href="#" class="py-2 px-3">
              <i class="fab fa-facebook-f" style="color: #fff;"></i>
            </a>
            <a href="#" class="py-2 px-3">
              <i class="fab fa-twitter" style="color: #fff;"></i>
            </a>
            <a href="#" class="py-2 px-3">
              <i class="fab fa-google-plus-g" style="color: #fff;"></i>
            </a>
            <a href="#" class="py-2 px-3">
              <i class="fab fa-instagram" style="color: #fff;"></i>
            </a>
            <a href="#" class="py-2 px-3 w-14">
              <img src="../../public/img/youtube.svg" alt />
            </a>
          </div>
        </div>
      </div>
      <section id="contact" class="py-5">
        <div class="container">
          <div class="">
            <div class="row">
              <div class="col-lg-5 col-xs-12">
                <div class="row">
                  <div class="col-2 pr-0"></div>
                  <div class="col-10 pl-0">
                    <p class="g-24">OUR OFFICE</p>
                  </div>
                  <div class="col-2 mb-3"></div>
                  <div class="col-10 pl-0 mb-3">
                    <b>
                      <u class="p-14">ABCON NATIONAL SECRETARIAT</u>
                    </b>
                  </div>
                  <div class="col-2 pr-0">
                    <i class="fas fa-map-marker-alt" style="color: #008752;font-size: 18px;"></i>
                  </div>
                  <div class="col-10 pl-0">
                    <p class="p-14">
                      4, Oluwaleyimu Street
                      <br />P.O.Box 15750, Ikeja
                      <br />Lagos-Nigeria
                    </p>
                  </div>
                  <div class="col-2 pr-0 mb-5">
                    <i class="fas fa-phone-alt" style="color: #008752;font-size: 18px;"></i>
                  </div>
                  <div class="col-10 pl-0 mb-5">
                    <p class="p-14">
                      08023202255, 08138430600, 07084009851,
                      <br />08034612197, 08088981824
                    </p>
                  </div>
            
                  <div class="col-2 pr-0 mb-3"></div>
                  <div class="col-10 pl-0 mb-3">
                    <b>
                      <u class="p-14">ABCON NATIONAL SECRETARIAT</u>
                    </b>
                  </div>
                  <div class="col-2 pr-0">
                    <i class="fas fa-map-marker-alt" style="color: #008752;font-size: 18px;"></i>
                  </div>
                  <div class="col-10 pl-0">
                    <p class="p-14">
                      Suite 307A Samfa Plaza,<br/>
                      Opp.Old Corporate Affairs Commission<br/>
                      (CAC) Office,Zone 5,Wuse Abuja
                    </p>
                  </div>
                  <div class="col-2 pr-0 mb-5">
                    <i class="fas fa-phone-alt" style="color: #008752;font-size: 18px;"></i>
                  </div>
                  <div class="col-10 pl-0 mb-5">
                    <p class="p-14">
                      08030745636, 08038454484
                    </p>
                    <p class="p-14">
                      email info@abcon.org.ng
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-xs-12 ">
                <div class="rectangle-1">
                  <form action="" @submit.prevent="sendMessage">
                    <p class="p-20 mb-4">GET IN TOUCH WITH US.</p>
                  <label for class="p-15">
                    <b>First Name</b>
                  </label>
                  <input type="text" name="firstname" v-model="contact.firstname" class="light form-control mb-3" placeholder="Your First Name" required />
                  <label for class="p-15">
                    <b>Last Name</b>
                  </label>
                  <input type="text" name="lastname" v-model="contact.lastname" class="light form-control mb-3" placeholder="Your Last Name" />
                  <label for class="p-15">
                    <b>Email</b>
                  </label>
                  <input type="email" name="email" v-model="contact.email" class="light form-control mb-3" placeholder="youremail@abc.com" required />
                  <label for class="p-15">
                    <b>Subject</b>
                  </label>
                  <input type="text" name="subject" v-model="contact.subject" class="light form-control mb-3" placeholder="John" />
                  <label for class="p-15">
                    <b>Message</b>
                  </label>
                  <textarea name="message" v-model="contact.message" id cols="10" rows="5" class="light form-control mb-4"></textarea>
                  <p class="text-right">
                    <button class="btn btn-green px-4" >SEND MESSAGE</button>
                  </p></form>
                  
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
// import { UserService } from '../services/userservices';

// const userService = new UserService();
const API_URL = `https://naija-bdc.herokuapp.com/api/`;

import Vue from 'vue';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/index.css';
Vue.use(VueToast);

import axios from "axios";


export default {
  data() {
    return {
      contact: {
        firstname:"",
        lastname:"",
        email:"",
        subject:"",
        message:""
      }
    }
  },
  methods: {
   async sendMessage() {
      let contacts = {
        firstname: this.contact.firstname,
        lastname: this.contact.lastname,
        email: this.contact.email,
        subject: this.contact.subject,
        message: this.contact.message
      }

      if(contacts.firstname !="" && contacts.lastname !="" && contacts.email !="" && contacts.subject !="" && contacts.message !="" ){
        await axios.post(API_URL + `contacts`, contacts)
        .then(contacts => {
          console.log("Posted contacts", contacts)
            if (contacts.data.status === true) {
              Vue.$toast.success('Message sent successfully', {
                position: 'top',
                duration:5000,
                dismissible: true
              })
              this.$router.push({name: "contact"});
            }
            else {
              Vue.$toast.error('Something went wrong,Please try again', {
                        // optional options Object
                        position: 'top',
                        duration:5000,
                        dismissible:true
                      })
            } 
          })
      }
      else {
            Vue.$toast.error('Please fill all fields', {
                      // optional options Object
                      position: 'top',
                      duration:5000,
                      dismissible:true
                    })
          } 
     
    
    }
  },
};
</script>
<style>
</style>