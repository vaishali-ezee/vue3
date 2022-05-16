import stocks from '../../data/stocks';

const state = {
  stocks: [],
};

const getters = {
  stocks(state) {
    return state.stocks;
  },
};

const mutations = {
  'SET_STOCKS'(state, stocks) {
    state.stocks = stocks;
  },
  'RND_STOCKS'() {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    });
  },
  'ADD_STOCK'(state, { stockId, stockName, stockPrice }) {
      state.stocks.push({
        id: stockId,
        name: stockName,
        price: stockPrice,
      });
  },
};

const actions = {
  addStock(context, stocks) {
    context.commit('ADD_STOCK', stocks);
  },
  buyStock(context, order) {
    context.commit('BUY_STOCK', order);
  },
  initStocks(context) {
    context.commit('SET_STOCKS', stocks);
  },
  randomizeStocks(context) {
    context.commit('RND_STOCKS');
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
