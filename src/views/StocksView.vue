<template>
  <div class="grid grid-cols-3 gap-3">
    <Stocks />
  </div>
</template>

<script lang="ts">
import Stocks from '../components/Stocks.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'stocks-section',
  components: { Stocks },
})
</script>