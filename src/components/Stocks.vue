<template>
{{funds}}
{{stocksList}}
 <template v-for="(stock, index) in stocksList" :key="stock.id">
  <div v-if="stock.isAvailable"  class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div class="bg-green-200">
        <h5 class="mb-2 text-xl tracking-tight text-green-700 py-2 px-4">{{ stock.name }} <span class="text-xs">( Price: {{ stock.price }} )</span></h5>
    </div>
    <div class="py-2 px-4 pb-4">
      <div class="inline-block mr-11"> 
        {{ insufficientFunds }}
        <input type="number" class="form-control block w-full px-2 py-1.5 text-base font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        v-model.number = quantity
        placeholder="Quantity"
        :class="{ 'border-red-600': insufficientFunds }"
      /> 
      </div>
      <div class="inline-block" @click="buyStock(index)"> 
        <button class="bg-green-500 hover:bg-green-700 text-white font-normal p-2 text-sm rounded">
          Buy
        </button> 
      </div>
    </div>
  </div>
  </template>
</template>

<script lang="ts">

import { useStock } from '../composables/useStock'

import { defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'stocks-section',
  data() {
    const quantity = 0
    const insufficientFunds = false
    const { stocksList, funds, updatedFunds } = useStock()
 
    return {
      quantity,
      stocksList,
      funds,
      insufficientFunds,
      updatedFunds,
    }
  },
  methods: {
    buyStock(index: number) {
      this.insufficientFunds = this.stocksList[index].price * this.quantity > this.funds
      if(!this.insufficientFunds) {
        this.stocksList[index].quantity = this.stocksList[index].quantity + this.quantity
        this.updatedFunds(this.stocksList[index].price * this.quantity)
      }
    }
  }
  
})
</script>