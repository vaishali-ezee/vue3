
import stocks from '../data/stock'

import { reactive } from 'vue'

export const useStock = () => {
  const stocksList = reactive(stocks) 

  return {
    stocksList,
  }
}
