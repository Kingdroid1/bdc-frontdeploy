<template>
  <div>
    <nav class="fixed-bottom">
      <marquee-text :repeat="10" class="marquee bottom" style="display: flex">
        <div v-for="rate in rates" :key="rate" class="rateDisplay">
          {{rate.location}}   
          <div v-for="currency in rate.currencies" :key="currency" style="display: flex;">
          <img :src="`../../../img/${currency.currency}.svg`" :alt="currency.currency" width="20" height="10"> <p style="margin-right: 4px">{{currency.currency}} &nbsp; &nbsp; </p>
            <span> 
            {{currency.value.morning.buyingRate}}/{{currency.value.morning.sellingRate}}
          </span>
          </div>  

        </div>
         
      </marquee-text>
      
      <div class="marquee bottom">
        <!-- EXCHANGERATES.ORG.UK LIVE CURRENCY RATES TICKER START -->
        <iframe
          src="//www.exchangerates.org.uk/widget/ER-LRTICKER.php?w=1400&s=3&mc=NGN&mbg=191919&bs=yes&bc=141413&f=verdana&fs=12px&fc=FFFFFF&lc=F7F7F7&lhc=FE9A00&vc=FE9A00&vcu=008000&vcd=FF0000&"
          width="1400" height="30" frameborder="0" scrolling="no" marginwidth="0" marginheight="0"></iframe>
        <!-- EXCHANGERATES.ORG.UK LIVE CURRENCY RATES TICKER END -->
      </div>
    </nav>
  </div>
</template>

<script>
  import MarqueeText from 'vue-marquee-text-component';
  import axios from 'axios';
  // import { RateService } from "../services/rateservice";
 // const rateService = new RateService();

  export default {
    components: {
      MarqueeText
    },
    data() {
      return {
        rates: []
      }
    },
    methods: {
     async getRates() {
       const API_URL = "https://naija-bdc.herokuapp.com/api/rates/scroll";
        await axios
          .get(API_URL)
          .then(response => {
            let newRate =  response.data.result;
              for (let index = 0; index < newRate.length; index++) {
                const element = newRate[index];
                this.rates.push(element);
              }
          })
          .catch(error => {
            console.log('scrool',error);
          });
      }
    },
    mounted() {
      this.getRates();
    } 
  };
</script>

<style scoped>
  nav.fixed-bottom {
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.16);
    /* border: solid 1px #ebebf2; */
    color: #fff;
    background: rgba(0, 0, 0, 0.8);
  }

  .marquee {
    height: 35px;
    width: 1530px;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
  }

  .bottom {
    margin-bottom: -0.28rem;
  }
  .marquee-text-text{
    display:flex;
    /* width: 1200px;  */
    width: 1320px;
  }

  .marquee--inner {
    display: block;
    width: 200%;
    color: #fff !important;
    font-size: 15px;
    font-family: source sans pro;
    position: absolute;
    animation: marquee 35s linear infinite;
  }

  .marquee--inner:hover {
    animation-play-state: paused;
  }
.rateDisplay{
  display: flex; 
  width: 600px; 
  justify-content: center;
}
img{
  /* margin-top: 8px;
  margin-right: 3px; */
margin: 8px 5px 0px;
}
  span {
    float: left;
    width: 100%;
  }

  @keyframes marquee {
    0% {
      left: 0;
    }

    100% {
      left: -100%;
    }
  }
</style>