import { createSlice } from "@reduxjs/toolkit";
import products from '../data/data.json'

const initialState = {
  catalog: products,
  buyingProducts: []
}

const productSlice = createSlice({
  name: 'products',
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
      state.buyingProducts.forEach((item, index) => {
        if (item.id == action.payload) {
          return state.buyingProducts.splice(index, 1)
        }
      })
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

export const productAcions = productSlice.actions
export const productReducer = productSlice.reducer