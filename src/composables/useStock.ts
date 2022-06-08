
import stocks from '../data/stock'

export const useStock = () => {
  const stocksList = stocks
  let stocksAvailableData: unknown[] = []
  function availableStock (data : unknown[]) {
    console.log(data);
    stocksAvailableData = data
  }

  return {
    stocksAvailableData,
    stocksList,
    availableStock,
  }
}
