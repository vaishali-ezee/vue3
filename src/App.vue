<template>
 <Header />
  <main class="px-24 py-6">
    <RouterView />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
export default defineComponent({
  components: { Header, RouterView },
})
</script>
