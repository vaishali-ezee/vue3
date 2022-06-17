<template>
  <div v-for="stock in stockList" :key="stock.id" class="flex item-start items-center mb-4 ml-6" >
    <input type="checkbox" v-model="stock.isAvailable" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded">
    <label class="text-sm ml-3 font-medium text-gray-900">{{ stock.name }}</label>
  </div>
</template>

<script lang="ts">

import { useStock } from '../composables/useStock'

import { defineComponent } from 'vue'
export default defineComponent({
  name: 'watches-section',
  data() {
    const { stocksList } = useStock()
 
    return {
      stockList: stocksList,
    }
  },
})
</script>