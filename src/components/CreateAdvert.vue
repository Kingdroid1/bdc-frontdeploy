<template>
    <div>
        
        <!-- Advert Section -->
        <div class="col-12 mb-3">
            <b class="p-15">{{ title }}</b>
            <br />
            <small class="l-12">{{ description }}</small>
        </div>
        <div class="col-12 mb-4">
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
                      <div class="custom-file">
                        <input type="file" accept="images/*" ref='file' class="custom-file-input" id="validatedCustomFile"  />
                        <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
                      </div>
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
                      <button class="btn btn-green px-5" @click="createAdvert">Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    props: ['title', 'description', 'type'],

    methods: {
        async createAdvert() {
            console.log('Callled')
            const form = new FormData();
            // // console.log(this.image)f
            console.log(this.$refs.file.files);
            form.append('advertImage', this.$refs.file.files[0]);
            form.append('type', this.type);
            try {
                const response = await axios.post(
                    'https://naija-bdc.herokuapp.com/api/adverts/upload', 
                    form,
                    { headers: { 'Content-Type': 'multipart/form-data'} }
                );
                
                console.log(response);
                alert('Uploaded');
                
            } catch (e) {
                console.log(e);
            }
        }
    },

};
</script>