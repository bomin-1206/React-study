import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../store";
import { increase } from "../store/userSlice";

function Cart() {

    let state = useSelector((state)=>{ return state }) // store에 있는 state를 모두 가져다씀
    // let state = useSelector((state)=>{ return state.user }) // store에 있는 user만 가져다씀
    let dispatch = useDispatch(); // store.js로 요청보내주는 함수
    console.log(state.stock)

  return (
    <div>
      {state.user.name} {state.user.age}의 장바구니
      <button onClick={()=>{
        dispatch(increase())
      }}>버튼</button>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {
            state.cart.map((e, i)=>{
              return (
                <tr key={i}>
                  <td>{state.cart[i].id}</td>
                  <td>{state.cart[i].name}</td>
                  <td>{state.cart[i].count}</td>
                  <td><button onClick={()=>{
                    // dispatch(addCount(i))
                    dispatch(addCount(state.cart[i].id))
                  }}>+</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
