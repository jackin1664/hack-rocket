import Vue from 'vue'
import App from './App.vue'
import VCharts from 'v-charts'
const Web3 = require('web3');

if (window.web3 ){
  Vue.prototype.myWeb3 =  new Web3(window.web3.currentProvider);
}

if(window.ethereum){
    window.ethereum.enable()
}

Vue.use(VCharts)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
