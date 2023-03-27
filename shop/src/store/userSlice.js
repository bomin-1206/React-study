import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  // useState 역할
  name: "user",
  initialState: { name: "kim", age: 20 },
  reducers: {
    changeName(state) {
      // 기존 state를 뜻함
      // return { name : 'park', age : 20}
      state.name = "park";
    },
    increase(state, action) {
      state.age += action.payload; // state 변경함수를 action이라고 함.
    },
  },
});


export let { changeName, increase } = user.actions // state 변경함수들 남음

export default user;