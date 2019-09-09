<template>
  <div v-show="isActive">
    <slot></slot>
    <div class="table-responsive-md">
      <table class="table red1">
        <thead>
          <th>DATE</th>
          <th>MORNING</th>
          <th>MIDDAY</th>
          <th>EVENING</th>
          <th>CURRENCY</th>
        </thead>
        <tbody>
          <tr v-for="(value, index) in getValues()" :key="value" :value="index">
            
            <td>{{value.date | formatDate}}</td>
            <td style="color: rgb(0, 122, 255); font-weight:bolder"
              v-if="value.value.morning"
            >{{ value.value.morning.buyingRate}} /{{value.value.morning.sellingRate}}</td>
            <td v-else>&nbsp;</td>
            <td style="color: rgb(255, 156, 0); font-weight:bolder"
              v-if="value.value.afternoon"
            >{{ value.value.afternoon.buyingRate}} /{{ value.value.afternoon.sellingRate}}</td>
            <td v-else>&nbsp;</td>
            <td style="color: rgb(240, 0, 66); font-weight:bolder"
              v-if="value.value.evening"
            >{{ value.value.evening.buyingRate}} /{{ value.value.evening.sellingRate}}</td>
            <td v-else>&nbsp;</td>
            <td>
              <img width="13" v-bind="`../../img/${value.currency}.svg`" />
              {{value.currency}}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import moment from "moment";

//Convert date format
Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("MM/DD/YYYY");
  }
});
export default {
  name: "tab",

  props: {
    name: { required: true },
    selected: { default: false },
    rate: {}
  },

  data() {
    return {
      vv: {},
      isActive: false,
    };
  },

  computed: {
    href() {
      return "#" + this.name.toLowerCase().replace(/ /g, "-");
    }
  },
  methods: {
    getCurrencies() {
      console.log("get_currencies", this.rate.dates.data);
      let locationCurrencies = this.rate.dates.data;
      let values = locationCurrencies.map(locationCurrency => ({
        date: locationCurrency.date,
        row: locationCurrency.value
      }));
      this.vv = values;
      console.log(values, "<====valhist");

      return values;
    },

    getValues() {
      let values = this.getCurrencies();
      console.log("values123 ====> ", values);
      let newValues = [];

      values.map(value => {
        let date = value.date;
        let values = value.row;

        for (var property in values) {
          if (values.hasOwnProperty(property)) {
            newValues.push({
              date: date,
              currency: property,
              value: values[property]
            });
          }
        }

        console.log("newValues=====>", newValues);
      });
      return newValues;
    }
  },

  mounted() {
    this.isActive = this.selected;
    this.getCurrencies();
   
  }
};
</script>