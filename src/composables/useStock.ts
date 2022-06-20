
import { stocks } from '../data/stock'

import { reactive } from 'vue'

export const useStock = () => {

  const stocksList = reactive(stocks)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function updatedFunds(type: string,stock: any) {
    if( type === 'buy') {
      stocksList.data[stock.stockId].quantity = stocksList.data[stock.stockId].quantity + stock.quantity
      stocksList.funds = ( stocksList.funds - (stock.quantity * stocksList.data[stock.stockId].price))
    } else if ( type === 'sell') {
      stocksList.data[stock.stockId].quantity = stocksList.data[stock.stockId].quantity - stock.quantity
      stocksList.funds = ( stocksList.funds + (stock.quantity * stocksList.data[stock.stockId].price))
    }
  }

  return {
    stocksList,
    updatedFunds,
  }
}
