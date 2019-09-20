<template>
  <div class="addmin py-5">
    <div class="container">
      <div class="ad_rectangle">
        <div class="row">
          <div class="col-lg-10 col-xs-12">
            <h1 class="p-24">Advert Management</h1>
          </div>
          <div class="col-lg-2 col-xs-12 ">
            <!-- <button class="ml-auto btn btn-white w-100">Bulk Upload</button> -->
          </div>
          <div class="col-12">
            <hr />
          </div>

        <CreateAdvert
          title="Landing Position"
          description="This controls all adverts on the home / landing page"
          type="LANDING"/>

        <CreateAdvert
          title="Left Adverts"
          description="This controls all adverts on the home / landing page"
          type="LEFT"/>
        
        <CreateAdvert
          title="Right Adverts"
          description="This controls all adverts on the home / landing page"
          type="RIGHT"/>

        <CreateAdvert
          title="Bottom Position"
          description="This controls all adverts on the home / landing page"
          type="BASE"/>
          

          <!-- Advert Section for Home Page    -->
          <div class="col-12 mb-3">
            <b class="p-15">About Us Page</b>
            <br />
            <small class="l-12">This controls all adverts on the About us page</small>
          </div>
          <div class="col-12">
            <div class="ad_greyrec">
              <div class="row">
                <div class="col-lg-8 col-xs-12">
                  <div class="row">
                    <div class="col-lg-6 col-xs-12 mb-4">
                      <b class="p-15">Upload Image</b>
                      <br />
                      <small class="l-12">
                        Image must be a .png or .jpeg file of
                        the dimensions 262px * 250px
                      </small>
                    </div>
                    <div class="col-lg-6 col-xs-12 mb-4">
                      <label for class="pl-14">Upload Banner</label>
                      <input type="file" class="lightform form-control" />
                    </div>

                    <div class="col-lg-6 col-xs-12 mb-4">
                      <b class="p-15">Target URL</b>
                      <br />
                      <small class="l-12">
                        This refers to the target website you
                        want potential users to visit when the link
                        is clicked
                      </small>
                    </div>
                    <div class="col-lg-6 col-xs-12 mb-4">
                      <label for class="pl-14">Target URL</label>
                      <input type="text" class="lightform form-control" />
                    </div>
                    <div class="col-lg-6 col-xs-12"></div>
                    <div class="col-lg-6 col-xs-12">
                      <button class="btn btn-green px-5">Save</button>
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
// import axios from 'axios'
import axios from 'axios'
import { AdvertService } from '../../services/advertservice';
import CreateAdvert from '../../components/CreateAdvert';
import Vue from "vue";
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/index.css';
import PictureInput from 'vue-picture-input' 

Vue.use(VueToast);
const advertService = new AdvertService();

export default {
  name: 'advert',
  components: {
    PictureInput,
    CreateAdvert,
  },
  data() {
    return {
      file:'',
  image: null
    }
  },

  methods: {
    upload() {
      const form = new FormData();
      // // console.log(this.image)f
      form.append('advertImage', this.file);

      axios.post('https://naija-bdc.herokuapp.com/api/adverts/upload', 
          form,
          { headers: { 'Content-Type': 'multipart/form-data'}}
          )
        .then((res) => {console.log(res)})
        .catch(e => console.log(e));
    },

      selectFile(event) {
        // console.log(event)
        // console.log(event)
        // console.log(image);
        // this.image = image
        // console.log("image.this", image)
        // console.log(event);
        // console.log(this.$refs.pictureInput);
        this.file = this.$refs.pictureInput.file;
      },
      selectFileLeft(event) {
        console.log(event)
        this.file = event.target.files[0]
        console.log("this file", this.file)
      },
      selectFileRight(event) {
        console.log(event)
        this.file = event.target.files[0]
        console.log("this file", this.file)
      },
      selectFileBase(event) {
        console.log(event)
        this.file = event.target.files[0]
        console.log("this file", this.file)
      },


      async createAdvert() {
        const fd = new FormData();
        console.log("fd the formData", fd);
        
        fd.append('advertImage', this.file, this.file.name)
        
        await advertService.addAdvert(fd)
        // console.log("fd in advert.vue", fd)
        .then(resp => {
          console.log("respone is ", resp)         
        }).catch(err => console.log("trouble in aradise", err))        
      },

      async createAdvertLeft() {
        const fd = new FormData();
        console.log("Fd LEFT ==========>", fd);
        
        fd.append('advertImage', this.file, this.file.name)
        console.log("File", this.file)
        console.log("File Name", this.file.name)
        
        await advertService.addAdvertLeft(fd)
        .then(resp => {
          console.log("respone is ", resp)         
        }).catch(err => console.log("trouble in aradise", err))        
      },


      async createAdvertRight() {
        const fd = new FormData();
        console.log("Fd RIGHT ==========>", fd);
        
        fd.append('advertImage', this.file, this.file.name)
        console.log("File", this.file)
        console.log("File Name", this.file.name)
        
        await advertService.addAdvertRight(fd)
        .then(resp => {
          console.log("respone is ", resp)         
        }).catch(err => console.log("trouble in aradise", err))        
      },
        
        async createAdvertBase() {
        const fd = new FormData();
        console.log("Fd BASE ===========>", fd);
        
        fd.append('advertImage', this.file, this.file.name)
        console.log("File", this.file)
        console.log("File Name", this.file.name)
        
        await advertService.addAdvertBase(fd)
        .then(resp => {
           Vue.$toast.success('Upload successful', {
                  // optional options Object
                  position: 'top',
                  duration:3000,
                  dismissible:true
              })   
          console.log("respone is ", resp)         
        }).catch(err => console.log("trouble in aradise", err))        
      },

      async createAdvertLeft() {
        const fd = new FormData();
        console.log("Fd LEFT ==========>", fd);
        
        fd.append('advertImage', this.file, this.file.name)
        console.log("File", this.file)
        console.log("File Name", this.file.name)
        
        await advertService.addAdvertLeft(fd)
        .then(resp => {
           Vue.$toast.success(' Upload successful', {
                  // optional options Object
                  position: 'top',
                  duration:3000,
                  dismissible:true
              })         
        }).catch(err => console.log("trouble in aradise", err))        
      },


      async createAdvertRight() {
        const fd = new FormData();
        
        fd.append('advertImage', this.file, this.file.name)
        console.log("File", this.file)
        console.log("File Name", this.file.name)
        
        await advertService.addAdvertRight(fd)
        .then(resp => {
          console.log("respone is ", resp)
           Vue.$toast.success(' Upload successful', {
                  // optional options Object
                  position: 'top',
                  duration:3000,
                  dismissible:true
              })             
        }).catch(err => console.log("trouble in aradise", err))        
      },
        
        async createAdvertBase() {
        const fd = new FormData();
        console.log("Fd BASE ===========>", fd);
        
        fd.append('advertImage', this.file, this.file.name)
        console.log("File", this.file)
        console.log("File Name", this.file.name)
        
        await advertService.addAdvertBase(fd)
        .then(resp => {
          console.log("respone is ", resp)
           Vue.$toast.success(' Upload successful', {
                  // optional options Object
                  position: 'top',
                  duration:3000,
                  dismissible:true
              })             
        }).catch(err => console.log("trouble in aradise", err))        
      }
    }
};
</script>
<style>
</style>