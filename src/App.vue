<template>
 <Header />
  <main class="px-24 py-6">
    {{a}}
    <RouterView />
  </main>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import { useStock } from './composables/useStock'
export default defineComponent({
  components: { Header, RouterView },
   data() {
    const { stocksList, availableStockList  } = useStock()

    const a = computed(() => { return availableStockList})
 
    return {
      stocksList,
      availableStockList,
      a,
    }
  },
})
</script>
