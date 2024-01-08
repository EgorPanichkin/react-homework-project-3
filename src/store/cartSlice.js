import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  buyingProducts: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    buyProduct(state, action) {
      const buyingProducts = state.buyingProducts
      const selectProduct = action.payload
      let isFind = false
      for (let i = 0; i < buyingProducts.length; i++) {    // поиск повторяющихся товаров
        if (buyingProducts[i].id == selectProduct.id){
          buyingProducts[i].count ++
          isFind = true
          break
        }
      }
      if (!isFind) {
        buyingProducts.push(action.payload)  // если такого товара в корзине нет
      }
    },
    refuseProduct(state, action) {
      // state.buyingProducts.forEach((item, index) => {
      //   if (item.id == action.payload) {
      //     return state.buyingProducts.splice(index, 1)
      //   }
      // })
      return { buyingProducts: state.buyingProducts.filter((item) => item.id != action.payload) }
    },
    increaseCountProduct(state, action) {
      state.buyingProducts.find(prod => prod.id == action.payload).count ++
    },
    decreaseCountProduct(state, action) {
      const prod = state.buyingProducts.find(prod => prod.id == action.payload)
      if (prod.count > 1) {
        prod.count --
      }
    }
  }
})

export const cartAcions = cartSlice.actions
export const cartReducer = cartSlice.reducer