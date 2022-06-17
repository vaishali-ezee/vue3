
import { stocks } from '../data/stock'

import { reactive, ref } from 'vue'

export const useStock = () => {

  const stocksList = reactive(stocks.data)
  const funds = ref(stocks.funds);

  function updatedFunds(amount: number) {
    console.log(funds.value,amount)
    funds.value = ( funds.value - amount)
    console.log(funds.value,amount)
  }
  
  return {
    stocksList,
    funds,
    updatedFunds,
  }
}
