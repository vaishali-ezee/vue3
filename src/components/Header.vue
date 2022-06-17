<template>
  <header>
    {{stocksList}}
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
      <div class="px-24 w-full flex flex-wrap items-center justify-between">
      <div class="flex items-center flex-shrink-0 text-black mr-6 text-xl font-semibold">
        <RouterLink to="/"> Stock Trader </RouterLink>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <ul class="navbar-nav mr-auto lg:flex lg:flex-row">
          <li class="nav-item">
            <RouterLink class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-800 focus:text-gray-800 transition duration-150 ease-in-out" to="/portfolio">Portfolio</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-800 focus:text-gray-800 transition duration-150 ease-in-out" to="/stocks">Stocks</RouterLink>
          </li>
          <li class="nav-item">
              <RouterLink class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-800 focus:text-gray-800 transition duration-150 ease-in-out" to="/watches">Watches</RouterLink>
          </li>
        </ul>
        <div>
          <p class="inline-block font-medium text-base pr-2 lg:px-2 py-2">Funds: {{funds}}</p>
        </div>
      </div>
      </div>
    </nav>
    <!-- Navbar -->
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStock } from '../composables/useStock'

export default defineComponent({
  name: 'header-section',
   data() {
    const { stocksList, funds } = useStock() 
    return {
      funds,
      stocksList,
    }
  },
})
</script>