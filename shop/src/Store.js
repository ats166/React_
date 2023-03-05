import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'


let cartdata = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 }
  ],
  reducers : {
    countPlus(state,action) {
      state.map(function (name,i) {
        if (name.id === action.payload) {
          name.count += 1
        }
      })
    },
    cartPlus(state,action) {
      let item = {}
      item.id = action.payload.id
      item.name = action.payload.title
      item.count = 1
      console.log(item,'dd');
      state.push(item)
      console.log(state);
    }
  }
})

export let { countPlus, cartPlus } = cartdata.actions

export default configureStore({
  reducer: {
    cartdata: cartdata.reducer,
    user : user.reducer
  }
}) 