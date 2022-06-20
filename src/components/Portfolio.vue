<template>
  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div class="bg-blue-100">
        <h5 class="mb-2 text-xl tracking-tight text-blue-700 py-2 px-4">{{ stock.name }} <span class="text-xs">( Price: {{ stock.price }} | Quantity: {{ stock.quantity }} )</span></h5>
    </div>
    <div class="py-2 px-4 pb-4">
      <div class="inline-block mr-11"> 
        <input type="number" class="form-control block w-full px-2 py-1.5 text-base font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Quantity"
        v-model.number = quantity
        :class="{ 'border-red-600': insufficientFunds }"
      /> 
      </div>
      <div class="inline-block"> 
        <button 
          class="bg-green-500 hover:bg-green-700 text-white font-normal p-2 text-sm rounded"
          :disabled="insufficientFunds || quantity <= 0"
          :class="insufficientFunds || quantity <= 0 ? 'opacity-50 cursor-not-allowed' : ''"
          @click="sellStock()"
          >
          Sell
        </button> 
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStock } from '../composables/useStock'
export default defineComponent({
  name: 'portfolio-section',
  props: ["stock"],
  data() {
    const { updatedFunds, stocksList } = useStock()
 
    return {
      quantity: 0,
      stocksList,
      updatedFunds,
    }
  },
  computed: {
    insufficientFunds() {
      return this.quantity > this.stock.quantity
    }
  },
  methods : {
    sellStock() {
      if(!this.insufficientFunds) {
      const data = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.updatedFunds('sell',data)
    }
      this.quantity = 0
    }
  }
})
</script>