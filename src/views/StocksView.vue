<template>
  <div class="grid grid-cols-3 gap-3">
    <template v-for="stock in stocksList.data" :key="stock.id">
      <Stocks v-if="stock.isAvailable" :key="stock.id" :stock="stock" />
    </template>
  </div>
</template>

<script lang="ts">

import Stocks from '../components/Stocks.vue'
import { useStock } from '../composables/useStock'

import { defineComponent } from 'vue'
export default defineComponent({
  name: 'stocks-section',
  components: { Stocks },
  data() {
    const { stocksList } = useStock()
 
    return {
      quantity: [],
      stocksList,
    }
  },
})
</script>