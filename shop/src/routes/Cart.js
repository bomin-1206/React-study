import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart() {

    let state = useSelector((state)=>{ return state }) // store에 있는 state를 모두 가져다씀
    // let state = useSelector((state)=>{ return state.user }) // store에 있는 user만 가져다씀
    console.log(state.stock)

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{state.cart[0].id}</td>
            <td>{state.cart[0].name}</td>
            <td>{state.cart[0].count}</td>
          </tr>
          <tr>
            <td>{state.cart[1].id}</td>
            <td>{state.cart[1].name}</td>
            <td>{state.cart[1].count}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
