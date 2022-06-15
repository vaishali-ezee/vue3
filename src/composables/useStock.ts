/* eslint-disable @typescript-eslint/no-unused-vars */

import stocks from '../data/stock'

import { reactive } from 'vue'

export const useStock = () => {
  const stocksList = reactive(stocks) 
  const availableStockList: string[] = reactive([]) 

  function checkedItem ( data : object ) {
    const checkedData  = Object.assign([], data)
    // console.log('availableStockList.a',availableStockList.a)
    // availableStockList.push([1])

    // Object.keys(availableStockList).map(function(key, index) {
    //   availableStockList[key] *= 2;
    // })
    checkedData.map(value => 
      availableStockList.push(value)
    )
    console.log(availableStockList);
  }

  return {
    stocksList,
    availableStockList,
    checkedItem
  }
}
