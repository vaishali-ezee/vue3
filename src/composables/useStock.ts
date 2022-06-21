
import { stocks } from '../data/stock'

import { reactive } from 'vue'

export const useStock = () => {

  const stocksList = reactive(stocks)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function updatedFunds(type:string,stock: any) {
    // console.log('type-',type,'stock-',stock,stocksList.data[stock.stockId].quantity)
    // type === 'sell' ? stocksList.data[stock.stockId].quantity += stock.quantity : stocksList.data[stock.stockId].quantity -= stock.quantity

    // type === 'buy' ? stocksList.funds -= stock.quantity * stocksList.data[stock.stockId].price : stocksList.funds += stock.quantity * stocksList.data[stock.stockId].price

    // console.log(stocksList.data[stock.stockId].quantity -= stock.quantity,stocksList.data[stock.stockId].quantity)
    // if( type === 'buy') {
    //   stocksList.data[stock.stockId].quantity = stocksList.data[stock.stockId].quantity + stock.quantity
    //   stocksList.funds = ( stocksList.funds - (stock.quantity * stocksList.data[stock.stockId].price))
    // } else if ( type === 'sell') {
    //   stocksList.data[stock.stockId].quantity = stocksList.data[stock.stockId].quantity - stock.quantity
    //   stocksList.funds = ( stocksList.funds + (stock.quantity * stocksList.data[stock.stockId].price))
    // }
    // if( type === 'buy') {
    //   stocksList.data[stock.stockId].quantity += stock.quantity
    //   stocksList.funds -= (stock.quantity * stocksList.data[stock.stockId].price)
    // } else if ( type === 'sell') {
    //   stocksList.data[stock.stockId].quantity -= stock.quantity
    //   stocksList.funds += (stock.quantity * stocksList.data[stock.stockId].price)
    // }

    type === 'buy' ?  ( stocksList.data[stock.stockId].quantity += stock.quantity, stocksList.funds -= (stock.quantity * stocksList.data[stock.stockId].price)): ( stocksList.data[stock.stockId].quantity -= stock.quantity, stocksList.funds += (stock.quantity * stocksList.data[stock.stockId].price))
  }

  return {
    stocksList,
    updatedFunds,
  }
}
