<template>
  <div v-show="isActive">
    <slot></slot>
    <div class="table-responsive-md">
    <table class="table red1">
      <thead >
        <th></th>
        <th>DATE</th>
        <th>MORNING</th>
        <th>MIDDAY</th>
        <th>EVENING</th>
        <th>CURRENCY</th>
      </thead>
      <tbody>
        <tr v-for="(value, index) in getCurrencies()" :key="index">
          <td></td>
          <!-- <td v-for="item in rateCurrency.value" :key="item">
            <input type="checkbox" class="checkbox-custom" name="checkbox-1" id="checkbox-1" />
            <label for="checkbox-1" class="checkbox-custom-label p-10"></label>
            {{item}}
          </td> -->
          <td>{{value.morning? value.morning.date : value.afternoon? value.afternoon.date : value.evening.date}}</td>
          <td  style="color: rgb(0, 122, 255); font-weight:bolder" v-if="value.morning">
              {{ value.morning.buyingRate}} /{{ value.morning.sellingRate}}
          </td>
          <td v-else>&nbsp;</td>
          <td style="color: rgb(255, 156, 0); font-weight:bolder" v-if="value.afternoon">
              {{ value.afternoon.buyingRate}} /{{ value.afternoon.sellingRate}}
          </td>
          <td v-else>&nbsp;</td>          
          <td style="color: rgb(240, 0, 66); font-weight:bolder" v-if="value.evening">
              {{ value.evening.buyingRate}} /{{ value.evening.sellingRate}}
          </td>
          <td v-else>&nbsp;</td> 
          <td><img width="13" v-bind="`../../img/${value.morning? value.morning.baseCurrency : value.afternoon.baseCurrency}.svg`"/>
            {{value.morning? value.morning.baseCurrency : value.afternoon? value.afternoon.baseCurrency : value.evening.baseCurrency}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>
<script>
  export default {
    name: "tab",

    props: {
        name: { required: true },
        selected: { default: false },
        rate : {}
    },


    data() {
        return {
            isActive: false
        };
    },

    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },
    methods : {
      getCurrencies(){
        let locationCurrencies = this.rate.currencies;
        let values = locationCurrencies.map( locationCurrency => locationCurrency.value );
        console.log(values, 'valht')
        return  values;
      }
    },

    mounted() {
        this.isActive = this.selected;
        this.getCurrencies();
    }
  };
</script>