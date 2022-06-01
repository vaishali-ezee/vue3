<template>
  <div class="grid grid-cols-6 gap-4">
    <div class="col-start-2 col-span-4">
      <h4 class="font-medium leading-tight text-2xl mt-0 mb-6 text-gray-900">Watches list</h4>
      <watches />
    </div>
  </div>
</template>


<script lang="ts">
import Watches from '../components/Watches.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'watches-section',
  components: { Watches },
})
</script>