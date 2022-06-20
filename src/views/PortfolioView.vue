<template>
  <div class="grid grid-cols-3 gap-3">
    <template v-for="stock in stocksList.data" :key="stock.id">
      <Portfolio v-if="stock.isAvailable && stock.quantity != 0" :key="stock.id" :stock="stock" />
    </template>
  </div>
</template>

<script lang="ts">

import Portfolio from '../components/Portfolio.vue'
import { useStock } from '../composables/useStock'

import { defineComponent } from 'vue'
export default defineComponent({
  name: 'portfolio-section',
  components: { Portfolio },
  data() {
    const { stocksList } = useStock()
 
    return {
      stocksList,
    }
  },
})
</script>