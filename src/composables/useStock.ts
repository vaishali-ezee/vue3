
import stocks from '../data/stock'

export const useStock = () => {
  const stocksList = stocks
   function availableStock (data : unknown[]) {
    console.log(data);
    const response = data
    return response
  }

  return {
    stocksList,
    availableStock,
  }
}
